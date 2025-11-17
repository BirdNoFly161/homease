import SearchBar from "../../common/SearchBar";
import Button from "../../common/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t, i18 } = useTranslation()
  return (
    <section className="
        w-full
        flex
        items-center justify-center
      ">
      <div
        className="
        flex 
        w-[80vw]
        min-h-[300px]        /* mobile */
        sm:min-h-[380px]     /* small screens */
        md:min-h-[480px]     /* tablets and up */
        flex-col gap-6 bg-cover bg-center bg-no-repeat 
        items-center justify-center p-4 rounded-xl
      "
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhh_qIsKWwE-kiU9kiON6sB8AFd-NeSsKi4ZzU8LsuLM40hcfj7KZxzL1f5NjeynETB2eMYGgWFr8OyBuVIRfxPEZCIj4UNc1pXJyGQ9uVgZInRP4qdiT39JR-CmZyhvf5Ma9MkeUrW8_hLzaRJo4gS_Xt45019dskUA-b6JD0IUL9YAbFiBOPv49gAdMhA4vpU_9uKHdJtCRNOAnijB9j9F3usBm0og6nufeeCb3BU7-PWHDdn7pGKM-lgl_ozuP_tSsEJmXeW_bv")',
        }}
      >
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-white md:text-5xl sm:text-2xl text-xl font-black leading-tight">{t('landing.heroSection.title_1')}</h1>
          <h2 className="text-white md:text-1xl sm:text-s text-xs text-base font-normal">{t('landing.heroSection.title_2')}</h2>
        </div>
        {/* <div className="w-full max-w-[480px]">
        {/*<SearchBar placeholder="Search for skills or categories" />
         <Link to="browse-professionals">
          <Button variant="primary">
            Browse our professionals !
          </Button>
        </Link>
      </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
