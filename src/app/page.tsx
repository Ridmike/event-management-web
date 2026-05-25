import { StatCard, FeatureCard, ProfileCard, EventCard } from "@/components/common/CardVariants";
import { HeroSection, StatsSection } from "@/components/home/HeroSection";
import { TestimonialsSection } from "@/components/home/Testimonials";
import { EVENTS } from "@/constants/events";
import { AtSign, Rocket, Link2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const featuredEvents = EVENTS.filter(e => e.isFeatured);

  return (
    <div className="flex flex-col min-h-screen bg-black font-sans text-white">
      <HeroSection />
      <StatsSection />
      
      <main className="flex flex-col gap-24 max-w-7xl mx-auto w-full py-24 px-8">
        
        {/* Featured Events Section */}
        <section className="flex flex-col gap-10">
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-bold">Featured Events</h2>
              <p className="text-white/50 text-sm">Discover world-class productions powered by Lumina.</p>
            </div>
            <Link href="/events" className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
              View All Events <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredEvents.map(event => (
              <EventCard 
                key={event.id}
                title={event.title}
                description={event.description}
                image={event.image}
                date={event.date}
                category={event.category}
                variant="full"
              />
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Mission & Team (Moved down for better flow) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
             <StatCard value="500+" label="Global Events" />
          </div>
          <div className="md:col-span-2">
            <FeatureCard 
              title="Our Mission" 
              description="To empower event organizers with high-performance tools that bridge the gap between physical experience and digital control."
              icon={<Rocket size={24} />}
            />
          </div>
        </section>

        <section className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold border-l-4 border-primary pl-4">Our Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <ProfileCard 
              name="Alexander Vance" 
              role="Founder & CEO" 
              image="/team/vance.jpg"
              socials={
                <>
                  <AtSign size={16} className="cursor-pointer hover:text-white transition-colors" />
                  <Link2 size={16} className="cursor-pointer hover:text-white transition-colors" />
                </>
              }
            />
          </div>
        </section>
      </main>
    </div>
  );
}
