import Navbar from "@/components/common/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedProfessionals from "@/components/sections/FeaturedProfessionals";
import PopularSkills from "@/components/sections/PopularSkills";
import JoinSection from "@/components/sections/JoinSection";

const Landing = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#111714] overflow-x-hidden font-[Spline Sans, Noto Sans, sans-serif]">
      <Navbar />
      <main className="px-40 flex flex-1 justify-center py-5">
        <div className="max-w-[960px] flex-1 flex flex-col">
          <HeroSection />
          <FeaturedProfessionals />
          <PopularSkills />
          <JoinSection />
        </div>
      </main>
    </div>
  );
};

export default Landing;
