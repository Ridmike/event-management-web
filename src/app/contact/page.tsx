import React from 'react'
import { ContactHero } from '@/components/contact/ContactHero'
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactInfo } from '@/components/contact/ContactInfo'
import { FAQSection } from '@/components/contact/FAQSection'

export const metadata = {
  title: 'Contact | Lumina Event OS',
  description: 'Connect with the Lumina team for enterprise demos, support, and partnerships.',
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <ContactHero />
      
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_400px] gap-8">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
      
      <FAQSection />
    </div>
  )
}
