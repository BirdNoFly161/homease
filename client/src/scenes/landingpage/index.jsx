import FadeLeft from "@/components/FadeLeft";
import FadeRight from "@/components/FadeRight";
import FadeCenter from "@/components/FadeCenter";



const Landing = () => {
  return (
    <div className="w-full overflow-x-clip">
      <div className="w-full flex flex-col">
        <FadeLeft>
          <div
            className="flex items-center gap-x-20 w-full px-8 lg:px-20 snap-center h-screen bg-gradient-to-l from-current to-transparent"
          >
            <div className="flex flex-col gap-y-20">
              <span className="font-bold sm:text-xl md:text-3xl 2xl:text-5xl">
                Welcome to HOMEASE your one way stop to finding skilled workers !
              </span>
              <span className="sm:text-lg md:text-2xl 2xl:text-4xl grow">
                description
              </span>
            </div>
          </div>
        </FadeLeft>
      </div>
    </div>
  );
};

export default Landing;
