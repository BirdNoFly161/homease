import ListProfessionals from "@/components/sections/BrowseProfessionals/ListProfessionals";

const BrowseProfessionals = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#111714] overflow-x-hidden font-[Spline Sans, Noto Sans, sans-serif]">
      <main className="pt-20 px-40 flex flex-1 justify-center py-5">
        <ListProfessionals />
      </main>
    </div>
  );
};

export default BrowseProfessionals;
