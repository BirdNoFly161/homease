import { useTranslation } from "react-i18next";

const SocialLoginSection = () => {
  const { t } = useTranslation();

  return (
  
  <div className="flex justify-center w-full">
    <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#29382f] text-white text-sm font-bold leading-normal tracking-[0.015em] grow">
        <span className="truncate">{t("loginForm.continueWith.google")}</span>
      </button>
      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#29382f] text-white text-sm font-bold leading-normal tracking-[0.015em] grow">
        <span className="truncate">{t("loginForm.continueWith.linkedIn")}</span>
      </button>
    </div>
  </div>
);}

export default SocialLoginSection;