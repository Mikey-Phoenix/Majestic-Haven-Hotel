const links = [
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Interviews", href: "#interviews" },
  { label: "Statistics", href: "#statistics" },
];

export default function Navbar() {
  return (
    <header className="w-full px-3 pt-3">
      <nav
        aria-label="Main navigation"
        className="mx-auto grid h-16 max-w-[1260px] grid-cols-[1fr_auto_1fr] items-center rounded-full border border-white/70 bg-linear-to-r from-(--gradient-edge) via-(--gradient-mid) to-(--gradient-edge) py-1.5 pl-3 pr-1.5 shadow-[inset_0_0_14px_rgba(255,255,255,0.6)] backdrop-blur-md"
      >
        {/* Logo placeholder: replace with your <img> */}
        <a
          href="/"
          aria-label="Majestic Haven home"
          className="h-10 w-10 rounded-full bg-(--main)"
        />

        {/* Links */}
        <ul className="hidden items-center gap-12 text-[15px] text-(--main) md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="transition-colors hover:text-(--main-hover)"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Book Now */}
        <a
          href="/bookings"
          className="group col-start-3 flex h-full w-44 items-center justify-self-end rounded-full bg-white p-1.5 text-[15px] text-(--main) transition-shadow hover:shadow-md md:w-60"
        >
          <span className="flex-1 text-center">Book Now</span>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-(--main) text-white transition-transform group-hover:translate-x-0.5">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </span>
        </a>
      </nav>
    </header>
  );
}