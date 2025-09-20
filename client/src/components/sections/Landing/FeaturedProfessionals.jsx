import { useTranslation } from "react-i18next";

const professionals = [
  { name: "Oussama Benmansour", role: "Software Engineer", img: "https://nsvzogblporeptlk.public.blob.vercel-storage.com/user/image-NTACyQgrtJEfnWH6fqrQ63hWpt2118" },
  { name: "Adel Benmansour", role: "Psychologist", img: "https://nsvzogblporeptlk.public.blob.vercel-storage.com/user/image-uwzsnDcO3Va6DAcFEq24CBVuJVkNHi" },
  { name: "Nabil Djari", role: "Translation specialist/Psychologist", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoydEavwCtjCyS7H8jfAibJ_4leGGWoqWdrzMPfNG8BsDEMdDhsHA-nCXfbv8wwb-oYP6C5M-caG5mUaL7KMOgaDvjUFYGuIz3-nRK8XI1zzp85MkzGaDzdzrk8Xzbp1GKmeQ-44kRRuB1xS33SbaD1smEAsMscBLLoNEzEU70k4lHxlPY65IRKA45k2R3FEZF3kM10HAYoZco2S8HeISTnQyB6KrxJbHTKnOyqDNgKpqTivMBvnI6zX-sWEPAUCJZIEfELX67PBm4" },
];

const FeaturedProfessionals = () => {
  const { t, i18 } = useTranslation();

  return (
    <section className="px-4 pt-5">
      <h2 className="text-white text-[22px] font-bold pb-3">{t("landing.featuredProfessionals.title_1")}</h2>
      <div className="flex overflow-y-auto gap-3">
        {professionals.map((pro, idx) => (
          <div key={idx} className="flex flex-col gap-4 min-w-60">
            <div
              className="aspect-[3/4] bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url(${pro.img})` }}
            />
            <div>
              <p className="text-white text-base font-medium">{pro.name}</p>
              <p className="text-[#9eb7a8] text-sm">{pro.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProfessionals;