import React from 'react'
import { Card } from '../common/Card'
import { MapPin, Mail, Phone } from 'lucide-react'

const contactDetails = [
  {
    title: "Headquarters",
    details: ["42nd Nexus Plaza, Silicon District", "San Francisco, CA 94103"],
    icon: <MapPin className="w-5 h-5 text-primary" />,
    iconBg: "bg-primary/10 border-primary/20"
  },
  {
    title: "Email Us",
    details: ["operations@lumina-os.tech", "support@lumina-os.tech"],
    icon: <Mail className="w-5 h-5 text-secondary" />,
    iconBg: "bg-secondary/10 border-secondary/20"
  },
  {
    title: "Voice Comm",
    details: ["+1 (888) LUMINA-OS", "Mon-Fri, 9am - 6pm PST"],
    icon: <Phone className="w-5 h-5 text-white/60" />,
    iconBg: "bg-white/5 border-white/10"
  }
]

export const ContactInfo = () => {
  return (
    <Card className="p-8 h-full flex flex-col justify-center gap-10">
      {contactDetails.map((item, idx) => (
        <div key={idx} className="flex gap-5">
          <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${item.iconBg}`}>
            {item.icon}
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-1.5">{item.title}</h3>
            {item.details.map((line, i) => (
              <p key={i} className="text-white/60 text-sm leading-relaxed">{line}</p>
            ))}
          </div>
        </div>
      ))}
    </Card>
  )
}
