import { useTranslation } from "react-i18next";

const TabsSection = () => {
  const {t} = useTranslation();

  return (
  <div className="pb-3">
    <div className="flex border-b border-[#3d5245] px-4 gap-8">
      <a className="flex flex-col items-center justify-center border-b-[3px] border-b-white text-white pb-[13px] pt-4" href="#">
        <p className="text-white text-sm font-bold leading-normal tracking-[0.015em]">{t("userDetails.tabs.overview")}</p>
      </a>
    </div>
  </div>
);
}
export default TabsSection;