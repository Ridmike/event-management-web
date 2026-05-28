"use client";

import * as React from "react";
import { useParams, useRouter } from "next/navigation";
import { EVENTS } from "@/constants/events";
import { Button } from "@/components/common/Button";
import { Modal } from "@/components/common/Modal";
import { BookingForm } from "@/components/booking/BookingForm";
import { Calendar, MapPin, Clock, ShieldCheck, ArrowLeft, Ticket } from "lucide-react";
import Image from "next/image";
import { cn } from "@/utils/cn";

export default function EventDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);

  const event = EVENTS.find((e) => e.id === params.id);

  if (!event) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-white gap-4">
        <h1 className="text-4xl font-bold">Event Not Found</h1>
        <Button onClick={() => router.push("/events")}>Back to Events</Button>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <div className="relative h-[50vh]  md:h-[60vh] w-full overflow-hidden">
        <Image 
          src={event.image} 
          alt={event.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/60 to-black z-10" />
        
        <div className="absolute inset-0 z-20 flex flex-col justify-end max-w-7xl mx-auto px-6 pb-12 gap-6">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors w-fit mb-4"
          >
            <ArrowLeft size={20} />
            <span>Back to events</span>
          </button>
          
          <div className="flex flex-col gap-4">
            <span className="bg-primary/20 text-primary border border-primary/20 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
              {event.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{event.title}</h1>
            <div className="flex flex-wrap gap-6 text-white/60 mt-2">
              <div className="flex items-center gap-2">
                <Calendar className="text-primary" size={20} />
                <span>{event.date}, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-primary" size={20} />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">About this event</h2>
            <p className="text-white/60 text-lg leading-relaxed">
              {event.description}
            </p>
            <p className="text-white/60 text-lg leading-relaxed mt-4">
              Join us for an unforgettable experience at {event.title}. This event brings together industry leaders, visionaries, and enthusiasts for a day of inspiration, networking, and growth. Whether you're looking to expand your knowledge, connect with peers, or simply enjoy a world-class production, this is the place to be.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4">
              <Clock className="text-primary" size={24} />
              <h3 className="font-bold text-lg">Schedule</h3>
              <p className="text-white/40 text-sm">Doors open at 09:00 AM. Keynote sessions begin promptly at 10:00 AM.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4">
              <ShieldCheck className="text-primary" size={24} />
              <h3 className="font-bold text-lg">Entry Requirements</h3>
              <p className="text-white/40 text-sm">Digital ticket required for entry. Please bring a valid ID for check-in.</p>
            </div>
          </div>
        </div>

        {/* Sidebar / CTA */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 p-8 rounded-2xl bg-[#111111] border border-white/10 flex flex-col gap-8">
            <div className="flex justify-between items-center">
              <span className="text-white/60">Ticket Price</span>
              <span className="text-3xl font-bold text-primary">{event.price}</span>
            </div>
            
            <div className="flex flex-col gap-4">
              <Button 
                variant="primary" 
                size="lg" 
                className="w-full"
                leftIcon={<Ticket size={20} />}
                onClick={() => setIsBookingOpen(true)}
              >
                Buy Ticket Now
              </Button>
              <p className="text-center text-[10px] text-white/40 uppercase tracking-widest">
                Secure checkout guaranteed
              </p>
            </div>

            <div className="pt-6 border-t border-white/5 flex flex-col gap-4">
              <h4 className="font-bold text-sm">Event Details</h4>
              <ul className="flex flex-col gap-3">
                <li className="flex justify-between text-sm">
                  <span className="text-white/40">Date:</span>
                  <span>{event.date}</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-white/40">Location:</span>
                  <span>{event.location}</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-white/40">Category:</span>
                  <span className="text-primary">{event.category}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <Modal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)}
        title="Purchase Tickets"
      >
        <BookingForm 
          event={event} 
          onSuccess={() => setIsBookingOpen(false)} 
        />
      </Modal>
    </div>
  );
}
