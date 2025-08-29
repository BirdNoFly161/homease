function OverviewSection(){
  return (<div className="flex flex-wrap gap-4 p-4">
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#3d5245]">
          <p className="text-white text-base font-medium">Total Bookings</p>
          <p className="text-white text-2xl font-bold">25</p>
        </div>
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#3d5245]">
          <p className="text-white text-base font-medium">Average Rating</p>
          <p className="text-white text-2xl font-bold">4.8</p>
        </div>
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#3d5245]">
          <p className="text-white text-base font-medium">Earnings (Last 30 Days)</p>
          <p className="text-white text-2xl font-bold">$1,500</p>
        </div>
      </div>);
}

export default OverviewSection;