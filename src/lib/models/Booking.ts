import mongoose, { Schema, Document } from "mongoose";

export interface IBooking extends Document {
  eventName: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  bookingDate: Date;
  eventDate: Date;
  ticketCount: number;
  totalPrice: number;
  status: "pending" | "confirmed" | "cancelled";
  createdAt: Date;
  updatedAt: Date;
}

const BookingSchema: Schema = new Schema(
  {
    eventName: { type: String, required: true },
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true },
    customerPhone: { type: String, required: true },
    bookingDate: { type: Date, default: Date.now },
    eventDate: { type: Date, required: true },
    ticketCount: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

// Check if the model already exists before defining it
export default mongoose.models.Booking || mongoose.model<IBooking>("Booking", BookingSchema);
