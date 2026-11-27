import { useState } from "react";
import { motion } from "motion/react";
import {
    Users,
    BedDouble,
    MapPin,
    Phone,
    Mail,
    Gem,
    Headphones,
    ShieldCheck,
    ArrowRight,
} from "lucide-react";
// import { LuMapPin } from "react-icons/lu";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HomeCalender from "../components/homeCalender";
import GuestDial from  "../components/guestsDial";

function Home() {
  
  const [current, setCurrent] = useState(0);
  const [checkIn, setCheckIn] = useState(false);
  const [checkOut, setCheckOut] = useState(false);

  const rooms = [
    { title: "Royal Room & Suites", text: "King-sized bed with huge bathroom and balcony" },
    { title: "Royal Room & Suites", text: "King-sized bed with huge bathroom and balcony" },
    { title: "Royal Room & Suites", text: "King-sized bed with huge bathroom and balcony" },
    { title: "Royal Room & Suites", text: "King-sized bed with huge bathroom and balcony" },
  ];

  const features = [
    { line1: "Luxurious", line2: "Rooms" },
    { line1: "Excellent", line2: "Service" },
    { line1: "Safe & Secure", line2: "Environment" },
  ];

  const reviews = [
    { name: "John Doe", role: "Customer", text: "Beautiful rooms, excellent customer service, and a peaceful environment. Definitely a place I'd love to visit again! Lorem Ipsum." },
    { name: "John Doe", role: "Customer", text: "Beautiful rooms, excellent customer service, and a peaceful environment. Definitely a place I'd love to visit again! Lorem Ipsum." },
    { name: "John Doe", role: "Customer", text: "Beautiful rooms, excellent customer service, and a peaceful environment. Definitely a place I'd love to visit again! Lorem Ipsum." },
  ];


  return (
    <div id="home" className="font-sans overflow-x-clip">
      {/* ================= HERO ================= */}
      <header className="relative">
        <div className="relative min-h-[560px] overflow-hidden rounded-b-[3rem] pb-20 md:min-h-[680px]">
          <img src="/heroImg.png" alt="Majestic Haven hotel" className="absolute inset-0 h-full w-full object-cover" />

          {/* nav */}
          <Navbar />
          {/* hero content */}
          <div className="relative mx-auto grid max-w-6xl gap-8 px-4 pt-24 md:grid-cols-[1fr_auto] md:items-center md:pt-36 text-white ">
            <div className="">
              <p className="flex items-center gap-3 font-serif text-xl italic">
                <span className="h-0.5 w-9 bg-(--main-accent)" /> Welcome to
              </p>
              <h1 className="my-3 font-serif text-4xl leading-[0.92] md:text-6xl">
                Majestic Haven <br /> Hotels, Suites & <br /> Apartments
              </h1>
              <p className="mb-6 font-serif text-lg italic">
                A perfect blend of comfort, elegance <br /> and warm hospitality.
              </p>
              <button className="flex items-center relative gap-2 rounded-full px-7 py-3 bg-(--main) text-white">
                <p className="mr-7">Book Now</p>
                <span className="absolute right-2 top-1/2 -translate-y-1/2 grid h-7 lg:h-9 w-7 lg:w-9 mr-auto place-items-center rounded-full text-(--main) bg-white transition-transform group-hover:translate-x-0.5">
                    <ArrowRight />
                </span>
              </button>
            </div>

            <div id="statistics" className="grid grid-cols-2 gap-3 md:w-48 md:grid-cols-1">
              <div className="flex flex-col items-center gap-1 rounded-xl p-4 text-center bg-[#18100EAA] border-white/20 border">
                <Users />
                <strong className="text-3xl font-normal">250+</strong>
                <span className="text-sm font-medium">Happy Customers</span>
              </div>
              <div className="flex flex-col items-center gap-1 rounded-xl p-4 text-center bg-[#18100EAA] border-white/20 border">
                <BedDouble />
                <strong className="text-3xl font-normal">13+</strong>
                <span className="text-sm font-medium">Rooms</span>
              </div>
            </div>
          </div>
        </div>

        {/* booking bar */}
        
        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative z-10 mx-auto -mt-10 grid w-[92%] max-w-4xl gap-2 rounded-2xl p-4 shadow-lg grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr_auto] md:items-center bg-white"
        >
          <div className="flex items-center md:gap-3 p-2 px-4 cursor-pointer rounded-full hover:bg-gray-50" onClick={() => {setCheckIn(!checkIn), setCheckOut(false)}}>
            <span className="flex flex-col text-sm">
              <span className="font-medium">Check in</span>
              {checkIn && (
                <div className="w-max h-max absolute top-full">
                  <HomeCalender/>
                </div>
              )}
            </span>
          </div>
          <div className="flex items-center md:gap-3 p-2 px-4 cursor-pointer rounded-full hover:bg-gray-50" onClick={() => {setCheckOut(!checkOut), setCheckIn(false)}}>
            <span className="flex flex-col text-sm">
              <span className="font-medium">Check Out</span>
              {checkOut && (
                <div className="w-max h-max absolute top-full">
                  <HomeCalender/>
                </div>
              )}
            </span>
          </div>
          <label className="flex items-center md:gap-3 p-2">
            {/* users icon */}
            <span className="flex flex-col text-sm">
              <span className="font-medium">Guests</span>
              {/* <GuestDial /> */}
              {/* <select>
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
              </select> */}
            </span>
            {/* chevron icon */}
          </label>
          <button type="submit" className="col-start-1 col-end-3 md:col-start-4 md:col-end-5 flex items-center relative justify-center gap-2 rounded-full px-2 md:px-7 py-3 md:h-max! bg-(--main) text-white text-xs md:text-base">
            <p className="mr-7">Check Availability</p>
            <span className="absolute right-1 top-1/2 -translate-y-1/2 grid h-7 lg:h-9 w-7 lg:w-9 mr-auto place-items-center rounded-full text-(--main) bg-white transition-transform group-hover:translate-x-0.5">
                <ArrowRight />
            </span>
          </button>
        </form>
      </header>

      <main>
        {/* ================= ABOUT ================= */}
        <section id="about" className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}>
            <span className="mb-4 block h-0.5 w-9 bg-(--main-accent)" />
            <h2 className="font-serif text-4xl md:text-5xl text-(--heading-text)">
              Your Home Away <br /> from <em className="text-(--main)">Home</em>
            </h2>
            <h3 className="mt-4 text-xl font-medium">The perfect break you need</h3>
            <p className="my-4 max-w-md leading-relaxed">
              Experience the ultimate retreat where luxury meets tranquil comfort. At Majestic Haven, we curate unforgettable stays with
              world-class amenities, personalized service, and beautifully appointed spaces designed for your relaxation and peace of mind.
            </p>
            <button className="flex items-center relative gap-2 rounded-full px-7 py-3 bg-(--main) text-white">
              <p className="mr-7">Learn More</p>
              <span className="absolute right-2 top-1/2 -translate-y-1/2 grid h-7 lg:h-9 w-7 lg:w-9 mr-auto place-items-center rounded-full text-(--main) bg-white transition-transform group-hover:translate-x-0.5">
                <ArrowRight />
              </span>
            </button>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }} src="" alt="Suite with a king-sized bed" className="aspect-[221/228] w-full rounded-3xl object-cover" />
        </section>

        {/* ================= ROOMS ================= */}
        <section id="gallery" className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-10 flex items-center justify-center gap-4">
            <span className="h-0.5 max-w-48 flex-1 bg-(--main-accent)" />
            <h2 className="font-serif text-3xl md:text-4xl text-(--heading-text)">
              Built With <em className="text-(--main)">Purpose</em>
            </h2>
            <span className="h-0.5 max-w-48 flex-1" />
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {rooms.map((room, i) => (
              <motion.li
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }} key={i} className="overflow-hidden rounded-2xl shadow-md bg-white">
                <img src="" alt={room.title} className="aspect-[219/134] w-full object-cover" />
                <div className="p-5">
                  <h3 className="mb-2 text-lg font-medium">{room.title}</h3>
                  <p>{room.text}</p>
                </div>
              </motion.li>
            ))}
          </ul>

          <div className="mt-8 flex justify-center">
            <button className="flex items-center relative gap-2 rounded-full px-7 py-3 bg-(--main) text-white">
              <p className="mr-7">View More Rooms</p>
              <span className="absolute right-2 top-1/2 -translate-y-1/2 grid h-7 lg:h-9 w-7 lg:w-9 mr-auto place-items-center rounded-full text-(--main) bg-white transition-transform group-hover:translate-x-0.5">
                <ArrowRight />
              </span>
            </button>
          </div>
        </section>

        {/* ================= WHY US ================= */}
        <section id="amenities" className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid overflow-hidden rounded-3xl bg-white shadow-md md:grid-cols-[5fr_7fr]">
            <div className="p-8 md:pr-24 bg-(--main) text-white">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0}}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }}>
                <span className="mb-4 block h-0.5 w-9 bg-(--main-accent)" />
                <h2 className="font-serif text-3xl">
                    Why our Customers
                    <em className="block text-5xl font-semibold text-(--main-accent)">Chose US</em>
                </h2>
                <p className="my-4">
                    Experience good living atMajestic Haven, where <br /> comfort meets class.
                </p>
                <button className="flex relative justify-between rounded-full min-w-42 px-6 py-3 border border-white/20 cursor-pointer">
                    <p>Book Now</p>
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 grid h-7 lg:h-9 w-7 lg:w-9 mr-auto place-items-center rounded-full text-(--main) bg-white transition-transform group-hover:translate-x-0.5">
                        <ArrowRight />
                    </span>
                </button>

              </motion.div>
            </div>

            <ul className="grid grid-cols-3 items-center py-6">
              {features.map((f, i:number) => (
                <li key={i} className={`px-2 text-sm font-medium md:text-base ${i < 2 ? "border-r-2 border-(--main)" : ""} `}>
                    <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center flex flex-col items-center gap-3">
                        {f.line1 == "Luxurious" ? (
                        <Gem className="text-(--main) md:h-10 md:w-10"/>
                        ): f.line1 == "Excellent" ?(
                        <Headphones className="text-(--main) md:h-10 md:w-10"/>
                        ) : (
                        <ShieldCheck className="text-(--main) md:h-10 md:w-10"/>
                        )}
                        <span>
                        {f.line1} <br /> {f.line2}
                        </span>
                    </motion.div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ================= REVIEWS ================= */}
        <section id="reviews" className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-4 md:grid-cols-2">
            {[reviews[current], reviews[(current + 1) % reviews.length]].map((r, i) => (
              <motion.figure
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }}
                key={i} className={`flex flex-col gap-3 rounded-2xl p-6 bg-white shadow-md ${i === 1 ? "hidden md:flex" : ""}`}>
                <span className="font-serif text-6xl font-bold leading-none text-(--main)">&ldquo;</span>
                <blockquote className="flex-1">{r.text}</blockquote>
                <figcaption className="flex items-center gap-3">
                  <img src="" alt={r.name} className="h-12 w-12 rounded-full object-cover" />
                  <span className="mr-auto flex flex-col">
                    <strong className="font-medium">{r.name}</strong>
                    <small>{r.role}</small>
                  </span>
                  <span className="flex gap-0.5">
                    {/* star icon x5 */}
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                aria-label={`Review ${i + 1}`}
                onClick={() => setCurrent(i)}
                className={`h-3 w-3 rounded-full border ${i === current ? "bg-(--main)" : "opacity-50"}`}
              />
            ))}
          </div>
        </section>

        {/* ================= FIND US ================= */}
        <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-6 rounded-3xl p-6 bg-white shadow-md md:grid-cols-2 md:gap-10 overflow-hidden">
            <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col justify-between gap-8">
              <div className="flex items-start gap-4">
                <MapPin className="h-16 w-16 text-(--main)"/>
                <div>
                  <h2 className="mb-2 font-serif text-3xl text-(--heading-text)">Find Us Easily</h2>
                  <p className="mb-4 text-lg">
                    Our hotel is conveniently located <br /> in the heart of the city.
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 rounded-full px-6 py-2 bg-(--main) text-white">
                    Get Directions
                    {/* arrow icon */}
                  </a>
                </div>
              </div>

              <ul className="grid gap-3">
                <li className="flex items-center gap-3">
                  <Phone className="text-(--main)"/>
                  <div className="grid md:grid-cols-3 gap-x-3">
                    <a href="tel:+2349120000000">+234 803 957 1749 </a>
                    <a href="tel:+2349120000000">+234 802 549 1762 </a>
                    <a href="tel:+2349120000000">+234 702 500 0364 </a>
                    <a href="tel:+2349120000000">+234 805 874 1749 </a>
                    <a href="tel:+2349120000000">+234 702 500 0365 </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-(--main) h-7 w-7"/>
                  <a href="mailto:majestichaven@gmail.com">majestichaven@gmail.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="text-(--main) h-10 w-10"/>
                  <span>2, Olaosebikan Oladapo Street, Off Baage Crescent Goshen Estate, Abeokuta, Ogun State</span>
                </li>
              </ul>
            </motion.div>

            {/* <motion.img
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            src="" alt="Map showing Majestic Haven"  /> */}
            <motion.iframe
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0}}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="min-h-64 w-full border rounded-2xl object-cover"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.393463362934!2d3.363378073734898!3d7.195868014987583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103a49f5508e21c3%3A0xcf171f49825c244c!2sMajestic%20Haven%20Hotels%2CSuites%20and%20Apartments!5e0!3m2!1sen!2sng!4v1795791999119!5m2!1sen!2sng" width="600" height="450" loading="lazy"></motion.iframe>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
};

export default Home;