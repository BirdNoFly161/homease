import SearchBar from "../../common/SearchBar";
import Button from "../../common/Button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 rounded-xl"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhh_qIsKWwE-kiU9kiON6sB8AFd-NeSsKi4ZzU8LsuLM40hcfj7KZxzL1f5NjeynETB2eMYGgWFr8OyBuVIRfxPEZCIj4UNc1pXJyGQ9uVgZInRP4qdiT39JR-CmZyhvf5Ma9MkeUrW8_hLzaRJo4gS_Xt45019dskUA-b6JD0IUL9YAbFiBOPv49gAdMhA4vpU_9uKHdJtCRNOAnijB9j9F3usBm0og6nufeeCb3BU7-PWHDdn7pGKM-lgl_ozuP_tSsEJmXeW_bv")',
      }}
    >
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-white text-5xl font-black leading-tight">Find the perfect professional for your project</h1>
        <h2 className="text-white text-base font-normal">
          Browse thousands of skilled professionals ready to help you with any task, from web development to graphic design.
        </h2>
      </div>
      <div className="w-full max-w-[480px]">
        {/*<SearchBar placeholder="Search for skills or categories" />*/}
        <Link to="browse-professionals">
          <Button variant="primary">
            Browse our professionals !
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
