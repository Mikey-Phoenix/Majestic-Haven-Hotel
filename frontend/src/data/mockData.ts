// frontend/src/data/mockData.ts
export type Role = "guest" | "admin";
export type RoomStatus = "available" | "occupied" | "maintenance" | "reserved";
export type RoomClass = "standard" | "deluxe" | "suite" | "presidential";

export interface Booking {
  id: string;
  roomName: string;
  checkIn: string;   // ISO date
  checkOut: string;
  total: string;
  status: "Upcoming" | "Active" | "Completed" | "Cancelled";
}

export interface User {
  username: string;
  email: string;
  role: Role;
  phone: string;
  location: string;
  dateJoined: string;
  currentroomName: string | null; // null when not checked in
  bookingHistory: Booking[];
}

export interface Review {
  reviewId: string;
  username: string;
  rating: number; // 1-5
  comment: string;
  date: string;
}

export interface Room {
  id: string;
  name: string;
  description: string;
  media: { type: "image" | "video"; url: string }[];
  price: number; // per night
  currency: string;
  class: RoomClass;
  lodgingDates: { from: string; to: string }[]; // booked date ranges
  status: RoomStatus;
  ratings: { average: number; count: number };
  reviews: Review[];
  amenities: string[];
}

export const mockUser: User = {
  username: "amara_okafor",
  email: "amara.okafor@example.com",
  role: "guest",
  phone: "+234 801 234 5678",
  location: "Lagos, Nigeria",
  dateJoined: "2024-03-12",
  currentroomName: "room_412",
  bookingHistory: [
    { id: "bkg_1001", roomName: "room_412", checkIn: "2026-11-22", checkOut: "2026-11-27", status: "Active", total: "₦65000" },
    { id: "bkg_0987", roomName: "room_210", checkIn: "2026-06-05", checkOut: "2026-06-08", status: "Completed", total: "₦72000" },
    { id: "bkg_0850", roomName: "room_105", checkIn: "2025-12-18", checkOut: "2025-12-21", status: "Completed", total: "₦46000" },
  ],
};

export const mockRoom: Room = {
  id: "room_412",
  name: "Haven Deluxe Suite",
  description:
    "A spacious suite with a king bed, private balcony, and panoramic city views. Ideal for couples or extended stays.",
  media: [
    { type: "image", url: "/images/rooms/412-bedroom.jpg" },
    { type: "image", url: "/images/rooms/412-balcony.jpg" },
    { type: "video", url: "/videos/rooms/412-tour.mp4" },
  ],
  price: 290,
  currency: "USD",
  class: "suite",
  lodgingDates: [
    { from: "2026-11-22", to: "2026-11-27" },
    { from: "2026-12-20", to: "2026-12-27" },
  ],
  status: "occupied",
  ratings: { average: 4.5, count: 38 },
  reviews: [
    {
      reviewId: "rev_001",
      username: "amara_okafor",
      rating: 5,
      comment: "Stunning view and very quiet. Staff were attentive.",
      date: "2026-06-09",
    },
    {
      reviewId: "rev_002",
      username: "daniel_eze",
      rating: 4,
      comment: "Great room, breakfast could start earlier.",
      date: "2026-08-14",
    },
  ],
  amenities: ["Free Wi-Fi", "Air conditioning", "Smart TV", "Mini bar", "Private balcony", "Room service", "Safe"],
};