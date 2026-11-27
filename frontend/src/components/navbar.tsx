import { useState } from "react"; 
import { ArrowRight, Menu } from "lucide-react";

// const links = [
//   { label: "About", href: "#about" },
//   { label: "Gallery", href: "#gallery" },
//   { label: "Interviews", href: "#interviews" },
//   { label: "Statistics", href: "#statistics" },
// ];
  const navLinks = ["Home", "About", "Gallery", "Amenities", "Reviews"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed left-1/2 -translate-x-1/2 z-20 mx-auto flex w-[95%] md:w-[90%] items-center justify-between gap-4 rounded-b-2xl px-4 h-12 md:h-16 bg-(--main) text-white">
            <a href="#home" className="flex items-center gap-2">
              {/* logo icon */}
              <img src="/mhLogo.png" width={45} height={45}/>
              <span className="hidden md:block font-serif text-sm leading-tight tracking-wider">
                MAJESTIC <br /> HAVEN
              </span>
            </a>

            <ul className="hidden h-full gap-8 md:flex">
              {navLinks.map((link) => (
                <li key={link} className="h-full pt-5">
                  <a href={`#${link.toLowerCase()}`} className="text-sm font-medium flex h-[90%] nav-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <button className="hidden md:flex items-center relative gap-2 rounded-full px-4 py-2 text-sm font-medium bg-white hover:bg-gray-50! text-(--main)">
              <p className="mr-7">Sign In</p>
              <span className="absolute right-1 top-1/2 -translate-y-1/2 grid h-7 lg:h-8 w-7 lg:w-8 mr-auto place-items-center rounded-full bg-(--main) text-white transition-transform group-hover:translate-x-0.5">
                  <ArrowRight />
              </span>
            </button>

            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              <Menu />
            </button>

            {menuOpen && (
              <ul className="absolute left-0 right-0 top-full flex flex-col rounded-2xl p-2 md:hidden bg-(--main)">
                {navLinks.map((link) => (
                  <li key={link} className="text-center rounded-md hover:bg-(--main-hover)">
                    <a href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="block rounded-lg px-4 py-3 font-medium">
                      {link}
                    </a>
                  </li>
                ))}
                <button className="flex items-center relative gap-2 rounded-full w-fit px-4 py-2 mt-2 mx-auto text-sm font-medium bg-white hover:bg-gray-50! text-(--main)">
                  <p className="mr-7">Sign In</p>
                  <span className="absolute right-1 top-1/2 -translate-y-1/2 grid h-7 lg:h-8 w-7 lg:w-8 mr-auto place-items-center rounded-full bg-(--main) text-white transition-transform group-hover:translate-x-0.5">
                      <ArrowRight />
                  </span>
                </button>
              </ul>
            )}
          </nav>


    // <header className="w-full px-3 pt-3">
    //   <nav
    //     aria-label="Main navigation"
    //     className="mx-auto grid h-16 max-w-[1260px] grid-cols-[1fr_auto_1fr] items-center rounded-full border border-white/70 bg-linear-to-r from-(--gradient-edge) via-(--gradient-mid) to-(--gradient-edge) py-1.5 pl-3 pr-1.5 shadow-[inset_0_0_14px_rgba(255,255,255,0.6)] backdrop-blur-md"
    //   >
    //     {/* Logo placeholder: replace with your <img> */}
    //     <a
    //       href="/"
    //       aria-label="Majestic Haven home"
    //       className="h-10 w-10 rounded-full bg-(--main)"
    //     />

    //     {/* Links */}
    //     <ul className="hidden items-center gap-12 text-[15px] text-(--main) md:flex">
    //       {links.map((link) => (
    //         <li key={link.label}>
    //           <a
    //             href={link.href}
    //             className="transition-colors hover:text-(--main-hover)"
    //           >
    //             {link.label}
    //           </a>
    //         </li>
    //       ))}
    //     </ul>

    //     {/* Book Now */}
    //     <a
    //       href="/bookings"
    //       className="group col-start-3 flex h-full w-44 items-center justify-self-end rounded-full bg-white p-1.5 text-[15px] text-(--main) transition-shadow hover:shadow-md md:w-60"
    //     >
    //       <span className="flex-1 text-center">Book Now</span>
    //       <span className="grid h-9 w-9 place-items-center rounded-full bg-(--main) text-white transition-transform group-hover:translate-x-0.5">
    //         <svg
    //           viewBox="0 0 24 24"
    //           fill="none"
    //           stroke="currentColor"
    //           strokeWidth="2"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           className="h-5 w-5"
    //           aria-hidden="true"
    //         >
    //           <path d="M5 12h14" />
    //           <path d="M13 6l6 6-6 6" />
    //         </svg>
    //       </span>
    //     </a>
    //   </nav>
    // </header>
  );
}