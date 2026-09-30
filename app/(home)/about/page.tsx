import Link from "next/link";

const Home = () => (
  <div>

    {/* ------HERO----- */}
    <div className="flex justify-center relative w-full min-h-75 sm:min-h-100">
      <img src="/ab1.jpg" alt="About Us" className="absolute inset-0 w-full h-full object-cover z-0" />
      <div className="w-full max-w-300 px-4 sm:px-6 relative z-10">
        <div className="flex flex-col justify-center items-center py-24 sm:py-32 md:py-40"> <div className="flex flex-col items-center">
          <div className="text-4xl sm:text-5xl md:text-6xl text-white font-bold max-w-250 leading-tight md:leading-20 text-center mb-8"> About Us </div>
        </div>
        </div>
      </div>
    </div>

    {/* ----ROOMS----- */}
    <div className="flex justify-center relative w-full">
      <img
        src="/white-bg-7.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover z-0"
      />

      <div className="w-full max-w-300 px-4 sm:px-6 lg:px-0">
        <div className="items-center justify-center flex flex-col py-16 sm:py-20 md:py-26 relative">

          <div className="flex flex-col justify-center items-center z-10 w-full">

            <div className="text-3xl sm:text-4xl text-black font-mono max-w-180 text-center leading-tight sm:leading-10 mb-6 sm:mb-10">
              VISIT OUR FAMOUS FACILITIES
            </div>

            <div className="text-base sm:text-xl text-gray-500 max-w-180 text-center mb-8 sm:mb-10 leading-relaxed">
              A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
            </div>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 z-10 mb-16 sm:mb-20 md:mb-30 w-full">

            <div className="flex flex-col items-start">
              <img
                src="/ab3.jpg"
                alt="Dining room at the hotel's Vézère restaurant"
                className="h-auto w-full mb-3 object-cover"
              />
            </div>

            <div className="flex flex-col items-start max-w-120 justify-center">

              <div className="text-black text-xl sm:text-2xl mb-5 sm:mb-6 font-black leading-tight">
                3 Michelin Stars Restaurant, Vézère
              </div>

              <div className="text-gray-400 text-base sm:text-lg mb-8 md:mb-32 leading-relaxed">
                A brasserie inspired by French cuisine, a fresh and modern place to visit and enjoy dishes always handmade of the best ingredients of the season.
              </div>

              <Link href="/contact" className="inline-flex min-h-11 items-center gap-3 rounded-sm bg-white px-6 py-3 text-base text-black shadow-2xl transition duration-300 ease-in-out hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800 sm:px-8 sm:py-4 sm:text-lg">
                <span>LEARN MORE</span>
                <div>
                  <i aria-hidden="true" className="bi bi-caret-right"></i>
                </div>
              </Link>

            </div>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 z-10 mb-16 sm:mb-20 w-full">

            <div className="flex flex-col items-start max-w-130 justify-center">

              <div className="text-black text-xl sm:text-2xl mb-5 sm:mb-6 font-black leading-tight">
                The Penthouse Bar, an iconic American bar
              </div>

              <div className="text-gray-400 text-base sm:text-lg mb-8 md:mb-32 leading-relaxed">
                The cozy bar area accompanying the Penthouse is a classic cocktail bar at it’s finest. Our experienced bartenders are here to offer you both the classic beverages and the newest global trends.
              </div>

              <Link href="/contact" className="inline-flex min-h-11 items-center gap-3 rounded-sm bg-white px-6 py-3 text-base text-black shadow-2xl transition duration-300 ease-in-out hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800 sm:px-8 sm:py-4 sm:text-lg">
                <span>LEARN MORE</span>
                <div>
                  <i aria-hidden="true" className="bi bi-caret-right"></i>
                </div>
              </Link>

            </div>

            <div className="flex flex-col items-start">
              <img
                src="/ap2.jpg"
                alt="Interior of the Penthouse Bar"
                className="h-auto w-full mb-3 object-cover"
              />
            </div>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 z-10 mb-16 sm:mb-20 md:mb-30 w-full">

            <div className="flex flex-col items-start">
              <img
                src="/ab4.jpg"
                alt="Hotel spa and wellness facilities"
                className="h-auto w-full mb-3 object-cover"
              />
            </div>

            <div className="flex flex-col items-start max-w-120 justify-center">

              <div className="text-black text-xl sm:text-2xl mb-5 sm:mb-6 font-black leading-tight">
                The Spa. Refresh Yourself
              </div>

              <div className="text-gray-400 text-base sm:text-lg mb-8 md:mb-32 leading-relaxed">
                Whether you are in search of a well-appointed gym or a pampering moment on the massage table and inside the warm saunas, you can always find a place for yourself at our spa.
              </div>

              <Link href="/contact" className="inline-flex min-h-11 items-center gap-3 rounded-sm bg-white px-6 py-3 text-base text-black shadow-2xl transition duration-300 ease-in-out hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800 sm:px-8 sm:py-4 sm:text-lg">
                <span>LEARN MORE</span>
                <div>
                  <i aria-hidden="true" className="bi bi-caret-right"></i>
                </div>
              </Link>

            </div>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 z-10 mb-16 sm:mb-20 md:mb-30 px-0 sm:px-5 w-full">

            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 md:gap-30 items-center justify-center">

              <div className="font-mono text-5xl sm:text-6xl md:text-7xl text-black text-center">
                5 <span className="text-lg sm:text-xl">stars</span>
              </div>

              <div className="font-mono text-5xl sm:text-6xl md:text-7xl text-black text-center">
                25 <span className="text-lg sm:text-xl">rooms</span>
              </div>

            </div>

            <div className="flex flex-col items-start max-w-130 justify-center">

              <div className="text-black text-2xl sm:text-3xl md:text-4xl leading-tight sm:leading-12 mb-6 font-mono">
                Our hotel is located in the heart of the New Forest, offering a five-star lifestyle surrounded by nature.
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>



    {/*----- BOOK NOW----- */}
    <div className="flex justify-center relative min-h-75 sm:min-h-100">
      <img src="/IMG16.jpg" alt="" className="w-full h-full absolute inset-0 object-cover z-0" />
      <div className="w-full max-w-300 px-4 sm:px-6">
        <div className="flex flex-col justify-center items-center py-24 sm:py-32 md:py-40 relative">
          <div className="flex flex-col items-center z-0">
            <div className="text-3xl sm:text-5xl md:text-6xl text-white font-bold max-w-250 leading-tight md:leading-20 text-center mb-8">Choose from a wide range of luxury rooms.</div>


            <Link href="/room-search" className="inline-flex min-h-11 items-center bg-white px-7 py-4 text-sm text-black transition duration-300 ease-in-out hover:bg-amber-700 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">BOOK NOW</Link>




          </div>





        </div>
      </div>
    </div>



    {/* -----footer1----- */}
    <div className="flex bg-white justify-center min-h-75 sm:min-h-100">
      <div className="max-w-300 w-full px-4 sm:px-6">

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-3 py-10 mt-10 md:mt-20 mb-10 items-center">

          <div className="w-full flex justify-center">
            <img
              src="/logo1.png"
              alt=""
              className="max-w-full h-auto"
            />
          </div>

          <div className="w-full flex justify-center">
            <img
              src="/logo2.png"
              alt=""
              className="max-w-full h-auto"
            />
          </div>

          <div className="w-full flex justify-center">
            <img
              src="/logo3.png"
              alt=""
              className="max-w-full h-auto"
            />
          </div>

          <div className="w-full flex justify-center">
            <img
              src="/logo4.png"
              alt=""
              className="max-w-full h-auto"
            />
          </div>

          <div className="w-full flex justify-center">
            <img
              src="/logo5.png"
              alt=""
              className="max-w-full h-auto"
            />
          </div>

          <div className="w-full flex justify-center">
            <img
              src="/logo6.png"
              alt=""
              className="max-w-full h-auto"
            />
          </div>

        </div>

      </div>
    </div>

  </div>
);

export default Home;

