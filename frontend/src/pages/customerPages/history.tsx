import { useMemo, useState } from "react";
import HistoryCard from "../../components/historyCard";
// import type { Booking, BookingStatus } from "../../types/booking";

type BookingStatus = "Completed" | "Upcoming" | "Cancelled";
type Filter = "All" | BookingStatus;

const filters: Filter[] = ["All", "Upcoming", "Completed", "Cancelled"];

interface Props {
  bookings: readonly Booking[];
}

interface Booking {
  id: string;
  roomName: string;
  checkIn: string; // ISO date, e.g. "2026-10-12"
  checkOut: string;
  total: string;
  status: "Completed" | "Upcoming" | "Cancelled";
}

function History({ bookings }: Props) {
  const [filter, setFilter] = useState<Filter>("All");

  // Newest stays first, narrowed by the selected status
  const visible = useMemo(
    () =>
      bookings
        .filter((b) => filter === "All" || b.status === filter)
        .sort((a, b) => b.checkIn.localeCompare(a.checkIn)),
    [bookings, filter],
  );

  return (
    <section className="mx-auto w-full max-w-3xl p-5">
      <div className="mt-5 flex flex-wrap items-end justify-between gap-2">
        <h1 className="text-3xl font-bold text-[#3f5a42] md:text-4xl">Booking History</h1>
        {bookings.length > 0 && (
          <p className="text-sm text-gray-500">
            {visible.length} of {bookings.length} {bookings.length === 1 ? "stay" : "stays"}
          </p>
        )}
      </div>

      {bookings.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter bookings by status">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`cursor-pointer rounded-full px-4 py-1.5 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6f9170] ${
                filter === f ? "bg-[#6f9170] text-white" : "bg-[#ebf0da] text-[#3f5a42] hover:bg-[#e2e9cd]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      )}

      <div className="mt-2">
        {bookings.length === 0 ? (
          <p className="mt-5 text-gray-600">No bookings yet. Your stays will show up here.</p>
        ) : visible.length === 0 ? (
          <p className="mt-5 text-gray-600">No {filter.toLowerCase()} bookings.</p>
        ) : (
          visible.map((booking) => <HistoryCard key={booking.id} booking={booking} />)
        )}
      </div>
    </section>
  );
}

export default History;