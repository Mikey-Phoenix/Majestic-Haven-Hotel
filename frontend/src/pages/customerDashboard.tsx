import { useState } from "react";
import { Badge } from "../components/ui/badge";
import { User, Phone } from "lucide-react";
import Overview from "./customerPages/overview";
import History from "./customerPages/history";
import Profile from "./customerPages/profile";

/* ---------- Types & sample data ---------- */

type BookingStatus = "Completed" | "Upcoming" | "Cancelled";

interface Booking {
  id: string;
  roomName: string;
  checkIn: string; // ISO date, e.g. "2026-10-12"
  checkOut: string;
  total: string;
  status: BookingStatus;
}

// Placeholder data - replace with a fetch to your backend later
const bookings: Booking[] = [
  { id: "MH-20481", roomName: "Deluxe King Room", checkIn: "2026-10-12", checkOut: "2026-10-15", total: "₦180,000", status: "Completed" },
  { id: "MH-20377", roomName: "Executive Suite", checkIn: "2026-08-02", checkOut: "2026-08-04", total: "₦240,000", status: "Completed" },
  { id: "MH-20290", roomName: "Standard Twin Room", checkIn: "2026-06-18", checkOut: "2026-06-19", total: "₦65,000", status: "Cancelled" },
  { id: "MH-20512", roomName: "Deluxe King Room", checkIn: "2026-12-20", checkOut: "2026-12-27", total: "₦420,000", status: "Upcoming" },
];

interface NavItem {
  id: string;
  label: string;
}

// Guest navigation (id "Room" = overview, "History" = my bookings)
const customerNav: NavItem[] = [
  { id: "Room", label: "Overview" },
  { id: "History", label: "My bookings" },
  { id: "Profile", label: "My profile" },
];

// Staff-only navigation, shown when isAdmin is true
const adminNav: NavItem[] = [
  { id: "Rates", label: "Rooms & rates" },
  { id: "Reservations", label: "All reservations" },
  { id: "Homepage", label: "Homepage editor" },
  { id: "Reviews", label: "Reviews" },
];



const links = [
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Interviews", href: "#interviews" },
  { label: "Statistics", href: "#statistics" },
];

/* ---------- Shared styles & helpers ---------- */


/* ---------- Page ---------- */

function CustomerDashboard({ isAdmin = false }: { isAdmin?: boolean }) {
  const [activeTab, setActiveTab] = useState<string>("Room");
  const [mobileNav, setMobileNav] = useState<string>("translate-x-[-100vw]");
  const username = "Username"; // TODO: replace with the logged-in user's name

  return (
    <div>
      {/* Top bar */}
      <HeaderNav mobileNav={mobileNav} setMobileNav={setMobileNav} />

      <div className="mt-16 flex w-full flex-col md:flex-row">
        {/* Sidebar */}
        <SideBar activeTab={activeTab} setActiveTab={setActiveTab} username={username} mobileNav={mobileNav} setMobileNav={setMobileNav} />

        {/* Main content */}
        {activeTab === "Room" ? (
          <Overview bookings={bookings} />
        ) : activeTab === "History" ? (
          <History bookings={bookings} />
        ) : (   
            <Profile customer={dummyCustomer} room={dummyRoom} requests={dummyRequests} bookings={dummyBookings}
/>
        )}
      </div>
    </div>
  );
}

/* ---------- Components ---------- */

interface SidebarGroupProps {
  title?: string;
  items: NavItem[];
  activeTab: string;
  onSelect: (id: string) => void;
}

function SidebarGroup({ title, items, activeTab, onSelect }: SidebarGroupProps) {
  return (
    <div className="flex gap-2 flex-col md:gap-1">
      {title && (
        <p className="hidden px-4 pb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#6f9170]/80 md:block">
          {title}
        </p>
      )}
      {items.map((item) => {
        const active = activeTab === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item.id)}
            aria-current={active ? "page" : undefined}
            className={`w-full shrink-0 cursor-pointer whitespace-nowrap rounded-xl px-4 py-3 text-left text-[15px] transition-colors md:w-full ${
              active
                ? "bg-white font-medium text-[#2f4432] shadow-sm"
                : "text-[#5f7260] hover:bg-white/60 hover:text-[#2f4432]"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}



type HeaderNavProps = Pick<Props, "mobileNav" | "setMobileNav">;

function HeaderNav({ mobileNav, setMobileNav}:HeaderNavProps) {
    return (
        <header className="fixed top-0 left-0 z-10 mx-auto grid h-16 w-full grid-cols-[1fr_auto_1fr] items-center bg-linear-to-r from-[#e2e9cd] via-[#ebf0da] to-[#e2e9cd] py-1.5 pl-3 pr-1.5 shadow-[inset_0_0_14px_rgba(255,255,255,0.6)] backdrop-blur-md">
            <div aria-label="Majestic Haven home" className="h-10 w-10 rounded-full bg-[#7a9a77] cursor-pointer" onClick={() => {mobileNav == "translate-x-[-100vw]" ? (setMobileNav("translate-x-[0vw]")) : (setMobileNav("translate-x-[-100vw]"))}} ></div>

            {/* Links */}
            <nav aria-label="Main">
            <ul className="hidden items-center gap-12 text-[15px] text-[#6f9170] md:flex">
                {links.map((link) => (
                <li key={link.label}>
                    <a href={link.href} className="transition-colors hover:text-[#4f7a52]">
                    {link.label}
                    </a>
                </li>
                ))}
            </ul>
            </nav>

            {/* Account */}
            <a
            href="/bookings"
            className="group col-start-3 flex h-full w-44 items-center justify-self-end rounded-full bg-white p-1.5 text-[15px] text-[#6f9170] transition-shadow hover:shadow-md md:w-60"
            >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#6f9170] text-white transition-transform group-hover:translate-x-0.5">
                <User />
            </span>
            <span className="flex-1 truncate px-2 text-center">Username</span>
            </a>
        </header>
    )
}
type Props = {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    username: string;
    mobileNav: string;
    setMobileNav : (tab: string) => void;
}
type SideBarProps = Pick<Props, "activeTab" | "setActiveTab" | "username" | "mobileNav" | "setMobileNav">;

function SideBar({activeTab, setActiveTab, username, mobileNav, setMobileNav}: SideBarProps) {
    return (
        <aside className={`bg-[#ebf0da] p-3 min-h-screen lg:min-h-screen w-full md:w-64 md:shrink-0 md:px-6 md:py-10 lg:w-72 fixed md:static z-50 ${mobileNav} md:translate-x-0`}>
          {/* Greeting (desktop only) */}
          <div className="block">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#6f9170]">Your space</p>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#2f4432]">Hello, {username}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#6f7f6e]">Everything for your stay, in one place.</p>
            <hr className="my-6 border-[#3f5a42]/15" />
          </div>

          <nav aria-label="Dashboard" className="flex gap-2 overflow-x-auto flex-col md:gap-8 md:overflow-visible" onClick={() => setMobileNav("translate-x-[-100vw]")}>
            <SidebarGroup items={customerNav} activeTab={activeTab} onSelect={setActiveTab} />
          </nav>
          <button className="mt-4 w-full rounded-full bg-[#6f9170] py-2 text-white hover:bg-[#4f7a52]">
            <Phone className="mr-2 inline h-4 w-4" />
            Call Support
          </button>
        </aside>
    )
}


export const dummyCustomer = {
  fullName: "Adaeze Okonkwo",
  email: "adaeze.okonkwo@example.com",
  phone: "+234 803 555 0142",
  location: "Lagos, Nigeria",
  memberSince: "2025-03-14",
  // avatarUrl: "/images/avatars/adaeze.jpg",  // leave out to show initials
};

export const dummyRoom = {
  name: "Deluxe King Room",
  // imageUrl: "/images/rooms/deluxe-king.jpg", // leave out to show the grey placeholder
};

export const dummyRequests = [
  { id: "REQ-301", title: "Extra towels and pillows", date: "2026-11-18", status: "Pending" },
  { id: "REQ-298", title: "Laundry pickup", date: "2026-11-17", status: "Done" },
  { id: "REQ-290", title: "Late checkout (2 PM)", date: "2026-10-14", status: "Done" },
  { id: "REQ-276", title: "Airport transfer", date: "2026-10-12", status: "Done" },
] as const;

// Same shape as your History page, so you can reuse it there
export const dummyBookings: Booking[] = [
  { id: "MH-20512", roomName: "Deluxe King Room", checkIn: "2026-12-20", checkOut: "2026-12-27", total: "₦420,000", status: "Upcoming" },
  { id: "MH-20481", roomName: "Deluxe King Room", checkIn: "2026-10-12", checkOut: "2026-10-15", total: "₦180,000", status: "Completed" },
  { id: "MH-20377", roomName: "Executive Suite", checkIn: "2026-08-02", checkOut: "2026-08-04", total: "₦240,000", status: "Completed" },
  { id: "MH-20290", roomName: "Standard Twin Room", checkIn: "2026-06-18", checkOut: "2026-06-19", total: "₦65,000", status: "Cancelled" },
];


export default CustomerDashboard;