import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import type { IconType } from "react-icons";
import {
  IoStar,
  IoStarHalf,
  IoStarOutline,
  IoPlayCircle,
  IoCheckmarkCircleOutline,
  IoWifi,
  IoTvOutline,
  IoSnowOutline,
  IoCarOutline,
  IoRestaurantOutline,
  IoBedOutline,
  IoWaterOutline,
  IoCafeOutline,
} from "react-icons/io5";
import GuestsDial from "../components/guestsDial";
import Calender from "../components/calender";
import Card from "../components/card";

export type RoomMedia = {
  type: "image" | "video";
  src: string;
  /** Preview image, used as the video poster and its thumbnail */
  poster?: string;
  alt?: string;
};

export type Room = {
  id: string | number;
  name: string;
  description: string;
  /** 0 to 5, halves allowed (e.g. 4.5) */
  rating: number;
  reviewCount?: number;
  amenities: string[];
  media: RoomMedia[];
  price?: { amount: number; currency: string };
};

type RoomDetailsProps = {
  room?: Room;
  onSelect?: (room: Room) => void;
};

// Used when no `room` prop is passed (handy for building the UI before the API is ready)
const defaultRoom: Room = {
  id: 1,
  name: "Deluxe King Suite",
  description:
    "A spacious suite with a king bed, a private sitting area and plenty of natural light, designed for a quiet and comfortable stay.",
  rating: 4.5,
  reviewCount: 128,
  amenities: [
    "WiFi",
    "TV",
    "Air Conditioning",
    "King Bed",
    "Hot water",
    "Breakfast",
    "Parking",
    "Coffee Maker",
  ],
  media: [
    {
      type: "image",
      src: "https://picsum.photos/seed/majestic-1/1200/675",
      alt: "Bedroom",
    },
    {
      type: "image",
      src: "https://picsum.photos/seed/majestic-2/1200/675",
      alt: "Sitting area",
    },
    {
      type: "video",
      src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      poster: "https://picsum.photos/seed/majestic-3/1200/675",
    },
  ],
  price: { amount: 85000, currency: "NGN" },
};

// Used when no `onSelect` prop is passed
const defaultOnSelect = (room: Room) => {
  console.log("Room selected:", room.name);
};

// Keys are lowercase amenity names. Anything not listed gets a checkmark.
const amenityIcons: Record<string, IconType> = {
  wifi: IoWifi,
  tv: IoTvOutline,
  "air conditioning": IoSnowOutline,
  parking: IoCarOutline,
  breakfast: IoRestaurantOutline,
  "king bed": IoBedOutline,
  "hot water": IoWaterOutline,
  "coffee maker": IoCafeOutline,
};

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center text-amber-500" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((n) => {
        if (rating >= n) return <IoStar key={n} />;
        if (rating >= n - 0.5) return <IoStarHalf key={n} />;
        return <IoStarOutline key={n} />;
      })}
    </span>
  );
}

function Gallery({ media, name }: { media: RoomMedia[]; name: string }) {
  const [active, setActive] = useState(0);
  const current = media[active];

  if (!current) return null;

  return (
    <div>
      {/* Main display */}
      <div className="aspect-video w-full overflow-hidden rounded-2xl bg-[#dfe6c4]">
        {current.type === "video" ? (
          <video
            key={current.src}
            src={current.src}
            poster={current.poster}
            controls
            className="h-full w-full object-cover"
          />
        ) : (
          <img
            key={current.src}
            src={current.src}
            alt={current.alt ?? name}
            className="h-full w-full object-cover"
          />
        )}
      </div>

      {/* Thumbnails */}
      {media.length > 1 && (
        <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
          {media.map((item, i) => {
            const thumb = item.type === "image" ? item.src : item.poster;
            return (
              <button
                key={item.src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show ${item.type} ${i + 1} of ${media.length}`}
                aria-current={i === active}
                className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg bg-[#dfe6c4] ring-2 transition ${
                  i === active
                    ? "ring-[#6f9170]"
                    : "ring-transparent opacity-70 hover:opacity-100"
                }`}
              >
                {thumb && (
                  <img
                    src={thumb}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                )}
                {item.type === "video" && (
                  <span className="absolute inset-0 grid place-items-center bg-black/25 text-2xl text-white">
                    <IoPlayCircle />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function RoomDetails({
  room = defaultRoom,
  onSelect = defaultOnSelect,
}: RoomDetailsProps) {
  const formattedPrice = room.price
    ? new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: room.price.currency,
        maximumFractionDigits: 0,
      }).format(room.price.amount)
    : null;

  return (
    <>
        <Navbar />
        <div className="border-white/70 bg-linear-to-r from-[#e2e9cd] via-[#ebf0da] to-[#e2e9cd] shadow-[inset_0_0_14px_rgba(255,255,255,0.6)] backdrop-blur-md w-[95vw] md:[80vw] lg:w-[70vw] mx-auto mt-3 py-3 px-5 md:flex items-center justify-between gap-5 rounded-lg md:rounded-full">
            <div className="flex items-center gap-3 text-xl">
                
                {/* <label>Wed, Nov 25 - Thur, Nov 26</label> */}
                {/* <input type="date" id="date" className="hidden"/> */}
                <Calender />
            </div>
            <div className="flex items-center gap-3 text-xl">
                {/* <IoPersonOutline />
                <p>1 room, 1 adult, 0 children</p> */}
                <GuestsDial />
            </div>
        </div>
        <section className="mx-auto grid w-[95vw] gap-8 py-10 md:w-[90vw] lg:grid-cols-[3fr_2fr]">
        
        <Gallery media={room.media} name={room.name} />

        <div className="flex flex-col text-[#4f6b52]">
            <h1 className="text-3xl font-bold text-[#3f5a42] md:text-4xl">
            {room.name}
            </h1>

            {/* Rating */}
            <div
            className="mt-2 flex items-center gap-2 text-sm"
            aria-label={`Rated ${room.rating} out of 5`}
            >
            <Stars rating={room.rating} />
            <span className="font-semibold">{room.rating.toFixed(1)}</span>
            {room.reviewCount !== undefined && (
                <span className="text-[#6f9170]">
                ({room.reviewCount} reviews)
                </span>
            )}
            </div>

            {/* Description */}
            <p className="mt-5 leading-relaxed text-gray-700">{room.description}</p>

            {/* Amenities */}
            <h2 className="mt-6 text-lg font-semibold text-[#3f5a42]">Amenities</h2>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
            {room.amenities.map((amenity) => {
                const Icon =
                amenityIcons[amenity.toLowerCase()] ?? IoCheckmarkCircleOutline;
                return (
                <li key={amenity} className="flex items-center gap-2">
                    <Icon className="shrink-0 text-lg text-[#6f9170]" />
                    {amenity}
                </li>
                );
            })}
            </ul>

            {/* Price + select */}
            <div className="mt-8 flex items-center justify-between gap-4 border-t border-[#6f9170]/20 pt-6">
            {formattedPrice ? (
                <p>
                <span className="text-2xl font-bold text-[#3f5a42]">
                    {formattedPrice}
                </span>
                <span className="text-sm text-[#6f9170]"> / night</span>
                </p>
            ) : (
                <span />
            )}
            <button
                type="button"
                onClick={() => {onSelect(room), window.location.href = "/customer-dashboard"}}
                className="rounded-full bg-[#6f9170] px-8 py-3 text-white text-sm md:text-base transition-colors hover:bg-[#5b7d5d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6f9170] cursor-pointer"
            >
                Select Room
            </button>
            </div>
        </div>
        </section>

         <h1 className="text-2xl ml-2 md:ml-10 font-bold text-[#3f5a42] md:text-4xl">Check out other available rooms</h1>

        <div className="py-10 mx-auto w-[95vw] md:w-[90vw] grid md:grid-cols-3 gap-5">
            <Card />
            <Card />
            <Card />
        </div>

        <Footer />
    </>
  );
}