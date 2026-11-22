export type BookingStatus = "Completed" | "Upcoming" | "Cancelled";

export interface Booking {
  id: string;
  roomName: string;
  checkIn: string; // ISO date, e.g. "2026-10-12"
  checkOut: string;
  total: string;
  status: BookingStatus;

  // Optional extras shown in the details pop-up when the backend provides them
  guests?: number;
  paymentStatus?: "Paid" | "Pending" | "Refunded";
  specialRequests?: string;
}