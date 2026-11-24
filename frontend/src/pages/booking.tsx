import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Calender from "../components/calender";
import GuestsDial from "../components/guestsDial";
import Card from "../components/card";
import { useScrollUp } from "../components/hooks/hideNavbar";
import { mockRoom } from "../data/mockData"

function bookingPage() {
    const rooms = [mockRoom];
    const hidden = useScrollUp();

    function screenTop() {
        const y = Math.max(window.scrollY, 0);
        if ( y == 0 ) return true;
        return false;
    }

    console.log("Top of the screen " + screenTop());

    return(
        <>
            <header className="fixed top-0 w-full z-50" >
                {/* <header className={`${hidden ? "hidden" : ""}`}> */}
                {screenTop() ? (
                    <Navbar />
                ): hidden && (
                    <div className="fade">
                        <Navbar />
                    </div>
                )}
                {/* </header> */}
                {hidden ? (
                    <div className="border-white/70 bg-linear-to-r from-(--gradient-edge) via-(--gradient-mid) to-(--gradient-edge) shadow-[inset_0_0_14px_rgba(255,255,255,0.6)] backdrop-blur-md w-[95vw] md:[80vw] lg:w-[70vw] mx-auto mt-3 py-3 px-5 md:flex items-center justify-between gap-5 rounded-lg md:rounded-full">
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
                ):(
                    <div className="border-white/70 bg-linear-to-r from-(--gradient-edge) via-(--gradient-mid) to-(--gradient-edge) shadow-[inset_0_0_14px_rgba(255,255,255,0.6)] backdrop-blur-md w-[95vw] md:[85vw] lg:w-[55vw] mx-auto mt-3 py-1 px-2 md:flex items-center justify-between gap-5 rounded-lg md:rounded-full">
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
                )}

                {hidden && (
                    <div className="flex  mx-auto py-3 w-fit space-x-3 md:space-x-5">
                        <div className="border-white/70 bg-linear-to-r from-(--gradient-edge) via-(--gradient-mid) to-(--gradient-edge) shadow-[inset_0_0_14px_rgba(255,255,255,0.6)] backdrop-blur-md px-5 py-3 rounded-full font-semibold text-sm md:text-base cursor-pointer">13 Rooms Total</div>
                        <div className="border-white/70 bg-linear-to-r from-(--gradient-edge) via-(--gradient-mid) to-(--gradient-edge) shadow-[inset_0_0_14px_rgba(255,255,255,0.6)] backdrop-blur-md px-5 py-3 rounded-full font-semibold text-sm md:text-base cursor-pointer">5 Taken</div>
                        <div className="border-white/70 bg-linear-to-r from-(--gradient-edge) via-(--gradient-mid) to-(--gradient-edge) shadow-[inset_0_0_14px_rgba(255,255,255,0.6)] backdrop-blur-md px-5 py-3 rounded-full font-semibold text-sm md:text-base cursor-pointer">8 Available</div>
                    </div>

                )}
            </header>

            <div className="py-10 mx-auto mt-56 w-[95vw] md:w-[90vw]">
                {rooms.length > 0 ? (
                    <div className="grid md:grid-cols-3 gap-5">
                            {rooms.map(room => (
                                <Card room={room} />
                            ))}
                    </div>
                ):(
                    <p>No rooms Available at this time</p>
                )}
            </div>

            <Footer />
        </>
    )
}

export default bookingPage;