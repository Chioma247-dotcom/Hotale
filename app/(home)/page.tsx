import Link from "next/link";
import BookingForm from "../../components/BookingForm";

export default function Home() {
  return (
    <div className="">







      {/* ------HERO----- */}
      <div className="flex  justify-center relative">
        <img src="IMG16.jpg" alt="" className="w-full h-full absolute z-0" />
        <div className="w-full max-w-300 px-4 sm:px-6">
          <div className="flex flex-col justify-center items-center py-24 sm:py-32 md:py-40 relative">
            <div className="flex flex-col items-center z-0">
              <div className="text-4xl sm:text-5xl md:text-6xl text-white font-bold max-w-250 leading-tight md:leading-20 text-center mb-8">Hotel for the elite passionate  about luxury & comfort</div>

              <div className="text-white text-lg max-w-130 text-center mb-30">Hotale has a series of lavish and comfortable hotels and residencesin Asia, Europe, and America. <span className="text-amber-700"> Check Availability.</span></div>
            </div>

            <BookingForm variant="hero" />



          </div>
        </div>
      </div>


      {/* ----ROOMS----- */}
      <div className="flex  justify-center relative">
        <img src="white-bg-7.jpg" alt="" className="absolute h-full w-full z-0" />
        <div className="w-full max-w-300 px-4 sm:px-6">
          <div className="items-center justify-center flex flex-col py-16 sm:py-20 md:py-26 relative">

            <div className="flex flex-col justify-center items-center z-0">
              <div className="text-2xl sm:text-3xl text-black font-bold max-w-180 text-center leading-tight sm:leading-10 mb-10">STEPS INTO A ROOM THAT BLURS THE LINES BETWEEN DREAMS AND REALITY</div>
              <div className="bg-amber-600 text-amber-600 text-sm mb-10 px-4"> text</div>
              <div className="text-base sm:text-lg text-gray-500 max-w-180 text-center mb-12 sm:mb-20">Step into a room that blurs the lines between dreams and reality. A wonderland of color, glamour, and comfort that expands the imagination and cradles the spirit.</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 z-0 mb-20 w-full">
              <div className="flex flex-col  items-start  shadow-sm rounded-2xl   ">
                <img src="IMG5.jpg" alt="" className="h-auto w-full md:h-70 md:w-100 mb-3 object-cover" />
                <div className="flex flex-col px-5">
                  <div className="text-lg text-black font-bold mb-5">FAMILY SPECIAL ROOM</div>
                  <div className="flex flex-wrap gap-4 sm:gap-8">
                    <div className="flex gap-2 items-start mb-8">
                      <div className="text-2xl  text-black"><i className="bi bi-truck-front"></i></div>
                      <div className="text-lg text-gray-400">1 King Bed</div>
                    </div>
                    <div className="flex gap-2 items-start">
                      <div className="text-2xl  text-black"><i className="bi bi-people"></i></div>
                      <div className="text-lg text-gray-400">6 Guests</div>
                    </div>

                  </div>
                  <div className="flex flex-wrap gap-6 sm:gap-23 items-center mb-16">
                    <div className="text-gray-500 text-xl mb-3">$180 / <span className="text-sm">NIGHT</span></div>
                    <Link href="/room-search" className="text-white bg-amber-800 py-2 px-5 text-sm rounded-sm">BOOK NOW</Link>

                  </div>

                </div>
              </div>

              <div className="flex flex-col  items-start  shadow-sm rounded-2xl   ">
                <img src="IMG2.jpg" alt="" className="h-auto w-full md:h-70 md:w-100 mb-3 object-cover" />
                <div className="flex flex-col px-5">
                  <div className="text-lg text-black font-bold mb-5">PREMIUM ROOM</div>
                  <div className="flex flex-wrap gap-4 sm:gap-8">
                    <div className="flex gap-2 items-start mb-8">
                      <div className="text-2xl  text-black"><i className="bi bi-truck-front"></i></div>
                      <div className="text-lg text-gray-400">2 Single Beds</div>
                    </div>
                    <div className="flex gap-2 items-start">
                      <div className="text-2xl  text-black"><i className="bi bi-people"></i></div>
                      <div className="text-lg text-gray-400">4 Guests</div>
                    </div>

                  </div>
                  <div className="flex flex-wrap gap-6 sm:gap-23 items-center mb-16">
                    <div className="text-gray-500 text-xl mb-3">$75/ <span className="text-sm">NIGHT</span></div>
                    <Link href="/room-search" className="text-white bg-amber-800 py-2 px-5 text-sm rounded-sm">BOOK NOW</Link>

                  </div>

                </div>
              </div>
              <div className="flex flex-col  items-start  shadow-sm rounded-2xl   ">
                <img src="IMG1.jpg" alt="" className="h-auto w-full md:h-70 md:w-100 mb-3 object-cover" />
                <div className="flex flex-col px-5">
                  <div className="text-lg text-black font-bold mb-5">DELUXE SUITE ROOM</div>
                  <div className="flex flex-wrap gap-4 sm:gap-8">
                    <div className="flex gap-2 items-start mb-8">
                      <div className="text-2xl  text-black"><i className="bi bi-truck-front"></i></div>
                      <div className="text-lg text-gray-400">1 King Bed</div>
                    </div>
                    <div className="flex gap-2 items-start">
                      <div className="text-2xl  text-black"><i className="bi bi-people"></i></div>
                      <div className="text-lg text-gray-400">4 Guests</div>
                    </div>

                  </div>
                  <div className="flex flex-wrap gap-6 sm:gap-23 items-center mb-16">
                    <div className="text-gray-500 text-xl mb-3">$150 / <span className="text-sm">NIGHT</span></div>
                    <Link href="/room-search" className="text-white bg-amber-800 py-2 px-5 text-sm rounded-sm">BOOK NOW</Link>

                  </div>

                </div>
              </div>


            </div>
            <div className="border-2 border-amber-700 py-2 rounded-lg px-6  gap-3 flex">
              <div className="text-amber-700 text-lg"><i className="bi bi-star"></i></div>
              <div className="text-amber-700 text-lg">VIEW ALL ROOMS</div>
            </div>

          </div>
        </div>
      </div>
      {/* -------SERVICEES----- */}
      <div className="flex justify-center relative">
        <img src="white-bg2.jpg" alt="" className="absolute h-full w-full z-0" />
        <div className="w-full max-w-300 px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 py-5 justify-center items-start gap-10 mt-12 md:mt-20 mb-20 relative">
            <div className="flex flex-col items-start mt-10 z-0">
              <div className="text-2xl text-black font-bold max-w-123 mb-8"> OFFERING A SERIES OF COMFORTABLE AND LAVISH HOTELS & RESIDENCES</div>
              <div className="bg-amber-600 text-amber-600 text-sm mb-8 px-4"> text</div>
              <div className="text-gray-500 text-lg font-light mb-8 max-w-122">All our hotels are fabulous, they are destinations unto themselves. We have crossed the globe to bring you only the best.</div>
              <div className="text-white  bg-amber-800 py-4 px-8 text-sm rounded-sm"> LEARN MORE </div>

            </div>
            <div className=" z-0">
              <img src="IMG19.jpg" alt="" className="h-auto w-full md:h-120 md:w-auto rounded-2xl object-cover" />
            </div>

          </div>
        </div>
      </div>
      {/* ----- SERVICES 2------ */}
      <div className="flex justify-center relative">
        <img src="white-bg-6.jpg" alt="" className="absolute h-full w-full z-0" />
        <div className="w-full max-w-300 px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 py-5 justify-center items-start gap-12 md:gap-20 mt-12 md:mt-20 mb-30 relative">
            <div className=" z-0">
              <img src="IMG13.jpg" alt="" className="relative h-auto w-full rounded-2xl md:absolute md:h-110 md:w-auto" />
              <img src="play.png" alt="" className="absolute bottom-8 left-1/2 w-16 -translate-x-1/2 md:bottom-28 md:left-60 md:w-22 md:translate-x-0" />
            </div>

            <div className="flex flex-col items-start mt-10 z-0">
              <div className="text-2xl text-black font-bold max-w-123 mb-8">GLAMOUR & COMFORT THAT EXPANDS THE IMAGINATION</div>
              <div className="bg-amber-600 text-amber-600 text-sm mb-8 px-4"> text</div>
              <div className="text-gray-500 text-lg font-light mb-8 max-w-122">All our hotels are fabulous, they are destinations unto themselves. We have crossed the globe to bring you only the best.</div>
              <div className="text-white  bg-amber-800 py-4 px-8 text-sm rounded-sm"> LEARN MORE </div>

            </div>


          </div>
        </div>
      </div>

      {/* -------SEEK----- */}
      <div className="bg-gray-200 flex justify-center">
        <div className="w-full max-w-300 px-4 sm:px-6">
          <div className="flex flex-col justify-center items-center py-10 ">
            <div className="text-black font-bold text-2xl mt-10 mb-8">SEEK THE EXTRAORDINARY</div>
            <div className="bg-amber-600 text-amber-600 text-sm mb-10 px-4"> text</div>
            <div className="">
              <img src="IMG14.jpg" alt="" className="h-auto w-full max-w-220 object-cover" />
            </div>
          </div>
        </div>
      </div>
      {/* ------SEEK2------- */}
      <div className=" flex justify-center relative">
        <img src="white-bg-4.jpg" alt="" className="absolute h-full w-full z-0" />
        <div className="w-full max-w-300 px-4 sm:px-6">
          <div className="flex flex-col justify-center items-center py-10 relative ">
            <div className="text-black font-bold text-2xl mt-10 mb-8  max-w-180 text-center">A UNIQUE UNIVERSE, FROM UNMATCHED OCEAN VIEWSTO CULINARY EXPERINCES</div>
            <div className="bg-amber-600 text-amber-600 text-sm mb-10 px-4"> text</div>
            <div className="text-gray-400 text-lg font-light max-w-150 text-center mb-16">Our luxury rooms and suites combine elegant design with the simple beauty of a tropical hideout.</div>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-12 md:gap-26 z-0 w-full">
              <div className="flex flex-col items-center justify-center">
                <div className="mt-15 mb-8">
                  <img src="icon2.png" alt="" className=" w-10" /></div>
                <div className="text-black text-xl font-mono mb-5">ROOMS & SUITES</div>
                <div className="text-gray-400 text-lg font-light max-w-80 text-center">All our hotels are fabulous, they are destinations unto themselves.</div>

              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="mt-15 mb-8">
                  <img src="icon3.png" alt="" className=" w-15" /></div>
                <div className="text-black text-xl font-mono mb-5">EVENTS & EXHIBITIONS</div>
                <div className="text-gray-400 text-lg font-light max-w-80 text-center">All our hotels are fabulous, they are destinations unto themselves.</div>

              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="mt-15 mb-8">
                  <img src="icon5.png" alt="" className=" w-15" /></div>
                <div className="text-black text-xl font-mono mb-5">ROOMS & SUITES</div>
                <div className="text-gray-400 text-lg font-light max-w-80 text-center">All our hotels are fabulous, they are destinations unto themselves.</div>

              </div>


            </div>
          </div>
        </div>
      </div>
      {/*------- RESERVATION------- */}
      <div className="relative flex justify-center">
        <img src="IMG7.jpg" alt="" className="absolute h-full w-full z-0" />
        <div className="w-full max-w-300 px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 py-16 md:py-30 gap-10 relative">
            <div className="flex flex-col justify-center items-start py-10 z-0">
              <div className="text-white font-bold text-xl mb-5">OFFERING A SERIES OF COMFORTABLE AND LAVISH HOYELS & RESIDENCES</div>
              <div className="bg-amber-600 text-amber-600 text-sm mb-10 px-4"> text</div>
              <div className="flex gap-3">
                <div className="text-white text-lg"><i className="bi bi-geo-alt"></i></div>
                <div className="text-lg text-white max-w-55 border-b-2 pb-5">1440 Ocean Drive, Miami
                  Beach, Florida 33139.</div>
              </div>
              <div className="flex gap-3">
                <div className="text-white text-lg"><i className="bi bi-telephone"></i></div>
                <div className="text-lg text-white max-w-55 border-b-2 pb-5">+1-325-330-6100
                  +1-325-330-6120</div>
              </div>
              <div className="flex gap-3">
                <div className="text-white text-lg"><i className="bi bi-envelope"></i></div>
                <div className="text-lg text-white max-w-55 border-b-2 pb-5">info@hotale.co
                  sales@hotale.co</div>
              </div>
            </div>
            <div className="flex h-auto min-h-160 flex-col items-center justify-center rounded-lg bg-white p-6 sm:p-10">
              <div className="mb-10 text-center text-2xl font-bold text-black sm:text-3xl">Book a reservation</div>
              <div className="w-full max-w-120">
                <BookingForm variant="card" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------  RECOMMENDATION------ */}
      <div className=" flex justify-center relative">
        <img src="white-bg-4.jpg" alt="" className="absolute h-full w-full z-0" />
        <div className="w-full max-w-300 px-4 sm:px-6">
          <div className="flex flex-col justify-center items-center py-10 relative ">
            <div className="text-black font-bold text-2xl mt-10 mb-8  max-w-180 text-center">WHAT OUR CLIENTS ARE SAYING</div>
            <div className="bg-amber-600 text-amber-600 text-sm mb-10 px-4"> text</div>

            <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-10 z-0 w-full">
              <div className="flex flex-col items-center w-full max-w-100 h-110 shadow-2xl bg-gray-100 justify-center p-5">
                <div className="mt-15 mb-8">
                  <img src="IMG9.jpg" alt="" className=" w-20 rounded-full" /></div>
                <div className="text-black text-sm font-bold mb-5">CYNTHIA HILL</div>
                <div className="text-gray-400 text-lg font-light max-w-80 text-center mb-5">A very pleseant stay!The hospitality and services provided by each staff of the hotel was excellent</div>
                <div className="flex gap-2">
                  <div className="text-amber-400 text-sm"> <i className="bi bi-star-fill"></i></div>
                  <div className="text-amber-400 text-sm"> <i className="bi bi-star-fill"></i></div>
                  <div className="text-amber-400 text-sm"> <i className="bi bi-star-fill"></i></div>
                  <div className="text-amber-400 text-sm"> <i className="bi bi-star-fill"></i></div>
                  <div className="text-amber-400 text-sm"> <i className="bi bi-star-fill"></i></div>
                </div>
              </div>
              <div className="flex flex-col items-center w-full max-w-100 h-110 shadow-2xl bg-gray-100 justify-center p-5">
                <div className="mt-15 mb-8">
                  <img src="IMG12.jpg" alt="" className=" w-20 rounded-full" /></div>
                <div className="text-black text-sm font-bold mb-5">MICHEAL SMITH</div>
                <div className="text-gray-400 text-lg font-light max-w-80 text-center mb-5">A very pleseant stay!The hospitality and services provided by each staff of the hotel was excellent</div>
                <div className="flex gap-2">
                  <div className="text-amber-400 text-sm"> <i className="bi bi-star-fill"></i></div>
                  <div className="text-amber-400 text-sm"> <i className="bi bi-star-fill"></i></div>
                  <div className="text-amber-400 text-sm"> <i className="bi bi-star-fill"></i></div>
                  <div className="text-amber-400 text-sm"> <i className="bi bi-star-fill"></i></div>
                  <div className="text-amber-400 text-sm"> <i className="bi bi-star-fill"></i></div>
                </div>
              </div>
              <div className="flex flex-col items-center w-full max-w-100 h-110 shadow-2xl bg-gray-100 justify-center p-5">
                <div className="mt-15 mb-8">
                  <img src="IMG8.jpg" alt="" className=" w-20 rounded-full" /></div>
                <div className="text-black text-sm font-bold mb-5">DONNA WILSON</div>
                <div className="text-gray-400 text-lg font-light max-w-80 text-center mb-5">A very pleseant stay!The hospitality and services provided by each staff of the hotel was excellent</div>
                <div className="flex gap-2">
                  <div className="text-amber-400 text-sm"> <i className="bi bi-star-fill"></i></div>
                  <div className="text-amber-400 text-sm"> <i className="bi bi-star-fill"></i></div>
                  <div className="text-amber-400 text-sm"> <i className="bi bi-star-fill"></i></div>
                  <div className="text-amber-400 text-sm"> <i className="bi bi-star-fill"></i></div>
                  <div className="text-amber-400 text-sm"> <i className="bi bi-star-fill"></i></div>
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
