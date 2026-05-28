"use client";

import * as React from "react";
import { EVENTS, Event } from "@/constants/events";
import { EventCard } from "@/components/common/CardVariants";
import { Button } from "@/components/common/Button";
import { Search, ChevronRight } from "lucide-react";
import { cn } from "@/utils/cn";
import { Modal } from "@/components/common/Modal";
import { BookingForm } from "@/components/booking/BookingForm";

export default function EventsPage() {
  const [filter, setFilter] = React.useState("ALL");
  const [search, setSearch] = React.useState("");
  const [selectedEvent, setSelectedEvent] = React.useState<Event | null>(null);

  const categories = ["ALL", "TECH", "MUSIC", "BUSINESS", "ART"];

  const filteredEvents = EVENTS.filter(event => {
    const matchesFilter = filter === "ALL" || event.category === filter;
    const matchesSearch = event.title.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-black">
        <div className="flex flex-col gap-12 max-w-7xl mx-auto w-full py-12 px-6 ">
            <div className="flex flex-col gap-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Explore Upcoming Events
                </h1>

                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                {/* Search Bar */}
                <div className="relative w-full md:max-w-md group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-primary transition-colors" size={20} />
                    <input 
                    type="text" 
                    placeholder="Search events, venues, or hosts..."
                    className="w-full bg-[#111111] border border-white/10 rounded-xl h-12 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-primary/50 transition-all"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                    <Button
                        key={cat}
                        variant="pill"
                        size="pill"
                        className={cn(
                        "border-white/5 bg-[#111111] h-9",
                        filter === cat && "border-primary text-primary"
                        )}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </Button>
                    ))}
                </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event) => (
                <EventCard 
                    key={event.id}
                    title={event.title}
                    date={event.date}
                    location={event.location}
                    price={event.price}
                    image={event.image}
                    variant="compact"
                    onRegister={() => setSelectedEvent(event)}
                />
                ))}
            </div>

            <Modal 
              isOpen={!!selectedEvent} 
              onClose={() => setSelectedEvent(null)}
              title="Book Your Event"
            >
              {selectedEvent && (
                <BookingForm 
                  event={selectedEvent} 
                  onSuccess={() => setSelectedEvent(null)} 
                />
              )}
            </Modal>

            {filteredEvents.length === 0 && (
                <div className="py-24 text-center">
                    <p className="text-white/40 text-lg">No events found matching your search.</p>
                    <Button variant="ghost" className="mt-4" onClick={() => {setSearch(""); setFilter("ALL")}}>Clear all filters</Button>
                </div>
            )}
        </div>
    </div>
  );
}
