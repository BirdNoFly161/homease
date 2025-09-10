import ExperienceItem from "@/components/common/user-details/ExperienceItem";

const ExperienceSection = ({ user }) => (
  <section>
    <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Experience</h2>
    {user.experiences.map((experience) => (
      <ExperienceItem
        company={experience.company}
        role={experience.role}
        description={experience.description}
      />
    ))}

  </section>
);

export default ExperienceSection;