import React from 'react'
import { ProfileCard } from '../common/CardVariants'
import { Mail, BoxIcon } from 'lucide-react'

const team = [
  {
    name: "Alexander Vance",
    role: "Founder & CEO",
    image: "/images/team-1.webp"
  },
  {
    name: "Elena Rossi",
    role: "CTO",
    image: "/images/team-2.webp"
  },
  {
    name: "Marcus Thorne",
    role: "Lead Designer",
    image: "/images/team-3.webp"
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Operations",
    image: "/images/team-4.webp"
  }
]

export const TeamSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto mb-16">
        <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 inline-block">
          The Architects
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white">The Team Behind the Curtain</h2>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, idx) => (
          <ProfileCard 
            key={idx}
            name={member.name}
            role={member.role}
            image={member.image}
            socials={
              <>
                <Mail size={16} className="cursor-pointer hover:text-white transition-colors" />
                <BoxIcon size={16} className="cursor-pointer hover:text-white transition-colors" />
              </>
            }
          />
        ))}
      </div>
    </section>
  )
}
