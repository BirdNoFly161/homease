import SendPasswordResetFormSection from "@/components/sections/SendPasswordReset/SendPasswordResetFormSection";
import React from "react";
import { useTranslation } from "react-i18next";

// ------------------ Page ------------------
export default function SendPasswordReset() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#111714] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      {/* Optional: responsive padding without affecting centering */}
      <div className="mt-20 layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 lg:px-40 flex flex-1 py-5">
          <SendPasswordResetFormSection />
        </div>
      </div>
    </div>
  );
}