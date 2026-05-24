import * as React from "react";
import Link from "next/link";
import { LayoutGrid, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Logo & About */}
          <div className="flex flex-col gap-6 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
               <div className="bg-primary p-1.5 rounded-lg">
                <LayoutGrid size={18} className="text-white fill-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Lumina</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              The next-generation operating system for the world's most demanding events and production teams.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Navigation</h4>
            <div className="flex flex-col gap-3">
              <Link href="/events" className="text-white/50 hover:text-primary transition-colors text-sm">Events</Link>
              <Link href="/about" className="text-white/50 hover:text-primary transition-colors text-sm">About Us</Link>
              <Link href="/booking" className="text-white/50 hover:text-primary transition-colors text-sm">Booking</Link>
              <Link href="/support" className="text-white/50 hover:text-primary transition-colors text-sm">Support</Link>
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Legal</h4>
            <div className="flex flex-col gap-3">
              <Link href="/privacy" className="text-white/50 hover:text-primary transition-colors text-sm">Privacy Policy</Link>
              <Link href="/terms" className="text-white/50 hover:text-primary transition-colors text-sm">Terms of Service</Link>
              <Link href="/cookie" className="text-white/50 hover:text-primary transition-colors text-sm">Cookie Policy</Link>
              <Link href="/partners" className="text-white/50 hover:text-primary transition-colors text-sm">Partners</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Contact</h4>
            <p className="text-white/50 text-sm leading-relaxed">
              Got questions? Reach out to our specialist team 24/7.
            </p>
            <Link 
              href="mailto:hello@luminaos.com" 
              className="flex items-center gap-2 text-primary font-bold text-sm group"
            >
              <Mail size={16} className="group-hover:translate-x-1 transition-transform" />
              hello@luminaos.com
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col items-center gap-4">
          <p className="text-white/30 text-xs text-center">
            &copy; {new Date().getFullYear()} Lumina Event OS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
