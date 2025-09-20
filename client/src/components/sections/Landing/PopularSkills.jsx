import { useTranslation } from "react-i18next";

const skills = [
  "Web Development",
  "Graphic Design",
  "Content Writing",
  "Social Media Marketing",
  "Virtual Assistant",
  "Data Analysis",
];

const PopularSkills = () => {
  const { t, i18 } = useTranslation();
  return (
    <section className="px-4 pt-5">
      <h2 className="text-white text-[22px] font-bold pb-3">{t("landing.popularSkills.title_1")}</h2>
      <div className="flex gap-3 flex-wrap">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex h-8 items-center px-4 rounded-full bg-[#29382f]">
            <p className="text-white text-sm font-medium">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularSkills;