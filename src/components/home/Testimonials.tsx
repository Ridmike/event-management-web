"use client";

import * as React from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/constants/events";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/common/Button";
import { Card } from "@/components/common/Card";
import { cn } from "@/utils/cn";

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const current = TESTIMONIALS[activeIndex];

  return (
    <section className="w-full py-24 flex flex-col items-center gap-12">
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-2xl font-bold text-white">Trusted by the Best</h2>
        <div className="w-12 h-1 bg-primary rounded-full" />
      </div>

      <div className="relative w-full max-w-4xl px-6">
        <Card className="p-8 md:p-12 bg-[#111111] border-white/5 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center md:items-start transition-all duration-500">
           {/* Quote Icon */}
          <div className="absolute top-8 left-8 text-primary/10">
            <Quote size={80} fill="currentColor" />
          </div>

          {/* Avatar Area */}
          <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-full overflow-hidden border-2 border-primary/20 p-1">
            <div className="w-full h-full rounded-full bg-[#1A1A1A] overflow-hidden">
               {/* Placeholder for actual Image */}
               <div className="w-full h-full bg-linear-to-br from-primary/20 to-secondary/20" />
            </div>
          </div>

          {/* Content Area */}
          <div className="relative z-10 flex flex-col gap-6 text-center md:text-left">
            <div className="text-primary">
              <Quote size={32} fill="currentColor" className="rotate-180 inline-block mb-2" />
            </div>

            <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed italic">
              "{current.quote}"
            </p>

            <div className="flex flex-col gap-1">
              <h4 className="text-lg font-bold text-primary">{current.name}</h4>
              <p className="text-xs font-bold uppercase tracking-widest text-white/40">{current.role}</p>
            </div>
          </div>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <Button 
            variant="icon" 
            size="icon" 
            onClick={prev}
            className="w-10 h-10 border-white/5 bg-white/5 hover:bg-white/10"
          >
            <ChevronLeft size={20} />
          </Button>
          <Button 
            variant="icon" 
            size="icon" 
            onClick={next}
            className="w-10 h-10 border-white/5 bg-white/5 hover:bg-white/10"
          >
            <ChevronRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};
