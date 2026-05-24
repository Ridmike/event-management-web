import { Button } from "@/components/common/Button";
import { Globe, AtSign, Share2, Play } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-black p-8 font-sans">
      <main className="flex flex-col gap-12 items-center max-w-4xl w-full">
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
      </main>
    </div>
  );
}
