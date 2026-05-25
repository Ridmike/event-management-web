import React from 'react'
import { Card } from '../common/Card'
import { Input } from '../common/Input'
import { Textarea } from '../common/Textarea'
import { Button } from '../common/Button'
import { SendHorizontal } from 'lucide-react'

export const ContactForm = () => {
  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold text-white mb-8">Send a Message</h2>
      
      <form className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-primary/80 ml-1">Full Name</label>
            <Input placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-primary/80 ml-1">Work Email</label>
            <Input type="email" placeholder="john@company.com" />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-primary/80 ml-1">Inquiry Type</label>
          <div className="relative">
            <select className="flex h-12 w-full rounded-xl border border-white/10 bg-[#111111] px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none transition-all cursor-pointer">
              <option>Enterprise Platform Demo</option>
              <option>Partnership Opportunity</option>
              <option>Technical Support</option>
              <option>Other</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-primary/80 ml-1">Message</label>
          <Textarea placeholder="Tell us about your next big production..." />
        </div>
        
        <Button className="w-full h-14 text-sm font-bold tracking-wide group" rightIcon={<SendHorizontal size={18} className="group-hover:translate-x-1 transition-transform" />}>
          Deploy Inquiry
        </Button>
      </form>
    </Card>
  )
}
