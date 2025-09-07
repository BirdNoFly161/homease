import { Outlet } from "react-router-dom";
import SidebarSection from "@/components/sections/Profile/Dashboard/SidebarSection";
import NavBar from "@/components/common/NavBar";

function ProfileLayout() {
  return (
    <div
      className="relative flex flex-col min-h-screen bg-[#111714] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Spline Sans", "Noto Sans", sans-serif' }}
    >
      <NavBar />
      <main className="pt-20 layout-container flex h-full grow flex-col">
        <div className="flex flex-1 gap-1 px-6 py-5 justify-center">
          <SidebarSection />
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default ProfileLayout;