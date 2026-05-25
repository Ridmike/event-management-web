"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import { Card } from "@/components/common/Card";
import { toast } from "react-hot-toast";
import { ShieldCheck, Zap, Cpu, Info } from "lucide-react";

const contactSchema = z.object({
  fullname: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  eventType: z.string().min(1, "Please select an event type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      eventType: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      // Logic for backend submission
      console.log("Submitting to backend:", data);
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate API call
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col gap-16 max-w-7xl mx-auto w-full py-12 px-6">
      {/* Header section */}
      <div className="flex flex-col gap-4 max-w-3xl">
        <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px]">
          Secure Your Date
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          Experience Event Precision
        </h1>
        <p className="text-white/50 text-lg leading-relaxed">
          Transform your high-production concepts into reality with our elite management interface. Fill out the details below to initiate your session.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Why Lumina & Tips */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <Card className="p-8 bg-[#111111] border-white/5 flex flex-col gap-8">
            <h3 className="text-2xl font-bold">Why Lumina?</h3>
            
            <div className="flex flex-col gap-6">
              {[
                {
                  icon: <Zap className="text-primary" size={20} />,
                  title: "Instant Scalability",
                  desc: "Our infrastructure handles everything from intimate galas to stadium-sized productions."
                },
                {
                  icon: <ShieldCheck className="text-primary" size={20} />,
                  title: "Encrypted Data Flow",
                  desc: "Secure your event logistics with military-grade encryption and access controls."
                },
                {
                  icon: <Cpu className="text-primary" size={20} />,
                  title: "Command Center AI",
                  desc: "Predictive logistics and automated vendor coordination at your fingertips."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">{item.icon}</div>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-bold text-white/90">{item.title}</h4>
                    <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Tip Card */}
          <Card className="p-6 bg-primary/5 border-primary/10 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                <Info size={40} className="text-primary" />
             </div>
             <span className="text-[10px] font-bold text-primary tracking-widest uppercase mb-2 block">Quick Tip</span>
             <p className="text-sm text-white/70 leading-relaxed">
               Book at least <span className="text-white font-bold">6 months in advance</span> for major international summits to ensure dedicated hardware allocation.
             </p>
          </Card>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-8">
          <Card className="p-8 md:p-12 bg-[#111111] border-white/5">
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Full Name</label>
                <Input 
                  {...register("fullname")}
                  placeholder="John Doe" 
                  className={errors.fullname ? "border-red-500/50" : ""}
                />
                {errors.fullname && <span className="text-[10px] text-red-500">{errors.fullname.message}</span>}
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Email Address</label>
                <Input 
                  {...register("email")}
                  placeholder="john@company.com" 
                  className={errors.email ? "border-red-500/50" : ""}
                />
                {errors.email && <span className="text-[10px] text-red-500">{errors.email.message}</span>}
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Phone Number</label>
                <Input 
                  {...register("phone")}
                  placeholder="+1 (555) 000-0000" 
                  className={errors.phone ? "border-red-500/50" : ""}
                />
                {errors.phone && <span className="text-[10px] text-red-500">{errors.phone.message}</span>}
              </div>

              {/* Event Type */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Event Type</label>
                <select 
                  {...register("eventType")}
                  className={cn(
                    "flex h-12 w-full rounded-xl border border-white/10 bg-[#111111] px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none",
                    errors.eventType && "border-red-500/50"
                  )}
                >
                  <option value="" disabled>Select an event type</option>
                  <option value="Tech Summit">Tech Summit</option>
                  <option value="Music Festival">Music Festival</option>
                  <option value="Business Expo">Business Expo</option>
                  <option value="Art Exhibition">Art Exhibition</option>
                </select>
                {errors.eventType && <span className="text-[10px] text-red-500">{errors.eventType.message}</span>}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Requirements / Message</label>
                <textarea 
                  {...register("message")}
                  rows={6}
                  placeholder="Describe your vision, attendee count, and specific technical needs..."
                  className={cn(
                    "flex w-full rounded-xl border border-white/10 bg-[#111111] px-4 py-3 text-sm text-white placeholder:text-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-all",
                    errors.message && "border-red-500/50"
                  )}
                />
                {errors.message && <span className="text-[10px] text-red-500">{errors.message.message}</span>}
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 mt-4">
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full md:w-auto min-w-50"
                  isLoading={isSubmitting}
                >
                  Confirm Booking
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
