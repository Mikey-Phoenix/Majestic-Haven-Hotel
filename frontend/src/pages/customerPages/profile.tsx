import { Mail, Phone, MapPin, CalendarDays } from "lucide-react";
import { Badge } from "../../components/ui/badge";
// import type { Booking, BookingStatus } from "../../types/booking";

/* ---------- Types ---------- */
type BookingStatus = "Completed" | "Upcoming" | "Cancelled";
interface Booking {
  id: string;
  roomName: string;
  checkIn: string; // ISO date, e.g. "2026-10-12"
  checkOut: string;
  total: string;
  status: "Completed" | "Upcoming" | "Cancelled";
}
interface Customer {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  memberSince: string; // ISO date
  avatarUrl?: string;
}

interface Room {
  name: string;
  imageUrl?: string;
}

interface ServiceRequest {
  id: string;
  title: string; // e.g. "Extra towels"
  date: string; // ISO date
  status: "Pending" | "Done";
}

interface Props {
  customer: Customer;
  room: Room;
  requests: readonly ServiceRequest[];
  bookings: readonly Booking[];
}

/* ---------- Helpers ---------- */

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

const statusStyles: Record<BookingStatus | ServiceRequest["status"], string> = {
  Completed: "bg-[#e2e9cd] text-[#3f5a42]",
  Upcoming: "bg-blue-100 text-blue-700",
  Cancelled: "bg-red-100 text-red-600",
  Pending: "bg-amber-100 text-amber-700",
  Done: "bg-[#e2e9cd] text-[#3f5a42]",
};

/* ---------- Page section ---------- */

function profile({ customer, room, requests, bookings }: Props) {
  const info = [
    { icon: Mail, label: "Email", value: customer.email },
    { icon: Phone, label: "Phone", value: customer.phone },
    { icon: MapPin, label: "Location", value: customer.location },
    { icon: CalendarDays, label: "Member since", value: formatDate(customer.memberSince) },
  ];

  return (
    <section className="grid gap-5 p-5 lg:grid-cols-[1fr_20rem] xl:grid-cols-[1fr_24rem] overflow-y-auto">
      {/* Customer information (large block) */}
      <article className="rounded-2xl border bg-white p-6 md:p-8">
        <div className="flex flex-col items-center text-center">
          {customer.avatarUrl ? (
            <img
              src={customer.avatarUrl}
              alt={`${customer.fullName} profile`}
              className="h-32 w-32 rounded-full object-cover ring-4 ring-[#e2e9cd]"
            />
          ) : (
            <div
              aria-hidden="true"
              className="grid h-32 w-32 place-items-center rounded-full bg-[#7a9a77]/40 text-4xl font-bold text-[#3f5a42] ring-4 ring-[#e2e9cd]"
            >
              {initials(customer.fullName)}
            </div>
          )}
          <h1 className="mt-4 text-3xl font-bold text-[#3f5a42] md:text-4xl">{customer.fullName}</h1>
          <p className="mt-1 text-sm text-gray-500">Guest at Majestic Haven</p>
        </div>

        <dl className="mt-8 grid gap-4 sm:grid-cols-2">
          {info.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-3 rounded-xl bg-[#ebf0da]/60 p-4">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#6f9170] text-white">
                <Icon size={18} />
              </span>
              <div className="min-w-0">
                <dt className="text-xs uppercase tracking-wide text-[#6f9170]">{label}</dt>
                <dd className="truncate text-[#2f4432]">{value}</dd>
              </div>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex justify-center">
          <button
            type="button"
            className="cursor-pointer rounded-full bg-[#6f9170] px-8 py-3 text-sm text-white transition-colors hover:bg-[#5b7d5d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6f9170] md:text-base"
          >
            Edit Profile
          </button>
        </div>
      </article>

      {/* Right column: room image + lists */}
      <aside className="flex flex-col space-y-5 md:h-[90vh] overflow-y-auto">
        <div className="h-max">
            <figure className="overflow-hidden rounded-2xl mb-5 border bg-white">
            {room.imageUrl ? (
                // bg-[url('/assets/room_1.webp')] bg-center bg-cover bg-no-repeat
                <img src={room.imageUrl} alt={room.name} className="aspect-video w-full object-cover" />
            ) : (
                <img src={'/assets/room_1.webp'} alt={room.name} className="aspect-video w-full object-cover" />
                // <div className="aspect-video w-full bg-gray-200" />
            )}
            <figcaption className="px-4 py-3 font-semibold text-[#3f5a42]">{room.name}</figcaption>
            </figure>

            <div className="rounded-2xl border bg-white p-5">
            <ListSection title="Previous requests" emptyText="No requests yet.">
                {requests.map((request) => (
                <ListRow
                    key={request.id}
                    primary={request.title}
                    secondary={formatDate(request.date)}
                    status={request.status}
                />
                ))}
            </ListSection>

            <hr className="my-5 border-[#3f5a42]/15" />

            <ListSection title="Booking history" emptyText="No bookings yet.">
                {bookings.map((booking) => (
                <ListRow
                    key={booking.id}
                    primary={booking.roomName}
                    secondary={`${formatDate(booking.checkIn)} - ${formatDate(booking.checkOut)}`}
                    status={booking.status}
                />
                ))}
            </ListSection>
            </div>
        </div>
      </aside>
    </section>
  );
}

/* ---------- Small components ---------- */

function ListSection({
  title,
  emptyText,
  children,
}: {
  title: string;
  emptyText: string;
  children: React.ReactNode[];
}) {
  return (
    <section>
      <h2 className="text-lg font-bold text-[#3f5a42]">{title}</h2>
      {children.length === 0 ? (
        <p className="mt-3 text-sm text-gray-500">{emptyText}</p>
      ) : (
        <ul className="mt-3 divide-y divide-gray-100">{children}</ul>
      )}
    </section>
  );
}

function ListRow({
  primary,
  secondary,
  status,
}: {
  primary: string;
  secondary: string;
  status: keyof typeof statusStyles;
}) {
  return (
    <li className="flex items-center justify-between gap-3 py-2.5">
      <div className="min-w-0">
        <p className="truncate text-sm font-medium text-[#2f4432]">{primary}</p>
        <p className="truncate text-xs text-gray-500">{secondary}</p>
      </div>
      <Badge variant="secondary" className={`shrink-0 ${statusStyles[status]}`}>
        {status}
      </Badge>
    </li>
  );
}

export default profile;