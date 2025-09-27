import { useState } from "react";
import API from "@/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const RatingSection = ({ user }) => {
    const navigate = useNavigate();
    const {t} = useTranslation();
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");
    const onSubmit = async () => {
        try {

            let new_user = JSON.parse(JSON.stringify(user))
            new_user.reviews.push({ rating: rating, comment: review })
            console.log("sending rating with :", new_user)
            let response = await API.put(`/users/${user._id}`, new_user);
            console.log(response)
            if (response.status === 200) {
                toast.success(t("userDetails.rating.successMessage"))
                window.location.reload(); // doing this to reload the user object so if another rating is done it donesnt "forget the rating you sjust did " i dont like this i should refetch the user after the put and reinit it.
                console.log("navigating to :", `/u/${user._id}`)
            }

        }
        catch (error) {
            console.log(error)
            window.location.reload();
        }
    }
    return (
        <section>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">{t("userDetails.rating.title")}</h2>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-white text-base font-medium leading-normal pb-2">{t("userDetails.rating.rate")}</p>
                    <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => setRating(star)}
                                className="bg-transparent border-none p-0 cursor-pointer"
                                aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                            >
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill={star <= rating ? "#FFD700" : "#3d5245"}
                                    stroke="none"
                                >
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            </button>
                        ))}
                    </div>
                </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-white text-base font-medium leading-normal pb-2">{t("userDetails.rating.review")}</p>
                    <textarea
                        placeholder={t("userDetails.rating.placeholder")}
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#3d5245] bg-[#1c2620] focus:border-[#3d5245] min-h-36 placeholder:text-[#9eb7a8] p-[15px] text-base font-normal leading-normal"
                        value={review}
                        onChange={e => setReview(e.target.value)}
                    ></textarea>
                </label>
            </div>
            <div className="flex px-4 py-3 justify-end">
                <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#38e07b] text-[#111714] text-sm font-bold leading-normal tracking-[0.015em]"
                    onClick={onSubmit}
                >
                    <span className="truncate">{t("userDetails.rating.submit")}</span>
                </button>
            </div>

        </section>)
};

export default RatingSection;