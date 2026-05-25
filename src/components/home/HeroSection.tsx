import * as React from "react";
import { Button } from "@/components/common/Button";
import { Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden py-24 md:py-32 flex flex-col items-center text-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/20 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-8">
        <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 animate-pulse">
            Event Management Evolved
        </span>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
          The Future of <span className="bg-gradient-to-r from-primary via-[#A78BFA] to-secondary bg-clip-text text-transparent">Event Management</span>
        </h1>
        
        <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl">
          Powering the world's most ambitious events with seamless logistics, immersive attendee experiences, and real-time data orchestration.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button variant="primary" size="lg" className="min-w-[180px]">
            Get Started
          </Button>
          <Button variant="secondary" size="lg" className="min-w-[180px]" leftIcon={<Play className="w-5 h-5 fill-white" />}>
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export const StatsSection = () => {
  const stats = [
    { value: "10k+", label: "Events Hosted" },
    { value: "5M+", label: "Tickets Sold" },
    { value: "98%", label: "Satisfaction" },
    { value: "50+", label: "Countries" },
  ];

  return (
    <section className="w-full py-12 border-y border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4 gap-2">
              <span className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
