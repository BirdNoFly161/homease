import HeroSection from "@/components/sections/Landing/HeroSection";
import FeaturedProfessionals from "@/components/sections/Landing/FeaturedProfessionals";
import PopularSkills from "@/components/sections/Landing/PopularSkills";
import JoinSection from "@/components/sections/Landing/JoinSection";
import ActionSection from "@/components/sections/Landing/ActionSection";

const Landing = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#111714] overflow-x-hidden font-[Spline Sans, Noto Sans, sans-serif]">
      <main className="pt-20 mt-10 px-40 flex flex-1 justify-center py-5">
        <div className="max-w-[960px] flex-1 flex flex-col pt-20">
          <HeroSection />
          <ActionSection/>
          {/* <FeaturedProfessionals />
          <PopularSkills />
          <JoinSection /> */}
        </div>
      </main>
    </div>
  );
};

export default Landing;
