import React from 'react'
import { Input } from '../common/Input'
import { Button } from '../common/Button'
import { Network } from 'lucide-react'

export const NewsletterSection = () => {
  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <Network size={32} />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Join the Lumina Insider
        </h2>
        
        <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Get the latest on event tech, platform updates, and exclusive invitation to our regional summits.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-8">
          <Input 
            type="email" 
            placeholder="Enter your work email" 
            className="flex-1 h-14 bg-white/5 border-white/10"
          />
          <Button size="lg" className="px-8 shadow-xl">
            Join Community
          </Button>
        </form>
        
        <p className="text-white/40 text-xs font-medium uppercase tracking-[0.2em]">
          Join 50,000+ event professionals worldwide.
        </p>
      </div>
    </section>
  )
}
