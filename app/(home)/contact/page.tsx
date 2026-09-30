export default function Home() {
  return (
    <div className="">

      {/* ------HERO----- */}
      <div className="flex  justify-center relative w-full px-4 sm:px-6 md:px-8">
        <img src="/IMG16.jpg" alt="" className="w-full h-full absolute z-0" />
        <div className="w-full max-w-300 mx-auto">
          <div className="flex flex-col justify-center items-center py-24 sm:py-32 md:py-40 relative">
            <div className="flex flex-col items-center z-0">
              <div className="text-4xl sm:text-5xl md:text-6xl text-white font-bold max-w-250 leading-tight md:leading-20 text-center mb-8">CONTACT Us</div>
              <div className="text-white text-lg sm:text-xl md:text-2xl font-mono">Get in Touch</div>



            </div>





          </div>
        </div>
      </div>

      {/* ------contact------ */}
      <div className="flex justify-center bg-black w-full px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-300 mx-auto">
          <div className="items-center justify-center flex flex-col py-16 sm:py-20 md:py-26 relative px-4 sm:px-0">


            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 z-0 mb-20 w-full">
              <div className="flex flex-col  items-center  shadow-sm rounded-2xl   ">
                <div className="bg-white rounded-full px-6 py-5  text-black text-3xl mb-6"> <i className="bi bi-telephone-fill"></i></div>
                <div className="text-lg text-white font-bold mb-2">Phone</div>
                <div className="w-10 h-2 bg-white  mt-4 mb-5"></div>
                <div className="text-white text-lg text-center mb-6">A wonderful serenity has taken possession of my entire soul, like these.</div>
                <div className="text-white text-lg inline-block border-b border-white pb-0">+1-2345-2345</div>
              </div>
              <div className="flex flex-col  items-center  shadow-sm rounded-2xl   ">
                <div className="bg-white rounded-full px-6 py-5  text-black text-3xl mb-6"> <i className="bi bi-envelope"></i></div>
                <div className="text-lg text-white font-bold mb-2">Email</div>
                <div className="w-10 h-2 bg-white  mt-4 mb-5"></div>
                <div className="text-white text-lg text-center mb-6">A wonderful serenity has taken possession of my entire soul, like these.</div>
                <div className="max-w-full wrap-break-word text-center text-white text-lg inline-block border-b border-white pb-0">Contact@goodlayersthemes.com</div>
              </div>
              <div className="flex flex-col  items-center  shadow-sm rounded-2xl   ">
                <div className="bg-white rounded-full px-6 py-5  text-black text-3xl mb-6"> <i className="bi bi-send-fill"></i></div>
                <div className="text-lg text-white font-bold mb-2">Location</div>
                <div className="w-10 h-2 bg-white  mt-4 mb-5"></div>
                <div className="text-white text-lg text-center mb-6">4 apt. Flawing Street. The Grand Avenue.
                  Liverpool, UK 33342</div>
                <div className="text-white text-lg inline-block border-b border-white pb-0">View On Google Map</div>
              </div>




            </div>

          </div>
        </div>
      </div>
      {/* ----your info--- */}
      <div className="flex justify-center bg-white">
        <div className="max-w-300 w-full px-4 sm:px-6">
          <div className="flex flex-col items-center justify-center py-10">
            <div className="text-center text-3xl sm:text-4xl mb-4">Leave us your info</div>
            <div className="text-center text-gray-600 text-lg mb-12 sm:mb-20">and we will get back to you.</div>


            <div className="w-full max-w-205 text-gray-800">
              <div className="flex flex-col sm:flex-row gap-5 mb-5">
                <label htmlFor="contact-name" className="sr-only">Full name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Full Name *"
                  autoComplete="name"
                  required
                  className="w-full sm:w-1/2 border border-gray-100 outline-none bg-gray-200 px-4 py-2"
                />

                <label htmlFor="contact-email" className="sr-only">Email address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Email *"
                  autoComplete="email"
                  required
                  className="w-full sm:w-1/2 border border-gray-100 bg-gray-200 px-4 outline-none py-2"
                />
              </div>

              <label htmlFor="contact-subject" className="sr-only">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="Subject *"
                required
                className="w-full border border-gray-100 outline-none bg-gray-200 px-4 py-3 mb-5"
              />

              <label htmlFor="contact-message" className="sr-only">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Message *"
                required
                className="w-full h-40 border border-gray-100  bg-gray-200 outline-none p-4 mb-5 resize-none"
              ></textarea>

              <button type="submit" className="inline-flex min-h-11 w-full items-center justify-center rounded-sm bg-amber-800 px-6 py-3 text-white outline-none transition hover:bg-black focus:ring-2 focus:ring-amber-700 focus:ring-offset-2 sm:w-auto">
                SUBMIT NOW
              </button>
            </div>

          </div>
        </div>
      </div>


      {/* ----map----- */}
      <div className="flex justify-center bg-white">
        <div className="w-full max-w-8xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAP_LINK"
            className="w-full h-80 sm:h-100 md:h-125 rounded-lg mb-20"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="flex flex-wrap justify-center items-center text-black text-xl gap-6 sm:gap-10 mb-10 px-4">
            <i className="bi bi-envelope-check-fill"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-skype"></i>
            <i className="bi bi-twitter"></i>

          </div>


        </div>
      </div>
      {/* ------FOOTER--- */}
      <div className="legacy-footer flex justify-center relative">
        <img src="/white-bg-4.jpg" alt="" className="absolute h-full w-full z-0" />
        <div className="w-full max-w-300">
          <div className="grid grid-cols-3 gap-7 mb-14 py-20 items-start relative">
            <div className="flex flex-col justify-center items-start z-0">
              <div className="w-30 mb-8"><img src="/Logo-hotel2.png" alt="Hotale" /></div>
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
              <div className="w-full mb-8"><img src="/Logo6.jpg" alt="Hotel partner logos" /></div>
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
