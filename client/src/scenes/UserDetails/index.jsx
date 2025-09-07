import { useParams } from "react-router-dom";
import ProfileHeaderSection from "@/components/sections/UserDetails/ProfileHeaderSection";
import TabsSection from "@/components/sections/UserDetails/TabsSection";
import SkillsSection from "@/components/sections/UserDetails/SkillsSection";
import ExperienceSection from "@/components/sections/UserDetails/ExperienceSection";
import AboutMeSection from "@/components/sections/UserDetails/AboutMeSection";
import NavBar from "@/components/common/NavBar";

function UserDetails() {
  const { userId } = useParams();
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#111714] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Spline Sans", "Noto Sans", sans-serif' }}
    >
      <NavBar />
      <main className="pt-20 layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <ProfileHeaderSection />
            <TabsSection />
            <SkillsSection />
            <ExperienceSection />
            <AboutMeSection />
          </div>
        </div>
      </main>
    </div>
  );
}

export default UserDetails;