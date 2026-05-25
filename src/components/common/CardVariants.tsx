import * as React from "react";
import Image from "next/image";
import { Button } from "./Button";
import { Card } from "./Card";
import { cn } from "@/utils/cn";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

// --- Stat Card ---
interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export const StatCard = ({ value, label, className }: StatCardProps) => (
  <Card className={cn("p-8 flex flex-col gap-2 min-w-50", className)}>
    <span className="text-4xl font-bold text-primary">{value}</span>
    <span className="text-xs font-bold uppercase tracking-widest text-white/40">{label}</span>
  </Card>
);

// --- Feature Card ---
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export const FeatureCard = ({ title, description, icon, className }: FeatureCardProps) => (
  <Card className={cn("p-8 flex flex-col gap-4 group relative overflow-hidden", className)}>
    <div className="bg-white/5 w-12 h-12 rounded-full flex items-center justify-center text-primary border border-white/10 group-hover:bg-primary group-hover:text-white transition-colors">
      {icon}
    </div>
    <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
      {/* Cast to any to allow className prop in cloneElement */}
      {React.cloneElement(icon as React.ReactElement<any>, { className: "w-20 h-20" })}
    </div>
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-white/60 leading-relaxed text-sm">{description}</p>
  </Card>
);

// --- Profile Card ---
interface ProfileCardProps {
  name: string;
  role: string;
  image: string;
  socials?: React.ReactNode;
}

export const ProfileCard = ({ name, role, image, socials }: ProfileCardProps) => (
  <Card className="overflow-hidden border-none bg-transparent group">
    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-4 bg-[#1A1A1A]">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <div className="px-2">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-xs font-bold text-primary/80 uppercase tracking-widest mt-1">{role}</p>
      {socials && <div className="mt-4 flex gap-3 text-white/40">{socials}</div>}
    </div>
  </Card>
);

// --- Event Card ---
interface EventCardProps {
  title: string;
  description?: string;
  image: string;
  date?: string;
  location?: string;
  price?: string;
  category?: string;
  variant?: "compact" | "overlay" | "full";
  className?: string;
}

export const EventCard = ({ 
  title, 
  description, 
  image, 
  date, 
  location, 
  price, 
  category,
  variant = "full",
  className
}: EventCardProps) => {
  if (variant === "overlay") {
    return (
      <Card className={cn("relative aspect-video overflow-hidden group border-none", className)}>
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
        <div className="absolute bottom-6 left-6 z-20 flex flex-col gap-3">
          <h3 className="text-2xl font-bold text-white drop-shadow-md">{title}</h3>
          <Button variant="pill" size="sm" className="w-fit">CASE STUDY</Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className={cn("overflow-hidden group flex flex-col h-full bg-[#111111]", className)}>
      <div className="relative aspect-16/10 overflow-hidden">
        {category && (
          <div className="absolute top-4 right-4 z-20">
             <Button variant="primary" size="pill" className="h-7 text-[10px]">{category}</Button>
          </div>
        )}
        {date && variant === "compact" && (
           <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-bold border border-white/10 uppercase tracking-wider text-white">
             {date}
           </div>
        )}
        <div className="bg-[#1A1A1A] w-full h-full group-hover:scale-105 transition-transform duration-500" />
      </div>
      
      <div className="p-6 flex flex-col flex-1 gap-4">
        <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{title}</h3>
        
        {description && (
          <p className="text-white/50 text-sm line-clamp-2 leading-relaxed">
            {description}
          </p>
        )}

        {(date || location) && variant === "full" && (
          <div className="flex flex-col gap-2 mt-auto">
            {date && (
              <div className="flex items-center gap-2 text-primary text-xs font-bold tracking-wide uppercase">
                <Calendar size={14} />
                {date}
              </div>
            )}
            {location && (
              <div className="flex items-center gap-2 text-white/40 text-xs">
                <MapPin size={14} />
                {location}
              </div>
            )}
          </div>
        )}

        {variant === "compact" && location && (
           <div className="flex items-center gap-2 text-white/40 text-xs">
            <MapPin size={14} />
            {location}
          </div>
        )}

        <div className={cn(
          "flex items-center justify-between pt-4 border-t border-white/5 mt-auto",
          variant === "full" ? "mt-4" : "mt-2"
        )}>
          {price ? (
            <span className="text-lg font-bold text-primary">{price}</span>
          ) : (
            <div /> 
          )}
          
          <Button 
            variant={variant === "full" ? "ghost" : "secondary"} 
            size="sm" 
            className={variant === "full" ? "p-0 hover:bg-transparent hover:text-primary transition-colors h-auto" : "px-6"}
            rightIcon={variant === "full" ? <ArrowRight size={16} /> : undefined}
          >
            {variant === "full" ? "Register Now" : "Register"}
          </Button>
        </div>
      </div>
    </Card>
  );
};
