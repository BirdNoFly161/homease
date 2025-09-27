import { useTranslation } from "react-i18next";

const SkillsSection = ({user}) => {
  const {t} = useTranslation();

  return (
  
  user.skills ? (
  <section>
    <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">{t("userDetails.skills")}</h2>
    <div className="flex gap-3 p-3 flex-wrap pr-4">
      {user.skills.map((skill) => (
        <div
          key={skill}
          className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#29382f] pl-4 pr-4"
        >
          <p className="text-white text-sm font-medium leading-normal">{skill}</p>
        </div>
      ))}
    </div>
  </section>) : null
);}


export default SkillsSection;