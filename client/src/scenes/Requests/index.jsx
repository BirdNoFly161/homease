import NavBar from "@/components/common/NavBar";
import BookingsTableSection from "@/components/sections/Bookings/BookingsTableSection";
import React from "react";
import { Link } from "react-router-dom";

// ------------------ Page ------------------
export default function Requests() {
  return (
    <div className="bg-[#111714] min-h-screen">
      <NavBar />
      <main className="pt-32 flex-1 bg- px-10 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-3xl font-bold text-white">Requests</h1>
            <Link to="/make-request">
              <button className="flex items-center gap-2 rounded-md bg-[#38e07b] px-4 py-2 text-sm font-semibold text-black shadow-sm hover:bg-primary-600">
                <span className="material-symbols-outlined">add</span>
                Requests
              </button>
            </Link>
          </div>
          <BookingsTableSection />
        </div>
      </main>
    </div>
  );
}