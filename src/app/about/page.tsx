import React from 'react'
import { AboutHero } from '@/components/about/AboutHero'
import { CorePrinciples } from '@/components/about/CorePrinciples'
import { TeamSection } from '@/components/about/TeamSection'

export const metadata = {
  title: 'About Us | Lumina Event OS',
  description: 'Learn about the team and mission behind Lumina Event OS.',
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <AboutHero />
      <CorePrinciples />
      <TeamSection />
    </div>
  )
}
