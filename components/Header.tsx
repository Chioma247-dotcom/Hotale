"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  ["HOME", "/"],
  ["PAGE", "/about"],
  ["ROOMS", "/room-grid-style-1"],
  ["RESERVATION", "/room-search"],
  ["BLOG", "/blog-columns"],
  ["CONTACT", "/contact"],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="flex justify-center border-b-2 border-gray-200">
        <div className="w-full max-w-300 px-4 sm:px-6">
          <div className="flex flex-col gap-3 py-4 text-sm sm:flex-row sm:items-center sm:justify-between sm:py-5">
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
              <a className="font-light text-gray-600" href="mailto:info@hotale.co">
                info@hotale.co
              </a>
              <a className="font-light text-amber-700" href="tel:+13253306100">
                +1-325-330-6100
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs sm:gap-4 sm:text-sm">
              <div className="flex items-center gap-3 text-gray-500 sm:gap-4" aria-label="Social media">
                <a href="#facebook" aria-label="Facebook"><i className="bi bi-facebook" /></a>
                <a href="#pinterest" aria-label="Pinterest"><i className="bi bi-p-circle" /></a>
                <a href="#twitter" aria-label="Twitter"><i className="bi bi-twitter-x" /></a>
                <a href="#instagram" aria-label="Instagram"><i className="bi bi-instagram" /></a>
              </div>
              <span className="whitespace-nowrap font-bold text-gray-500">Login&nbsp; | &nbsp;Sign Up</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center border-b-2 border-gray-200">
        <div className="w-full max-w-full px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 sm:px-6 sm:py-5 lg:flex-row lg:flex-nowrap lg:gap-8">
            <Link href="/" className="shrink-0" onClick={() => setMenuOpen(false)}>
              <img src="/logo-hotel2.png" alt="Hotale" className="h-auto w-24 sm:w-30" />
            </Link>

            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center border border-gray-300 text-xl text-gray-700 sm:hidden"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="site-navigation"
              onClick={() => setMenuOpen((isOpen) => !isOpen)}
            >
              <i className={menuOpen ? "bi bi-x-lg" : "bi bi-list"} />
            </button>

            <div
              id="site-navigation"
              className={`${menuOpen ? "flex" : "hidden"} w-full flex-col gap-5 border-t border-gray-200 pt-4 sm:flex sm:w-auto sm:flex-row sm:items-center sm:gap-8 sm:border-0 sm:pt-0 lg:flex-row lg:flex-nowrap lg:items-center lg:gap-8 lg:whitespace-nowrap lg:border-0 lg:pt-0`}
            >
              <nav aria-label="Main navigation" className="flex flex-col gap-1 text-sm font-bold text-gray-500 sm:flex-row sm:gap-8 lg:flex-row lg:flex-nowrap lg:items-center lg:gap-6 lg:whitespace-nowrap">
                {navigation.map(([label, href]) => (
                  <Link key={href} href={href} onClick={() => setMenuOpen(false)} className="py-2 hover:text-amber-700 sm:py-0 lg:inline-flex lg:min-h-11 lg:items-center lg:whitespace-nowrap">
                    {label}
                  </Link>
                ))}
              </nav>
              <Link href="/room-search" onClick={() => setMenuOpen(false)} className="inline-flex min-h-11 w-full items-center justify-center border-2 border-black px-5 py-2 text-sm text-gray-500 transition hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2 sm:w-fit">
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}