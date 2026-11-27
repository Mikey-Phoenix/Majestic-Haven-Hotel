import { FaFacebookF, FaInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6";

export default function Footer() {

  const footerLinks = [
    { title: "Quick Links", links: ["About", "Gallery", "Amenities", "Reviews"] },
    { title: "Services", links: ["Rooms", "Bookings", "Contact", "Support"] },
    { title: "More", links: ["FAQ", "Privacy Policy", "Terms & Conditions", "Sitemap"] },
  ];

  return (
    <footer className="rounded-t-2xl px-4 pb-4 pt-10 bg-(--main) text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <a href="#top" className="flex md:flex-col items-center gap-2">
              <img src="/mhLogo.png" className="w-26 md:w-16 h-26 md:h-16"/>
              <span className="font-serif text-lg leading-tight tracking-wider">
                MAJESTIC HAVEN <br />HOTELS, SUITES &<br /> APARTMENTS
              </span>
            </a>
            <p className="mt-3 text-sm font-serif italic">Your Home Away from Home</p>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="mb-3 font-medium">{col.title}</h4>
              <ul className="grid gap-2 text-sm">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="mb-3 font-medium">Follow Us</h4>
            <div className="flex gap-2 text-(--main)">
              <a href="#" aria-label="Facebook" className="grid h-9 w-9 bg-white hover:bg-(--main-accent) hover:text-(--main)! place-items-center rounded-full">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram" className="grid h-9 w-9 bg-white hover:bg-(--main-accent) hover:text-(--main)! place-items-center rounded-full">
                <FaInstagram />
              </a>
              <a href="#" aria-label="X" className="grid h-9 w-9 bg-white hover:bg-(--main-accent) hover:text-(--main)! place-items-center rounded-full">
                <FaXTwitter />
              </a>
              <a href="#" aria-label="LinkedIn" className="grid h-9 w-9 bg-white hover:bg-(--main-accent) hover:text-(--main)! place-items-center rounded-full">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 border-t pt-4 text-center text-xs">&copy; 2026 Majestic Haven. All rights reserved.</p>
      </footer>




    // <footer className="w-full bg-white px-3 pb-2 pt-3 font-['Montserrat',sans-serif]">
    //   {/* Green panel with the notch cut out of the top edge */}
    //   <div
    //     className="relative mx-auto flex min-h-[560px] flex-col justify-between overflow-hidden rounded-xl bg-(--main)"
    //     style={{
    //       clipPath:
    //         "polygon(0 0, 18% 0, 27.5% 45px, 74% 45px, 81.5% 0, 100% 0, 100% 100%, 0 100%)",
    //     }}
    //   >
    //     {/* Top content */}
    //     <div className="grid grid-cols-1 gap-10 px-6 pt-32 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16 md:pt-40">
    //       {/* Featured card */}
    //       <a href={featuredHref} className="block max-w-[260px]">
    //         <img
    //           src={featuredImage}
    //           alt={featuredTitle}
    //           className="h-[92px] w-full rounded-2xl object-cover"
    //         />
    //         <h3 className="mt-3 text-5xl font-light leading-none text-white">
    //           {featuredTitle}
    //         </h3>
    //         <span className="text-base font-light text-white">See more...</span>
    //       </a>

    //       {/* Link columns */}
    //       <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
    //         {columns.map((col, i) => (
    //           <div key={i}>
    //             <h4 className="text-xl font-semibold text-[#dfe6c4]">
    //               {col.title}
    //             </h4>
    //             <ul className="mt-3 space-y-0.5 text-sm text-white">
    //               {col.items.map((item, j) => (
    //                 <li key={j}>
    //                   <a
    //                     href={item.href}
    //                     className="transition-opacity hover:opacity-70"
    //                   >
    //                     {item.label}
    //                   </a>
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     {/* Oversized brand name, slightly cropped by the bottom edge */}
    //     <p
    //       aria-hidden="true"
    //       className="mt-16 select-none whitespace-nowrap text-center font-['Playfair_Display',serif] text-9xl uppercase leading-none tracking-tight text-white"
    //       style={{ transform: "translateY(20%)" }}
    //     >
    //       Majestic Haven
    //     </p>
    //   </div>

    //   <p className="mt-3 text-center text-[11px] text-[#6f9170]">
    //     Copyrighted since 2024
    //   </p>
    // </footer>
  );
}