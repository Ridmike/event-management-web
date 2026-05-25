"use client";

import React, { useState } from 'react'
import { Card } from '../common/Card'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: "How does the real-time telemetry work?",
    answer: "Lumina Event OS utilizes a proprietary WebSocket mesh network to synchronize data across all devices in under 50ms. Whether you're tracking ticket sales or stage power consumption, the data is live and consistent across your entire command center."
  },
  {
    question: "What are the Enterprise pricing tiers?",
    answer: "Our enterprise plans are customized based on event volume, user count, and required integrations. We offer scalable solutions ranging from single-city activations to global multi-venue tours. Contact our sales team for a tailored quote."
  },
  {
    question: "Can I integrate Lumina with existing CRM tools?",
    answer: "Yes, Lumina provides robust API endpoints and native connectors for major CRM platforms like Salesforce, HubSpot, and Microsoft Dynamics. You can sync attendee data and lead captures in real-time."
  }
]

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">Frequently Asked Questions</h2>
        <div className="w-20 h-1 bg-primary/40 mx-auto mb-16 rounded-full" />
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Card key={idx} className="overflow-hidden border-white/5 bg-[#0A0A0A]">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/2 transition-colors"
              >
                <span className="text-lg font-bold text-white/90">{faq.question}</span>
                {openIndex === idx ? (
                  <ChevronUp className="text-primary w-5 h-5 shrink-0" />
                ) : (
                  <ChevronDown className="text-white/20 w-5 h-5 shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-white/60 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
