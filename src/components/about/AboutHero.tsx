import React from 'react'
import Image from 'next/image'
import { StatCard } from '../common/CardVariants'

export const AboutHero = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 inline-block">
            Our Story
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Revolutionizing the <br />
            <span className="text-white/40">Event Experience.</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl">
            Founded in 2020, Lumina Event OS was born from a simple observation: high-end events were still being managed with low-end tools. We built a command-center platform designed for those who demand digital precision and immersive atmosphere.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <StatCard value="500+" label="Global Events" />
            <StatCard value="1.2M" label="Tickets Sold" />
          </div>
        </div>
        
        <div className="relative aspect-square md:aspect-auto md:h-150 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <Image 
            src="/images/about-hero.webp" 
            alt="Event Command Center" 
            fill 
            className="object-cover"
            priority
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-linear-to-tr from-black/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
