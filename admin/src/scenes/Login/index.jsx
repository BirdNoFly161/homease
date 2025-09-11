import React from "react";
import LoginFormSection from "@/components/sections/Login/LoginFormSection";
import FooterSection from "@/components/sections/Login/FooterSection";

const Login = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#111714] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Spline Sans", "Noto Sans", sans-serif' }}
    >
      <div className="pt-20 layout-container flex h-full grow flex-col items-center justify-center">
        <div className="flex flex-1 justify-center py-5 w-full">
          <LoginFormSection />
        </div>
        <FooterSection />
      </div>
    </div>
  );
};

export default Login;