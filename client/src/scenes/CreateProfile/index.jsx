import AboutSection from "@/components/sections/CreateProfile/AboutSection";
import CategorySection from "@/components/sections/CreateProfile/CategorySection";
import ProfilePictureSection from "@/components/sections/CreateProfile/ProfilePictureSection";
import SubmitSection from "@/components/sections/CreateProfile/SubmitSection";
import React from "react";

function CreateProfile() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#111714] group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Spline Sans", "Noto Sans", sans-serif' }}
    >
      <div className="pt-20 layout-container flex h-full grow flex-col items-center justify-center">
        <div className="flex flex-1 justify-center py-5 w-full">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[960px] py-10 px-8 flex-1 items-center rounded-xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Create Your Professional Profile
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                Showcase your skills and attract clients.
              </p>
            </div>
            <form className="space-y-8 w-full">
              <ProfilePictureSection />
              <AboutSection />
              <CategorySection />
              <SubmitSection />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProfile;