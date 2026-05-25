export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
  price: string;
  category: "TECH" | "MUSIC" | "ART" | "BUSINESS";
  isFeatured?: boolean;
}

export const EVENTS: Event[] = [
  {
    id: "1",
    title: "Global Tech Summit 2024",
    description: "The premier gathering for innovation leaders and disruptive startups exploring the boundaries of AI.",
    image: "/events/tech.jpg",
    date: "Oct 12",
    location: "San Francisco, CA",
    price: "Free",
    category: "TECH",
    isFeatured: true,
  },
  {
    id: "2",
    title: "Neo-Classical Art Expo",
    description: "A curated showcase where traditional masterpieces meet digital evolution in an immersive gallery experience.",
    image: "/events/art.jpg",
    date: "Nov 05",
    location: "Metropolitan Gallery",
    price: "Free",
    category: "ART",
    isFeatured: true,
  },
  {
    id: "3",
    title: "Lumina Music Fest",
    description: "An outdoor auditory journey featuring the world's top electronic artists under a synchronized laser show.",
    image: "/events/music.jpg",
    date: "Dec 22",
    location: "Stadium Arena",
    price: "Free",
    category: "MUSIC",
    isFeatured: true,
  },
  {
    id: "4",
    title: "Global Cyber Summit 2024",
    description: "Deep dive into the latest cybersecurity trends and defensive strategies with global experts.",
    image: "/events/cyber.jpg",
    date: "OCT 12",
    location: "Berlin Digital Hub",
    price: "$299.00",
    category: "TECH",
  },
  {
    id: "5",
    title: "Neo-Jazz Experimental Night",
    description: "Experience the fusion of classic jazz with experimental electronic soundscapes.",
    image: "/events/jazz.jpg",
    date: "OCT 15",
    location: "The Glass Lounge, NYC",
    price: "$75.00",
    category: "MUSIC",
  },
  {
    id: "6",
    title: "European FinTech Expo",
    description: "Discover the future of finance and banking technology in the heart of London.",
    image: "/events/fintech.jpg",
    date: "OCT 22",
    location: "London Financial Center",
    price: "$450.00",
    category: "BUSINESS",
  },
  {
    id: "7",
    title: "Startup Founders Brunch",
    description: "Networking event for tech founders and venture capitalists.",
    image: "/events/brunch.jpg",
    date: "NOV 01",
    location: "The Hub",
    price: "$120.00",
    category: "BUSINESS",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Director of Operations, TechNexus Global",
    quote: "Lumina Event OS completely transformed how we manage our global summits. The real-time data insights and seamless registration flow reduced our overhead by 40% in just one season. Truly the command center we needed.",
    avatar: "/avatars/sarah.jpg",
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Head of Festivals, Alpha Group",
    quote: "The scalability of Lumina is unmatched. We handled over 50k attendees without a single glitch in the access control system. It's the standard for large-scale production.",
    avatar: "/avatars/marcus.jpg",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Creative Director, Muse Events",
    quote: "User experience is our top priority, and Lumina delivers exactly that. The interface is intuitive for both our team and the attendees. Best investment this year.",
    avatar: "/avatars/elena.jpg",
  },
];
