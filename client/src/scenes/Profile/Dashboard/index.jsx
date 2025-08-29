import React from "react";
import ReviewSection from "@/components/sections/Profile/Dashboard/ReviewSection";
import BookingTableSection from "@/components/sections/Profile/Dashboard/BookingTableSection";
import OverviewSection from "@/components/sections/Profile/Dashboard/OverviewSection";

// Main component
function DashboardLayout() {
  return (
    < div className="layout-content-container flex flex-col max-w-[960px] flex-1" >
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">
          Dashboard
        </p>
      </div>
      
      <h2 className="text-white text-[22px] font-bold px-4 pb-3 pt-5">Overview</h2>
      <OverviewSection/>

      <h2 className="text-white text-[22px] font-bold px-4 pb-3 pt-5">Upcoming Bookings</h2>
      <BookingTableSection/>
      
      <h2 className="text-white text-[22px] font-bold px-4 pb-3 pt-5">Recent Reviews</h2>
      <ReviewSection />
    </div >
  );
};

export default DashboardLayout;