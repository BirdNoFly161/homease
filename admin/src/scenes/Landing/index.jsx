import HeroSection from "@/components/sections/Landing/HeroSection";
import FeaturedProfessionals from "@/components/sections/Landing/FeaturedProfessionals";
import PopularSkills from "@/components/sections/Landing/PopularSkills";
import JoinSection from "@/components/sections/Landing/JoinSection";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Landing = () => {
  const navigate = useNavigate()
  useEffect(() => {

    navigate("/requests")
  }, [])
  return (
    <div className="relative flex min-h-screen flex-col bg-[#111714] overflow-x-hidden font-[Spline Sans, Noto Sans, sans-serif]">
      <main className="pt-20 mt-10 px-40 flex flex-1 justify-center py-5">
      </main>
    </div>
  );
};

export default Landing;
