import SidebarItem from "@/components/common/SidebarItem";

function SidebarSection() {
  return (
    <div className="layout-content-container flex flex-col w-80">
      <div className="flex flex-col justify-between bg-[#111714] p-4 min-h-[700px]">
        <div className="flex flex-col gap-4">
          <div className="flex gap-3 items-center">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC3E9H_8V4wC54mh7S6QaR50VcfdCwtxr3lUJe4wMm5otXbmk1Ct2wV9BJ2bImv5iFCOit1ySazlsuQpuBjiKv_pJX25LI0lBN5saU2vt63dIYMJVbTZ6zriy0-9sOE7IT1M9k6iEgWL9IKPt7aSRZQX11sx_rowSqlVFt6qzmu2tXm_o6V5Isf4c6v4xJOw8p7J4vMsIOpKQAyjPrIZNUwvjPUiDVCStRQJkSeyFdr-YAWDB4fy5_mHn4epOWJ-XPAljL9roiSfrLJ")',
              }}
            ></div>
            <div className="flex flex-col">
              <h1 className="text-white text-base font-medium leading-normal">Sarah Miller</h1>
              <p className="text-[#9eb7a8] text-sm font-normal leading-normal">
                Professional Photographer
              </p>
            </div>
          </div>
          {/* Sidebar Items */}
          <div className="flex flex-col gap-2">
            <SidebarItem icon={<div>🏠</div>} label="Dashboard" active />
            <SidebarItem icon={<div>📅</div>} label="Bookings" />
            <SidebarItem icon={<div>⏰</div>} label="Availability" />
            <SidebarItem icon={<div>⭐</div>} label="Reviews" />
            <SidebarItem icon={<div>👤</div>} label="Profile" />
          </div>
        </div>
      </div>
    </div>);
}

export default SidebarSection;