"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export function Hero() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleNavigate = (path: string) => {
    setLoading(true);
    router.push(path);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-muted border-t-foreground" />

        <p className="mt-6 text-lg font-medium animate-pulse">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center mt-40 mb-10 flex-col">
      <h1 className="text-4xl max-w-2xl text-center mb-5">
        Discover the Best Remote Jobs & Freelance Platforms
      </h1>

      <div className="space-y-6">
        <p className="md:max-w-lg text-base text-center text-accent-foreground/70">
          Explore trusted remote job platforms, connect with professionals,
          and join a growing community built to help you find your next
          opportunity faster.
        </p>

        <div className="flex items-center justify-center">
          <div className="flex items-center gap-5">
            <Button
              onClick={() => handleNavigate("/platforms")}
              className="bg-linear-to-r from-red-500 to-pink-400 py-5 px-6 rounded-md font-medium hover:-translate-y-1 hover:scale-105"
            >
              Start Working
            </Button>

            <Button
              onClick={() => handleNavigate("/community")}
              className="py-5 px-6 rounded-md hover:-translate-y-1 font-medium hover:scale-105"
            >
              Community
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}