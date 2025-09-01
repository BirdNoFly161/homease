import ExperienceItem from "@/components/common/user-details/ExperienceItem";

const ExperienceSection = () => (
  <section>
    <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Experience</h2>
    <ExperienceItem
      company="Tech Solutions Inc."
      role="Software Engineer"
      description="Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software."
    />
    <ExperienceItem
      company="Creative Designs Co."
      role="Frontend Developer"
      description="Built responsive and user-friendly interfaces using HTML, CSS, and JavaScript. Worked closely with designers to implement pixel-perfect designs."
    />
  </section>
);

export default ExperienceSection;