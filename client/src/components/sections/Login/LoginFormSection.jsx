import InputField from "@/components/common/Login/InputField";
import SocialLoginSection from "./SocialLoginSection";

const LoginFormSection = () => (
  <div className="layout-content-container flex flex-col w-[512px] max-w-[960px] py-5 flex-1 items-center">
    <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
      Log in to SkillHub
    </h2>

    <div className="flex w-full max-w-[480px] flex-wrap items-end gap-4 px-4 py-3 justify-center">
      <InputField label="Email" type="email" placeholder="you@example.com" />
    </div>

    <div className="flex w-full max-w-[480px] flex-wrap items-end gap-4 px-4 py-3 justify-center">
      <InputField label="Password" type="password" placeholder="Password" />
    </div>

    <p className="text-[#b89d9f] text-sm font-normal leading-normal pb-3 pt-1 px-4 underline text-center">
      Forgot password?
    </p>

    <div className="flex w-full max-w-[480px] px-4 py-3 justify-center">
      <button className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#38e07b] text-white text-sm font-bold leading-normal tracking-[0.015em]">
        <span className="truncate text-[#111714]">Log in</span>
      </button>
    </div>

    <p className="text-[#b89d9f] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
      Or continue with
    </p>

    <SocialLoginSection />
  </div>
);

export default LoginFormSection;