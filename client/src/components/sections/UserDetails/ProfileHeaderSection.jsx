import Avatar from "@/components/common/user-details/Avatar";

const ProfileHeaderSection = ({
  name = "Sophia Carter",
  title = "Web Developer | 5+ years experience",
  rate = "$50/hr",
  imageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuC486HHUfTLFjn9Gm3X32W5vK3j1-19q9kCONeWgqhR1iiwVO7aHR_I-NII6L8T5Peu-rBj8ecuSsORPthlznyPVpWr0WxMtgEo6xM-chjHZqyjFAQcz1g4BsK1oacv9hBPrq5B9JITd297-5-9mj9iObodvaG51GXE6waZ1R1ko9aKL-fPXceAnG-z2Mv1MidKcyXjm-5vLK_woCtszo06I2m7y6WZ_dLkbDplmz5hb3OKM_JgmiRF2-2lUvrv8uB3a9gjXjSDQyUn",
  bookLabel = "Book Now",
  onBook = () => { },
}) => (
  <div className="flex p-4">
    <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
      {/* Profile section */}
      <div className="flex gap-4">
        <Avatar imageUrl={imageUrl} alt={`${name} avatar`} />
        <div className="flex flex-col justify-center">
          <p className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">{name}</p>
          <p className="text-[#9eb7a8] text-base font-normal leading-normal">{title}</p>
          <p className="text-[#9eb7a8] text-base font-normal leading-normal">{rate}</p>
        </div>
      </div>

      {/* Button */}
      <button
        type="button"
        onClick={onBook}
        className="flex items-center justify-center rounded-full h-10 px-6 bg-[#29382f] text-white text-sm font-bold leading-normal tracking-[0.015em] 
             w-full sm:w-auto sm:shrink-0"
        aria-label={bookLabel}
      >
        <span className="truncate">{bookLabel}</span>
      </button>
    </div>
  </div>

);

export default ProfileHeaderSection;