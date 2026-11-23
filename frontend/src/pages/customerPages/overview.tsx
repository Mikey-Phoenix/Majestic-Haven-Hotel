import { useRef, useState } from "react";
import { Badge } from "../../components/ui/badge";
import HistoryCard from "../../components/historyCard";
import {
  IoStar,
  IoStarHalf,
  IoStarOutline,
} from "react-icons/io5";

type Props = {
    bookings: Array<Booking>;
}
// type BookingStatus = ;
interface Booking {
  id: string;
  roomName: string;
  checkIn: string; // ISO date, e.g. "2026-10-12"
  checkOut: string;
  total: string;
  status: "Completed" | "Upcoming" | "Cancelled";
}
const buttonBase =
  "rounded-full px-8 py-3 text-sm md:text-base transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6f9170]";
const primaryButton = `${buttonBase} bg-[#6f9170] text-white hover:bg-[#5b7d5d]`;
const dangerButton = `${buttonBase} border border-red-300 bg-white text-red-600 hover:bg-red-50`;

// const navLabel = (id: string) => [...customerNav, ...adminNav].find((item) => item.id === id)?.label ?? id;

function OverView({ bookings }: Props) {
    const otherImages = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState("hidden");
    const [rating, setRating] = useState(5);
    const star1 = useRef<HTMLSpanElement>(null)
    const star2 = useRef<HTMLSpanElement>(null)
    const star3 = useRef<HTMLSpanElement>(null)
    const star4 = useRef<HTMLSpanElement>(null)
    const star5 = useRef<HTMLSpanElement>(null)
    return(

        <main className="flex min-h-screen flex-col md:min-w-0 md:flex-1 lg:flex-row">
            <>
                {/* Current room */}
                <section className="p-5 lg:mr-3 lg:w-2/3">
                <div className="aspect-video w-full rounded-lg bg-gray-200 relative bg-[url('/assets/room_1.webp')] bg-center bg-cover bg-no-repeat" onMouseOver={() => setVisible('flex')} onMouseOut={() => setVisible('hidden')}>
                    <div ref={otherImages} className={`absolute right-2 md:top-1/2 md:-translate-y-1/2 w-[80%] md:w-[20%] ${visible} md:flex-col space-y-2 space-x-2`}>
                        <div className="w-full h-28 rounded-md bg-gray-400 cursor-pointer bg-[url('/assets/room_2.webp')] bg-center bg-cover bg-no-repeat"></div>
                        <div className="w-full h-28 rounded-md bg-gray-400 cursor-pointer bg-[url('/assets/room_3.webp')] bg-center bg-cover bg-no-repeat"></div>
                        <div className="w-full h-28 rounded-md bg-gray-400 cursor-pointer bg-[url('/assets/room_4.webp')] bg-center bg-cover bg-no-repeat"></div>
                    </div>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                    <h1 className="text-3xl font-bold text-[#3f5a42] md:text-4xl">Room Name</h1>
                    <p className="mt-5 leading-relaxed text-gray-700">Room Description</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                    <Badge className="p-4 text-xl" variant="secondary">Verified</Badge>
                    <Badge className="p-4 text-xl" variant="secondary">Class</Badge>
                    </div>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                    <button type="button" className={primaryButton}>Change Dates</button>
                    <button type="button" className={primaryButton}>Add Special Requests</button>
                    <button type="button" className={dangerButton}>Cancel Reservation</button>
                </div>
                </section>

                {/* Booking history */}
                <section className="px-5 py-5 lg:w-1/3 lg:px-2">
                <div className="w-full mb-4">
                    <h2 className="text-3xl font-bold text-[#3f5a42] md:text-4xl">Leave a Review</h2>
                    <div className="flex space-x-3 my-2 ">
                        <span ref={star1} className="text-xl text-amber-500 cursor-pointer hover:text-xxl" onClick={() => setRating(1)}>
                            {rating >= 1 && (
                                <IoStar/>
                            )}
                        </span>
                        <span ref={star2} className="text-xl text-amber-500 cursor-pointer hover:text-xxl" onClick={() => setRating(2)}>
                            {rating >= 2 ? (
                                <IoStar/>
                            ) : (
                                <IoStarOutline/>
                            )}
                        </span>
                        <span ref={star3} className="text-xl text-amber-500 cursor-pointer hover:text-xxl" onClick={() => setRating(3)}>
                            {rating >= 3 ? (
                                <IoStar/>
                            ) : (
                                <IoStarOutline/>
                            )}
                        </span>
                        <span ref={star4} className="text-xl text-amber-500 cursor-pointer hover:text-xxl" onClick={() => setRating(4)}>
                            {rating >= 4 ? (
                                <IoStar/>
                            ) : (
                                <IoStarOutline/>
                            )}
                        </span>
                        <span ref={star5} className="text-xl text-amber-500 cursor-pointer hover:text-xxl" onClick={() => setRating(5)}>
                            {rating >= 5? (
                                <IoStar/>
                            ) : (
                                <IoStarOutline/>
                            )}
                        </span>
                    </div>
                    <textarea name="" id="" className="w-full h-24 p-2 border rounded-md">Perfect room service!</textarea>
                    <button className="mt-4 w-full rounded-full bg-[#6f9170] py-2 text-white hover:bg-[#4f7a52] cursor-pointer">Leave Review</button>
                </div>
                <h2 className="text-3xl font-bold text-[#3f5a42] md:text-4xl">Booking History</h2>
                <div className="mt-2 max-h-[calc(100vh-22rem)] overflow-y-auto pr-1">
                    {bookings.length === 0 ? (
                    <p className="mt-5 text-gray-600">No bookings yet. Your stays will show up here.</p>
                    ) : (
                    bookings.map((booking) => <HistoryCard key={booking.id} booking={booking} />)
                    )}
                </div>
                </section>
            </>
            
        </main>
    )
}

export default OverView;