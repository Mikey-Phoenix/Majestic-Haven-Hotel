import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Calender from "../components/calender";
import GuestsDial from "../components/guestsDial";
import Card from "../components/card";
import { IoCalendarOutline, IoPersonOutline } from "react-icons/io5";

function bookingPage() {
    return(
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

            <div className="flex  mx-auto py-3 w-fit space-x-3 md:space-x-5">
                <div className="border-white/70 bg-linear-to-r from-[#e2e9cd] via-[#ebf0da] to-[#e2e9cd] shadow-[inset_0_0_14px_rgba(255,255,255,0.6)] backdrop-blur-md px-5 py-3 rounded-full font-semibold text-sm md:text-base cursor-pointer">13 Rooms Total</div>
                <div className="border-white/70 bg-linear-to-r from-[#e2e9cd] via-[#ebf0da] to-[#e2e9cd] shadow-[inset_0_0_14px_rgba(255,255,255,0.6)] backdrop-blur-md px-5 py-3 rounded-full font-semibold text-sm md:text-base cursor-pointer">5 Taken</div>
                <div className="border-white/70 bg-linear-to-r from-[#e2e9cd] via-[#ebf0da] to-[#e2e9cd] shadow-[inset_0_0_14px_rgba(255,255,255,0.6)] backdrop-blur-md px-5 py-3 rounded-full font-semibold text-sm md:text-base cursor-pointer">8 Available</div>
            </div>

            <div className="py-10 mx-auto w-[95vw] md:w-[90vw] grid md:grid-cols-3 gap-5">
                <Card />
                <Card />
                <Card />
            </div>

            <Footer />
        </>
    )
}

export default bookingPage;