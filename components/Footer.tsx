import Link from "next/link";

const footerLogos = ["logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png", "logo6.png"];

export default function Footer() {
  return (
    <footer className="relative flex justify-center overflow-hidden">
      <img src="/white-bg-4.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="relative w-full max-w-300 px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="mb-10 grid gap-10 sm:grid-cols-2 lg:mb-14 lg:grid-cols-3 lg:gap-7">
          <div className="flex flex-col items-start">
            <img src="/logo-hotel2.png" alt="Hotale" className="mb-6 w-30" />
            <div className="mb-8 flex gap-3 text-white">
              <a href="#facebook" aria-label="Facebook" className="rounded-full bg-black px-3 py-2 text-sm transition-colors duration-300 hover:text-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"><i aria-hidden="true" className="bi bi-facebook" /></a>
              <a href="#linkedin" aria-label="LinkedIn" className="rounded-full bg-black px-3 py-2 text-sm transition-colors duration-300 hover:text-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"><i aria-hidden="true" className="bi bi-linkedin" /></a>
              <a href="#twitter" aria-label="Twitter" className="rounded-full bg-black px-3 py-2 text-sm transition-colors duration-300 hover:text-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"><i aria-hidden="true" className="bi bi-twitter-x" /></a>
            </div>
            <p className="max-w-full text-base text-gray-500 sm:max-w-89 sm:text-lg">Our hotels offer glamour and comfort that expands the imagination and cradles the spirit.</p>
          </div>

          <div>
            <h2 className="mb-5 text-xl font-bold text-black">QUICK LINKS</h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-gray-400">
              <span>Privacy Policy</span>
              <span>FAQ</span>
              <Link className="transition-colors duration-300 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700" href="/blog-columns">Blog</Link>
              <Link className="transition-colors duration-300 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700" href="/contact">Contact Us</Link>
              <Link className="transition-colors duration-300 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700" href="/room-search">Reservation</Link>
              <Link className="transition-colors duration-300 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700" href="/room-grid-style-1">Room List</Link>
              <span>Offers</span>
              <Link className="transition-colors duration-300 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700" href="/about">About Us</Link>
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="mb-5 text-xl font-bold text-black">NEWSLETTER</h2>
            <div className="relative mb-5 w-full max-w-100">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input id="footer-email" name="email" type="email" autoComplete="email" placeholder="Enter Your Email Address" className="w-full rounded-sm border border-gray-300 bg-gray-200 py-3 pl-4 pr-10 font-bold text-gray-800 outline-none" />
              <i aria-hidden="true" className="bi bi-send-fill pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-amber-800" />
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {footerLogos.map((logo) => <img key={logo} src={`/${logo}`} alt="" className="h-auto max-w-full min-w-0 object-contain" />)}
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500">Copyright © 2026 Hotale Theme - GoodLayers. <span className="text-amber-700">Terms &amp; Conditions.</span></p>
      </div>
    </footer>
  );
}