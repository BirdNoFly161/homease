import Avatar from "@/components/common/user-details/Avatar";
import Spinner from "@/components/unused/spinner";
import { useTranslation } from "react-i18next";

const ProfileHeaderSection = ({
  user,
  bookLabel = "Book Now",
  onBook = () => { },
}) => {
  const {t} = useTranslation();
  console.log(user)
  return (
    <div className="flex p-4">
      <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
        {/* Profile section */}
        <div className="flex gap-4">
          <Avatar imageUrl={user.avatar} alt={`${user.username} avatar`} />
          <div className="flex flex-col justify-center">
            <p className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">{user.firstName} {user.lastName}</p>
            <p className="text-[#9eb7a8] text-base font-normal leading-normal">{user.role}</p>
            <p className="text-[#9eb7a8] text-base font-normal leading-normal">{user.rate}</p>
          </div>
        </div>

        {/* Button */}
        <button
          type="button"
          onClick={onBook}
          className="flex items-center justify-center rounded-full h-10 px-6 bg-[#29382f] text-white text-sm font-bold leading-normal tracking-[0.015em] 
             w-full sm:w-auto sm:shrink-0"
          aria-label={t("userDetails.header.book")}
        >
          <span className="truncate">{t("userDetails.header.book")}</span>
        </button>
      </div>
    </div>
  )
};

export default ProfileHeaderSection;