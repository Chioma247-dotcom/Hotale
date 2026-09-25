import Link from "next/link";

export default function RoomGridStyle1() {
    return (
        <div>
            {/* ------HERO----- */}
            <div className="flex  justify-center relative">
                <img src="IMG20.jpg" alt="" className="w-full h-full absolute z-0" />
                <div className="w-full max-w-300 px-4 sm:px-6">
                    <div className="flex justify-center items-center py-24 sm:py-32 md:py-40 relative">
                        <div className="text-4xl sm:text-5xl md:text-6xl text-white font-bold max-w-250 leading-tight md:leading-20 text-center">Room Side Thumbnail</div>





                    </div>
                </div>
            </div>
            {/* -----rooms 1----- */}
            <div className="flex justify-center bg-white">
                <div className="max-w-300 w-full px-4 sm:px-6">
                    <div className="flex items-center justify-center mt-16 md:mt-36 mb-0 md:ml-20 h-auto min-h-70 w-full md:w-250">
                        <div className="grid grid-cols-1 md:grid-cols-2 border-2 justify-center items-center w-full">
                            <img src="IMG15.jpg" alt="" className="h-auto w-full md:h-73 md:w-auto mt-6 md:mt-10 mb-6 md:mb-10 object-cover" />
                            <div className="flex flex-col p-5 md:mr-19 md:p-0">
                                <div className="text-black text-2xl font-bold mb-4"> Luxury Suite</div>
                                <div className="flex flex-wrap mb-7 gap-4 md:gap-7 items-start">
                                    <div className="flex gap-2">
                                        <div className="text-black text-2xl"> <i className="bi bi-truck-front"></i></div>
                                        <div className="text-xl text-gray-600">1 King Bed</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="text-black text-2xl"> <i className="bi bi-people"></i></div>
                                        <div className="text-xl text-gray-600">4 Guests</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="text-black text-2xl"> <i className="bi bi-aspect-ratio"></i></div>
                                        <div className="text-xl text-gray-600">30 Sqm</div>
                                    </div>
                                </div>
                                <div className="text-gray-600 text-lg font-medium mb-7">Hotale Suites has been honored with the prestigious Five-Star Award by Forbes.</div>
                                <div className="flex flex-wrap justify-between gap-4">
                                    <div className=" flex gap-3">
                                        <Link href="/room-search" className="inline-flex min-h-11 items-center rounded-sm px-2 text-sm font-bold text-black transition hover:text-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2">BOOK NOW</Link>
                                        <div className=" text-black font-bold text-sm"><i className="bi bi-caret-right"></i></div>
                                    </div>
                                    <div className="text-black text-2xl font-light">From $ 90 <span className="text-gray-600 text-lg font-medium">/ night</span></div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            {/* -----rooms 2----- */}
            <div className="flex justify-center bg-white">
                <div className="max-w-300 w-full px-4 sm:px-6">
                    <div className="flex items-center justify-center mt-16 md:mt-36 mb-0 md:ml-20 h-auto min-h-70 w-full md:w-250">
                        <div className="grid grid-cols-1 md:grid-cols-2 border-2 justify-center items-center w-full">
                            <img src="IMG4.jpg" alt="" className="h-auto w-full md:h-73 md:w-auto mt-6 md:mt-10 mb-6 md:mb-10 object-cover" />
                            <div className="flex flex-col p-5 md:mr-19 md:p-0">
                                <div className="text-black text-2xl font-bold mb-4"> Standard Deluxe</div>
                                <div className="flex flex-wrap mb-7 gap-4 md:gap-7 items-start">
                                    <div className="flex gap-2">
                                        <div className="text-black text-2xl"> <i className="bi bi-truck-front"></i></div>
                                        <div className="text-xl text-gray-600">2 Single Beds</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="text-black text-2xl"> <i className="bi bi-people"></i></div>
                                        <div className="text-xl text-gray-600">6 Guests</div>
                                    </div>

                                </div>
                                <div className="text-gray-600 text-lg font-medium mb-7">Hotale Suites has been honored with the prestigious Five-Star Award by Forbes.</div>
                                <div className="flex flex-wrap justify-between gap-4">
                                    <div className=" flex gap-3">
                                        <Link href="/room-search" className="text-black font-bold text-sm">BOOK NOW</Link>
                                        <div className=" text-black font-bold text-sm"><i className="bi bi-caret-right"></i></div>
                                    </div>
                                    <div className="text-black text-2xl font-light">From $ 75 <span className="text-gray-600 text-lg font-medium">/ night</span></div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            {/* -----rooms 3----- */}
            <div className="flex justify-center bg-white">
                <div className="max-w-300 w-full px-4 sm:px-6">
                    <div className="flex items-center justify-center mt-16 md:mt-36 mb-0 md:ml-20 h-auto min-h-70 w-full md:w-250">
                        <div className="grid grid-cols-1 md:grid-cols-2 border-2 justify-center items-center w-full">
                            <img src="IMG1.jpg" alt="" className="h-auto w-full md:h-73 md:w-auto mt-6 md:mt-10 mb-6 md:mb-10 object-cover" />
                            <div className="flex flex-col p-5 md:mr-19 md:p-0">
                                <div className="text-black text-2xl font-bold mb-4"> The Penthouse</div>
                                <div className="flex flex-wrap mb-7 gap-4 md:gap-7 items-start">
                                    <div className="flex gap-2">
                                        <div className="text-black text-2xl"> <i className="bi bi-truck-front"></i></div>
                                        <div className="text-xl text-gray-600">1 King Bed</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="text-black text-2xl"> <i className="bi bi-people"></i></div>
                                        <div className="text-xl text-gray-600">6 Guests</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="text-black text-2xl"> <i className="bi bi-aspect-ratio"></i></div>
                                        <div className="text-xl text-gray-600">28 Sqm</div>
                                    </div>
                                </div>
                                <div className="text-gray-600 text-lg font-medium mb-7">Hotale Suites has been honored with the prestigious Five-Star Award by Forbes.</div>
                                <div className="flex flex-wrap justify-between gap-4">
                                    <div className=" flex gap-3">
                                        <Link href="/room-search" className="text-black font-bold text-sm">BOOK NOW</Link>
                                        <div className=" text-black font-bold text-sm"><i className="bi bi-caret-right"></i></div>
                                    </div>
                                    <div className="text-black text-2xl font-light">From $ 200 <span className="text-gray-600 text-lg font-medium">/ night</span></div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            {/* -----rooms 4----- */}
            <div className="flex justify-center bg-white">
                <div className="max-w-300 w-full px-4 sm:px-6">
                    <div className="flex items-center justify-center mt-16 md:mt-36 mb-0 md:ml-20 h-auto min-h-70 w-full md:w-250">
                        <div className="grid grid-cols-1 md:grid-cols-2 border-2 justify-center items-center w-full">
                            <img src="IMG6.jpg" alt="" className="h-auto w-full md:h-73 md:w-auto mt-6 md:mt-10 mb-6 md:mb-10 object-cover" />
                            <div className="flex flex-col p-5 md:mr-19 md:p-0">
                                <div className="text-black text-2xl font-bold mb-4"> Grand Suite Room</div>
                                <div className="flex flex-wrap mb-7 gap-4 md:gap-7 items-start">
                                    <div className="flex gap-2">
                                        <div className="text-black text-2xl"> <i className="bi bi-truck-front"></i></div>
                                        <div className="text-xl text-gray-600">1 King Bed</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="text-black text-2xl"> <i className="bi bi-people"></i></div>
                                        <div className="text-xl text-gray-600">4 Guests</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="text-black text-2xl"> <i className="bi bi-aspect-ratio"></i></div>
                                        <div className="text-xl text-gray-600">34 Sqm</div>
                                    </div>
                                </div>
                                <div className="text-gray-600 text-lg font-medium mb-7">Hotale Suites has been honored with the prestigious Five-Star Award by Forbes.</div>
                                <div className="flex flex-wrap justify-between gap-4">
                                    <div className=" flex gap-3">
                                        <Link href="/room-search" className="text-black font-bold text-sm">BOOK NOW</Link>
                                        <div className=" text-black font-bold text-sm"><i className="bi bi-caret-right"></i></div>
                                    </div>
                                    <div className="text-black text-2xl font-light">From $ 80 <span className="text-gray-600 text-lg font-medium">/ night</span></div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            {/* -----rooms 5----- */}
            <div className="flex justify-center bg-white">
                <div className="max-w-300 w-full px-4 sm:px-6">
                    <div className="flex items-center justify-center mt-16 md:mt-36 mb-0 md:ml-20 h-auto min-h-70 w-full md:w-252">
                        <div className="grid grid-cols-1 md:grid-cols-2 border-2 justify-center items-center w-full">
                            <img src="IMG1.jpg" alt="" className="h-auto w-full md:h-73 md:w-auto mt-6 md:mt-10 mb-6 md:mb-10 object-cover" />
                            <div className="flex flex-col p-5 md:mr-19 md:p-0">
                                <div className="text-black text-2xl font-bold mb-4"> Junior Suite Room</div>
                                <div className="flex flex-wrap mb-7 gap-4 md:gap-7 items-start">
                                    <div className="flex gap-2">
                                        <div className="text-black text-2xl"> <i className="bi bi-truck-front"></i></div>
                                        <div className="text-xl text-gray-600">1 Double Bed</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="text-black text-2xl"> <i className="bi bi-people"></i></div>
                                        <div className="text-xl text-gray-600">3 Guests</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="text-black text-2xl"> <i className="bi bi-aspect-ratio"></i></div>
                                        <div className="text-xl text-gray-600"> 29 Sqm</div>
                                    </div>
                                </div>
                                <div className="text-gray-600 text-lg font-medium mb-7">Hotale Suites has been honored with the prestigious Five-Star Award by Forbes.</div>
                                <div className="flex flex-wrap justify-between gap-4">
                                    <div className=" flex gap-3">
                                        <Link href="/room-search" className="text-black font-bold text-sm">BOOK NOW</Link>
                                        <div className=" text-black font-bold text-sm"><i className="bi bi-caret-right"></i></div>
                                    </div>
                                    <div className="text-black text-2xl font-light">From $ 69<span className="text-gray-600 text-lg font-medium">/ night</span></div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            {/* -----rooms 6----- */}
            <div className="flex justify-center bg-white">
                <div className="max-w-300 w-full px-4 sm:px-6">
                    <div className="flex items-center justify-center mt-16 md:mt-36 mb-0 md:ml-20 h-auto min-h-70 w-full md:w-252">
                        <div className="grid grid-cols-1 md:grid-cols-2 border-2 justify-center items-center w-full">
                            <img src="IMG18.jpg" alt="" className="h-auto w-full md:h-73 md:w-auto mt-6 md:mt-10 mb-6 md:mb-10 object-cover" />
                            <div className="flex flex-col p-5 md:mr-19 md:p-0">
                                <div className="text-black text-2xl font-bold mb-4">Standard Room</div>
                                <div className="flex flex-wrap mb-7 gap-4 md:gap-7 items-start">
                                    <div className="flex gap-2">
                                        <div className="text-black text-2xl"> <i className="bi bi-truck-front"></i></div>
                                        <div className="text-xl text-gray-600">1 Double Bed</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="text-black text-2xl"> <i className="bi bi-people"></i></div>
                                        <div className="text-xl text-gray-600">4 Guests </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="text-black text-2xl"> <i className="bi bi-aspect-ratio"></i></div>
                                        <div className="text-xl text-gray-600">40 Sqm</div>
                                    </div>
                                </div>
                                <div className="text-gray-600 text-lg font-medium mb-7">Hotale Suites has been honored with the prestigious Five-Star Award by Forbes.</div>
                                <div className="flex flex-wrap justify-between gap-4">
                                    <div className=" flex gap-3">
                                        <Link href="/room-search" className="text-black font-bold text-sm">BOOK NOW</Link>
                                        <div className=" text-black font-bold text-sm"><i className="bi bi-caret-right"></i></div>
                                    </div>
                                    <div className="text-black text-2xl font-light">From $ 80 <span className="text-gray-600 text-lg font-medium">/ night</span></div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            {/* -----rooms 7----- */}
            <div className="flex justify-center bg-white">
                <div className="max-w-300 w-full px-4 sm:px-6">
                    <div className="flex items-center justify-center mt-16 md:mt-36 mb-0 md:ml-20 h-auto min-h-70 w-full md:w-252">
                        <div className="grid grid-cols-1 md:grid-cols-2 border-2 justify-center items-center w-full">
                            <img src="IMG5.jpg" alt="" className="h-auto w-full md:h-73 md:w-auto mt-6 md:mt-10 mb-6 md:mb-10 object-cover" />
                            <div className="flex flex-col p-5 md:mr-19 md:p-0">
                                <div className="text-black text-2xl font-bold mb-4">Family Special Room</div>
                                <div className="flex flex-wrap mb-7 gap-4 items-start">
                                    <div className="flex gap-2">
                                        <div className="text-black text-2xl"> <i className="bi bi-truck-front"></i></div>
                                        <div className="text-xl text-gray-600">2 Double Beds</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="text-black text-2xl"> <i className="bi bi-people"></i></div>
                                        <div className="text-xl text-gray-600"> 6 Guests</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="text-black text-2xl"> <i className="bi bi-aspect-ratio"></i></div>
                                        <div className="text-xl text-gray-600">33 Sqm</div>
                                    </div>
                                </div>
                                <div className="text-gray-600 text-lg font-medium mb-7">Hotale Suites has been honored with the prestigious Five-Star Award by Forbes.</div>
                                <div className="flex flex-wrap justify-between gap-4">
                                    <div className=" flex gap-3">
                                        <Link href="/room-search" className="text-black font-bold text-sm">BOOK NOW</Link>
                                        <div className=" text-black font-bold text-sm"><i className="bi bi-caret-right"></i></div>
                                    </div>
                                    <div className="text-black text-2xl font-light">From $ 180 <span className="text-gray-600 text-lg font-medium">/ night</span></div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            {/* -----rooms 8----- */}
            <div className="flex justify-center bg-white">
                <div className="max-w-300 w-full px-4 sm:px-6">
                    <div className="flex items-center justify-center mt-16 md:mt-36 mb-0 md:ml-20 h-auto min-h-70 w-full md:w-252">
                        <div className="grid grid-cols-1 md:grid-cols-2 border-2 justify-center items-center w-full">
                            <img src="IMG2.jpg" alt="" className="h-auto w-full md:h-73 md:w-auto mt-6 md:mt-10 mb-6 md:mb-10 object-cover" />
                            <div className="flex flex-col p-5 md:mr-19 md:p-0">
                                <div className="text-black text-2xl font-bold mb-4"> Premium Room</div>
                                <div className="flex flex-wrap mb-7 gap-4 items-start">
                                    <div className="flex gap-2">
                                        <div className="text-black text-2xl"> <i className="bi bi-truck-front"></i></div>
                                        <div className="text-xl text-gray-600">2 Single Beds</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="text-black text-2xl"> <i className="bi bi-people"></i></div>
                                        <div className="text-xl text-gray-600">4 Guests</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="text-black text-2xl"> <i className="bi bi-aspect-ratio"></i></div>
                                        <div className="text-xl text-gray-600">28 Sqm</div>
                                    </div>
                                </div>
                                <div className="text-gray-600 text-lg font-medium mb-7">Hotale Suites has been honored with the prestigious Five-Star Award by Forbes.</div>
                                <div className="flex flex-wrap justify-between gap-4">
                                    <div className=" flex gap-3">
                                        <Link href="/room-search" className="text-black font-bold text-sm">BOOK NOW</Link>
                                        <div className=" text-black font-bold text-sm"><i className="bi bi-caret-right"></i></div>
                                    </div>
                                    <div className="text-black text-2xl font-light">From $ 75 <span className="text-gray-600 text-lg font-medium">/ night</span></div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            {/* -----rooms 9----- */}
            <div className="flex justify-center bg-white">
                <div className="max-w-300 w-full px-4 sm:px-6">
                    <div className="flex items-center justify-center mt-16 md:mt-36 mb-20 md:ml-20 h-auto min-h-70 w-full md:w-250">
                        <div className="grid grid-cols-1 md:grid-cols-2 border-2 justify-center items-center w-full">
                            <img src="IMG13.jpg" alt="" className="h-auto w-full md:h-73 md:w-auto mt-6 md:mt-10 mb-6 md:mb-10 object-cover" />
                            <div className="flex flex-col p-5 md:mr-19 md:p-0">
                                <div className="text-black text-2xl font-bold mb-4"> Deluxe Suite Room</div>
                                <div className="flex flex-wrap mb-7 gap-4 items-start">
                                    <div className="flex gap-2">
                                        <div className="text-black text-2xl"> <i className="bi bi-truck-front"></i></div>
                                        <div className="text-xl text-gray-600">1 King Bed</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="text-black text-2xl"> <i className="bi bi-people"></i></div>
                                        <div className="text-xl text-gray-600">4 Guests</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="text-black text-2xl"> <i className="bi bi-aspect-ratio"></i></div>
                                        <div className="text-xl text-gray-600">36 Sqm</div>
                                    </div>
                                </div>
                                <div className="text-gray-600 text-lg font-medium mb-7">Hotale Suites has been honored with the prestigious Five-Star Award by Forbes.</div>
                                <div className="flex flex-wrap justify-between gap-4">
                                    <div className=" flex gap-3">
                                        <Link href="/room-search" className="text-black font-bold text-sm">BOOK NOW</Link>
                                        <div className=" text-black font-bold text-sm"><i className="bi bi-caret-right"></i></div>
                                    </div>
                                    <div className="text-black text-2xl font-light">From $ 90 <span className="text-gray-600 text-lg font-medium">/ night</span></div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            {/* ------FOOTER--- */}
            <div className="legacy-footer flex justify-center relative">
                <img src="white-bg-4.jpg" alt="" className="absolute h-full w-full z-0" />
                <div className="w-full max-w-300">
                    <div className="grid grid-cols-3 gap-7 mb-14 py-20 items-start relative">
                        <div className="flex flex-col justify-center items-start z-0">
                            <div className="w-30 mb-8"><img src="Logo-hotel2.png" alt="" /></div>
                            <div className="flex gap-4 mb-10 ">
                                <div className="rounded-full px-3 py-2  text-sm bg-black ">
                                    <i className="bi bi-facebook"></i>
                                </div>
                                <div className="rounded-full px-3 py-2  text-sm bg-black ">
                                    <i className="bi bi-linkedin"></i>
                                </div>
                                <div className="rounded-full px-3 py-2  text-sm bg-black ">
                                    <i className="bi bi-twitter-x"></i>
                                </div>
                            </div>
                            <div className="text-lg text-gray-500 max-w-89">Our hotels offer glamour and comfort that expands the imagination and cradles the spirit.</div>
                        </div>

                        <div className=" flex flex-col justify-center items-start z-0">
                            <div className="text-black text-xl mb-5 font-bold">QUICK LINKS</div>

                            <div className="gap-20 mb-4 flex z-0">
                                <div className="text-gray-400 text- lg gap-10">Privacy Policy</div>
                                <div className="text-gray-400 text- lg gap-10">FAQ</div>
                            </div>
                            <div className="gap-36 mb-4 flex">
                                <div className="text-gray-400 text- lg gap-10">Blog</div>
                                <div className="text-gray-400 text- lg gap-10">Contact Us</div>
                            </div>
                            <div className="gap-23 mb-4 flex">
                                <div className="text-gray-400 text- lg gap-10">Reservation</div>
                                <div className="text-gray-400 text- lg gap-10">Room List</div>
                            </div>
                            <div className="gap-34 mb-4 flex">
                                <div className="text-gray-400 text- lg gap-10">Offers</div>
                                <div className="text-gray-400 text- lg gap-10">About Us</div>
                            </div>

                        </div>

                        <div className="flex  flex-col justify-center items-start">
                            <div className="text-black text-xl mb-5 font-bold">NEWSLETTER</div>

                            <div className="relative mb-5 w-100">
                                <input
                                    type="text"
                                    placeholder="Enter Your Email Address"
                                    className="w-full py-3 pl-4 pr-10 border border-gray-300 font-bold bg-gray-200 text-gray-800 rounded-sm outline-none mb-5"
                                />
                                <i className="bi bi-send-fill absolute right-3 top-1/3 -translate-y-1/2 text-amber-800"></i>
                            </div>
                            <div className="w-full mb-8"><img src="Logo6.jpg" alt="" /></div>
                        </div>

                    </div>
                    <div className=" relative">
                        <div className="text-sm text-gray-500  text-center ">Copyright © 2026 Hotale Theme - GoodLayers. <span className="text-amber-700"> Terms & Conditions.</span></div>
                    </div>

                </div>
            </div>


        </div>
    );
}