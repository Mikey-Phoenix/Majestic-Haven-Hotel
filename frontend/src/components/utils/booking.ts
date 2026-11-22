import type { BookingStatus } from "../types/booking";

export const statusStyles: Record<BookingStatus, string> = {
  Completed: "bg-[#e2e9cd] text-[#3f5a42]",
  Upcoming: "bg-blue-100 text-blue-700",
  Cancelled: "bg-red-100 text-red-600",
};

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

export const nightsBetween = (from: string, to: string) =>
  Math.round((new Date(to).getTime() - new Date(from).getTime()) / 86_400_000);