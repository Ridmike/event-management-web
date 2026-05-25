"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/common/Button";
import { LayoutGrid, Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "About", href: "/about" },
  { name: "Booking", href: "/booking" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-2 bg-black">
      <div className="max-w-7xl mx-auto bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3 flex items-center justify-between shadow-2xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <LayoutGrid size={18} className="text-white fill-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Lumina <span className="text-primary italic">Event OS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-semibold transition-all relative py-1",
                pathname === link.href
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              )}
            >
              {link.name}
              {pathname === link.href && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <Button variant="primary" size="sm" className="px-6 rounded-xl">
            Get Started
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-6 right-6 bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 animate-in fade-in zoom-in duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-semibold py-2 transition-colors",
                pathname === link.href ? "text-primary" : "text-white/70"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="primary" className="w-full mt-4">
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
};
