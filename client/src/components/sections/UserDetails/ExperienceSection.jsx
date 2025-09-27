import ExperienceItem from "@/components/common/user-details/ExperienceItem";
import { useTranslation } from "react-i18next";

const ExperienceSection = ({ user }) => {
  const { t } = useTranslation();
  return (
  <section>
    <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">{t("userDetails.experience")}</h2>
    {user.experiences.map((experience, index) => (
      <ExperienceItem
        key={index}
        company={experience.company}
        role={experience.role}
        description={experience.description}
      />
    ))}

  </section>
);}

export default ExperienceSection;