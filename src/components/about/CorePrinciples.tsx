import React from 'react'
import { FeatureCard } from '../common/CardVariants'
import { Rocket, Eye, Diamond } from 'lucide-react'

const principles = [
  {
    title: "Our Mission",
    description: "To empower event organizers with high-performance tools that bridge the gap between physical experience and digital control.",
    icon: <Rocket className="w-6 h-6" />
  },
  {
    title: "Our Vision",
    description: "A world where event management is as immersive as the events themselves, powered by seamless, beautiful technology.",
    icon: <Eye className="w-6 h-6" />
  },
  {
    title: "Our Values",
    description: "Precision engineering, aesthetic dominance, and user-centric workflows define every line of code we write.",
    icon: <Diamond className="w-6 h-6" />
  }
]

export const CorePrinciples = () => {
  return (
    <section className="py-20 px-6 ">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Core Principles</h2>
        <p className="text-white/40 text-lg">We operate at the intersection of technical excellence and creative vision.</p>
      </div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {principles.map((p, idx) => (
          <FeatureCard 
            key={idx}
            title={p.title}
            description={p.description}
            icon={p.icon}
          />
        ))}
      </div>
    </section>
  )
}
