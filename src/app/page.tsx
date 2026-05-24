import { Button } from "@/components/common/Button";
import { StatCard, FeatureCard, ProfileCard, EventCard } from "@/components/common/CardVariants";
import { Globe, AtSign, Share2, Play, Rocket, Link2, Ghost } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black p-8 font-sans">
      <main className="flex flex-col gap-24 items-center max-w-6xl mx-auto w-full">
        <h1 className="text-4xl font-bold text-white mb-8">Button Variants Showcase</h1>
        
        {/* Row 1: Primary & Outline (Hero Style) */}
        <div className="flex gap-4 items-center">
          <Button variant="primary" size="lg">
            Get Started
          </Button>
          <Button variant="outline" size="lg" leftIcon={<Play className="w-5 h-5 fill-white" />}>
            Watch Demo
          </Button>
        </div>

        {/* Row 2: Secondary / Register */}
        <div className="flex gap-4 items-center">
          <Button variant="secondary">
            Register
          </Button>
        </div>

        {/* Row 3: Icon Buttons */}
        <div className="flex gap-6 items-center">
          <Button variant="icon" size="icon">
            <Globe className="w-5 h-5" />
          </Button>
          <Button variant="icon" size="icon">
            <AtSign className="w-5 h-5" />
          </Button>
          <Button variant="icon" size="icon">
            <Share2 className="w-5 h-5" />
          </Button>
        </div>

        {/* Row 4: Pill/Chips */}
        <div className="flex gap-3 items-center">
          <Button variant="pill" className="border-primary/60 text-primary">ALL</Button>
          <Button variant="pill">TECH</Button>
          <Button variant="pill">MUSIC</Button>
          <Button variant="pill">BUSINESS</Button>
        </div>

        {/* Row 5: States */}
        <div className="flex gap-4 items-center">
          <Button isLoading>Loading...</Button>
          <Button disabled>Disabled</Button>
        </div>

        <div className="flex flex-col min-h-screen bg-black p-8 font-sans text-white">
          <div className="flex flex-col gap-16 max-w-6xl mx-auto w-full py-12">
        
            {/* Section 1: Stats & Mission */}
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

            {/* Section 2: Team */}
            <section className="flex flex-col gap-8">
              <h2 className="text-2xl font-bold border-l-4 border-primary pl-4">Our Leadership</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <ProfileCard 
                  name="Alexander Vance" 
                  role="Founder & CEO" 
                  image="/team/vance.jpg"
                  socials={
                    <>
                      <AtSign size={16} className="cursor-pointer hover:text-white" />
                      <Link2 size={16} className="cursor-pointer hover:text-white" />
                    </>
                  }
                />
              </div>
            </section>

            {/* Section 3: Event Overlay Cards */}
            <section className="flex flex-col gap-8">
              <h2 className="text-2xl font-bold border-l-4 border-primary pl-4">Featured Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <EventCard 
                  title="Neon Pulse Festival" 
                  image="/events/neon.jpg"
                  variant="overlay"
                />
                <EventCard 
                  title="Elite Gala" 
                  image="/events/gala.jpg"
                  variant="overlay"
                  className="aspect-square"
                />
                <EventCard 
                  title="Vantage Launch" 
                  image="/events/vantage.jpg"
                  variant="overlay"
                  className="aspect-square"
                />
              </div>
            </section>

            {/* Section 4: Detailed Event Cards */}
            <section className="flex flex-col gap-8">
              <h2 className="text-2xl font-bold border-l-4 border-primary pl-4">Upcoming Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <EventCard 
                  title="Global Tech Summit 2024"
                  category="TECH"
                  date="Oct 12"
                  description="The premier gathering for innovation leaders and disruptive startups exploring the boundaries of AI."
                  image="/events/tech.jpg"
                  variant="full"
                />
                <EventCard 
                  title="Global Cyber Summit 2024"
                  location="Berlin Digital Hub"
                  date="OCT 12"
                  price="$299.00"
                  image="/events/cyber.jpg"
                  variant="compact"
                />
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
