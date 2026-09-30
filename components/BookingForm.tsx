"use client";

import Link from "next/link";
import { useState } from "react";

type BookingFormProps = {
    variant?: "hero" | "card" | "sidebar";
};

const fieldClass =
    "booking-control min-w-0 w-full appearance-none rounded-sm border border-gray-300 bg-white px-4 pr-11 text-left text-sm text-gray-800 outline-none transition focus:border-amber-700 focus:ring-2 focus:ring-amber-700/30";

export default function BookingForm({ variant = "card" }: BookingFormProps) {
    const [checkIn, setCheckIn] = useState("2026-06-22");
    const [checkOut, setCheckOut] = useState("2026-06-23");
    const [room, setRoom] = useState("1");
    const [guests, setGuests] = useState("2");
    const [time, setTime] = useState("15:00");

    const isHero = variant === "hero";
    const isSidebar = variant === "sidebar";
    const labelClass = isHero ? "text-white" : "text-gray-500";
    const inputClass = isHero
        ? "booking-control min-w-0 w-full appearance-none rounded-sm border-0 bg-white px-4 pr-11 text-left text-sm text-gray-800 outline-none transition focus:ring-2 focus:ring-amber-700/40"
        : fieldClass;
    const formClass = isHero
        ? "grid w-full min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:gap-5 lg:grid-cols-6"
        : "grid w-full min-w-0 grid-cols-1 gap-3 sm:gap-4 md:gap-5";
    const buttonWidthClass = isHero ? "w-full sm:w-auto" : isSidebar ? "w-full" : "w-full sm:w-auto";

    return (
        <form
            className={formClass}
            onSubmit={(event) => event.preventDefault()}
        >
            <label className={`flex min-w-0 w-full flex-col gap-1 text-left text-sm font-bold ${labelClass}`}>
                <span>Check In</span>
                <span className="relative block w-full">
                    <input
                        aria-label="Check in date"
                        type="date"
                        value={checkIn}
                        min="2026-01-01"
                        onChange={(event) => setCheckIn(event.target.value)}
                        className={`${inputClass} h-12`}
                    />
                    <i aria-hidden="true" className="bi bi-calendar3 pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-600" />
                </span>
            </label>
            <label className={`flex min-w-0 w-full flex-col gap-1 text-left text-sm font-bold ${labelClass}`}>
                <span>Check Out</span>
                <span className="relative block w-full">
                    <input
                        aria-label="Check out date"
                        type="date"
                        value={checkOut}
                        min={checkIn}
                        onChange={(event) => setCheckOut(event.target.value)}
                        className={`${inputClass} h-12`}
                    />
                    <i aria-hidden="true" className="bi bi-calendar3 pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-600" />
                </span>
            </label>
            <label className={`flex min-w-0 w-full flex-col gap-1 text-left text-sm font-bold ${labelClass}`}>
                <span>Room</span>
                <span className="relative block w-full">
                    <select aria-label="Number of rooms" value={room} onChange={(event) => setRoom(event.target.value)} className={`${inputClass} h-12`}>
                        <option value="1">1 room</option>
                        <option value="2">2 rooms</option>
                        <option value="3">3 rooms</option>
                    </select>
                    <i aria-hidden="true" className="bi bi-chevron-down pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-600" />
                </span>
            </label>
            <label className={`flex min-w-0 w-full flex-col gap-1 text-left text-sm font-bold ${labelClass}`}>
                <span>Guests</span>
                <span className="relative block w-full">
                    <select aria-label="Number of guests" value={guests} onChange={(event) => setGuests(event.target.value)} className={`${inputClass} h-12`}>
                        <option value="1">1 guest</option>
                        <option value="2">2 guests</option>
                        <option value="3">3 guests</option>
                        <option value="4">4 guests</option>
                        <option value="5">5 guests</option>
                        <option value="6">6 guests</option>
                    </select>
                    <i aria-hidden="true" className="bi bi-chevron-down pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-600" />
                </span>
            </label>
            <label className={`flex min-w-0 w-full flex-col gap-1 text-left text-sm font-bold ${labelClass}`}>
                <span>Check-in time</span>
                <span className="relative block w-full">
                    <input aria-label="Check-in time" type="time" value={time} onChange={(event) => setTime(event.target.value)} className={`${inputClass} h-12`} />
                    <i aria-hidden="true" className="bi bi-clock pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-600" />
                </span>
            </label>
            <Link
                href="/room-search"
                className={`${isSidebar ? "mt-1" : "self-end"} inline-flex min-h-12 ${buttonWidthClass} items-center justify-center rounded-sm bg-amber-700 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2 sm:px-6 ${isHero ? "lg:col-span-1" : ""}`}
            >
                Search Room
            </Link>
        </form>
    );
}
