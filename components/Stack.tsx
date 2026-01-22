"use client";

import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { CardRotate } from "./CardRotate";

interface StackProps {
  cards?: React.ReactNode[];
  randomRotation?: boolean;
  sensitivity?: number;
  animationConfig?: { stiffness: number; damping: number };
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  mobileClickOnly?: boolean;
  mobileBreakpoint?: number;
}

interface StackItem {
  id: number;
  content: React.ReactNode;
  rotation: number;
}

export default function Stack({
  cards = [],
  randomRotation = false,
  sensitivity = 200,
  animationConfig = { stiffness: 260, damping: 20 },
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  mobileClickOnly = false,
  mobileBreakpoint = 768,
}: StackProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [mounted, setMounted] = useState(false);

  // SSR-safe mount detection
  useEffect(() => {
    setMounted(true);
  }, []);

  // Mobile detection
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < mobileBreakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [mobileBreakpoint]);

  const shouldDisableDrag = mobileClickOnly && isMobile;

  // Initialize stack ONCE with deterministic server output
  const [stack, setStack] = useState<StackItem[]>(() =>
    cards.length
      ? cards.map((content, i) => ({
          id: i + 1,
          content,
          rotation: 0, // server-safe
        }))
      : []
  );

  // Generate random rotations ONLY after mount
  useEffect(() => {
    if (!mounted) return;

    setStack((prev) =>
      prev.map((card) => ({
        ...card,
        rotation: randomRotation ? Math.random() * 10 - 5 : 0,
      }))
    );
  }, [mounted, randomRotation]);

  // Autoplay
  useEffect(() => {
    if (!autoplay || stack.length < 2 || isPaused) return;

    const interval = setInterval(() => {
      setStack((prev) => {
        const next = [...prev];
        const last = next.pop()!;
        next.unshift(last);
        return next;
      });
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [autoplay, autoplayDelay, stack.length, isPaused]);

  return (
    <div
      className="relative w-full h-full"
      style={{ perspective: 600 }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {stack.map((card, index) => (
        <CardRotate
          key={card.id}
          onSendToBack={() =>
            setStack((prev) => {
              const next = [...prev];
              const idx = next.findIndex((c) => c.id === card.id);
              const [item] = next.splice(idx, 1);
              next.unshift(item);
              return next;
            })
          }
          sensitivity={sensitivity}
          disableDrag={shouldDisableDrag}
        >
          <motion.div
            className="rounded-2xl overflow-hidden w-full h-full"
            animate={{
              rotateZ: (stack.length - index - 1) * 4 + card.rotation,
              scale: 1 + index * 0.06 - stack.length * 0.06,
              transformOrigin: "90% 90%",
            }}
            initial={false}
            transition={{
              type: "spring",
              stiffness: animationConfig.stiffness,
              damping: animationConfig.damping,
            }}
          >
            {card.content}
          </motion.div>
        </CardRotate>
      ))}
    </div>
  );
}
