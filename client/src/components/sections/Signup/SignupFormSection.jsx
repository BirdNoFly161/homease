import InputField from "@/components/common/form/InputField";
import RadioSection from "./RadioSection";

const SignupFormSection = () => {
  return (
    <div className="layout-content-container flex flex-col w-full max-w-none py-5">
      <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
        Create your account
      </h2>

      <form className="mx-auto w-full max-w-[480px] px-4">
        <div className="py-3">
          <InputField label="Email" type="email" placeholder="you@example.com" />
        </div>
        <div className="py-3">
          <InputField label="Password" type="password" placeholder="Password" />
        </div>
        <div className="py-3">
          <InputField label="Confirm Password" type="password" placeholder="Confirm Password" />
        </div>

        <RadioSection />

        <div className="py-3">
          <button className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#38e07b] text-[#111714] text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Create Account</span>
          </button>
        </div>

        <p className="text-[#b89d9f] text-sm font-normal leading-normal pb-3 pt-1 text-center">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </form>
    </div>
  );
};

export default SignupFormSection;