import { useState } from "react";
import { Badge } from "./ui/badge";
import BookingDetailsDialog from "./historyDetails";
// import type { Booking } from "./types/booking";
import type { Booking } from "../data/mockData";
import { formatDate, nightsBetween, statusStyles } from "./utils/booking";

function HistoryCard({ booking }: { booking: Booking }) {
  const [open, setOpen] = useState(false);
  const nights = nightsBetween(booking.checkIn, booking.checkOut);

  return (
    <>
      {/* Clicking anywhere on the card opens the pop-up; the View button is the keyboard-friendly trigger */}
      <article
        onClick={() => setOpen(true)}
        className="mt-5 flex h-20 w-full cursor-pointer items-center gap-3 rounded-lg border bg-white p-2 transition-shadow hover:shadow-md"
      >
        <div className="h-full w-16 shrink-0 rounded-md bg-[#7a9a77]/40" />

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="truncate font-semibold text-[#3f5a42]">{booking.roomName}</h3>
            <Badge variant="secondary" className={`shrink-0 ${statusStyles[booking.status]}`}>
              {booking.status}
            </Badge>
          </div>
          <p className="truncate text-sm text-gray-600">
            {formatDate(booking.checkIn)} - {formatDate(booking.checkOut)} · {nights} night{nights === 1 ? "" : "s"}
          </p>
          <p className="text-xs text-gray-400">
            {booking.id} · {booking.total}
          </p>
        </div>

        <button
          type="button"
          aria-haspopup="dialog"
          aria-label={`View booking ${booking.id}`}
          className="shrink-0 cursor-pointer rounded-full bg-[#6f9170] px-4 py-1.5 text-sm text-white transition-colors hover:bg-[#5b7d5d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6f9170] md:text-base"
        >
          View
        </button>
      </article>

      {/* Rendered outside the <article> so clicks inside the pop-up don't re-trigger the card */}
      <BookingDetailsDialog booking={booking} open={open} onOpenChange={setOpen} />
    </>
  );
}

export default HistoryCard;