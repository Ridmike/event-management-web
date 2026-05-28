"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import { toast } from "react-hot-toast";
import { cn } from "@/utils/cn";
import api from "@/lib/axios";

const bookingSchema = z.object({
  eventName: z.string(),
  customerName: z.string().min(2, "Name is required"),
  customerEmail: z.string().email("Invalid email address"),
  customerPhone: z.string().min(10, "Valid phone number is required"),
  ticketCount: z.number().min(1, "At least 1 ticket is required").max(10, "Maximum 10 tickets per booking"),
  totalPrice: z.number(),
  eventDate: z.string(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  event: {
    title: string;
    price: string;
    date: string;
  };
  onSuccess: () => void;
}

export const BookingForm = ({ event, onSuccess }: BookingFormProps) => {
  const priceValue = event.price === "Free" ? 0 : parseFloat(event.price.replace(/[^0-9.]/g, ""));
  
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      eventName: event.title,
      eventDate: event.date,
      ticketCount: 1,
      totalPrice: priceValue,
    },
  });

  const ticketCount = watch("ticketCount");

  React.useEffect(() => {
    setValue("totalPrice", ticketCount * priceValue);
  }, [ticketCount, priceValue, setValue]);

  const onSubmit = async (data: BookingFormValues) => {
    try {
      // In a real app, this would be api.post("/bookings", data)
      console.log("Booking data:", data);
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      toast.success("Booking successful!");
      onSuccess();
    } catch (error: any) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Full Name</label>
          <Input 
            {...register("customerName")}
            placeholder="John Doe" 
            error={errors.customerName?.message as string}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Email Address</label>
          <Input 
            {...register("customerEmail")}
            placeholder="john@example.com" 
            error={errors.customerEmail?.message as string}
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Phone Number</label>
          <Input 
            {...register("customerPhone")}
            placeholder="+1 (555) 000-0000" 
            error={errors.customerPhone?.message as string}
          />
        </div>

        {/* Ticket Count */}
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Tickets</label>
          <Input 
            type="number"
            {...register("ticketCount", { valueAsNumber: true })}
            min={1}
            max={10}
            error={errors.ticketCount?.message as string}
          />
        </div>
      </div>

      <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-white/60">Event</span>
          <span className="text-sm font-bold text-white">{event.title}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-white/60">Date</span>
          <span className="text-sm text-white">{event.date}</span>
        </div>
        <div className="flex justify-between items-center pt-2 border-t border-white/5">
          <span className="text-sm font-bold text-white">Total Price</span>
          <span className="text-xl font-bold text-primary">
            {watch("totalPrice") === 0 ? "Free" : `$${watch("totalPrice").toFixed(2)}`}
          </span>
        </div>
      </div>

      <Button 
        type="submit" 
        variant="primary" 
        size="lg" 
        className="w-full"
        isLoading={isSubmitting}
      >
        Confirm Booking
      </Button>
    </form>
  );
};
