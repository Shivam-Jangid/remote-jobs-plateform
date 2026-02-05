'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, Users, Plus } from "lucide-react";
import { useState } from "react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/", icon: <Home size={24} /> },
  { label: "Platforms", href: "/platforms", icon: <Briefcase size={24} /> },
  { label: "Profile", href: "/profile", icon: <Users size={24} /> },
  { label: "Add platform", href: "/apply", icon: <Plus size={24} /> },
];

export default function Dock() {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="fixed left-3 top-1/2 -translate-y-1/2 z-40">
      <div className="flex flex-col items-center gap-3 px-3 py-4 bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200/50 shadow-2xl">
        {navItems.map((item, index) => (
          <Link
            key={item.label}
            href={item.href}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`p-3 rounded-lg transition-all duration-200 flex items-center justify-center ${
                isActive(item.href)
                  ? "text-purple-500"
                  : "text-slate-600 hover:text-slate-900 group-hover:scale-110"
              } ${hoveredIndex === index ? "scale-125 bg-[#d8abff7f]" : "scale-100"}`}
            >
              {item.icon}
            </div>

            <div
              className={`absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2 py-1 bg-slate-800 text-white text-xs rounded-md whitespace-nowrap pointer-events-none transition-opacity duration-200 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              {item.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
