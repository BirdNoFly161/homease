import { useState } from "react";

const RatingSection = ({ user }) => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");
    return (
        <section>
            <h2 class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Rate Professional</h2>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label class="flex flex-col min-w-40 flex-1">
                    <p class="text-white text-base font-medium leading-normal pb-2">Rating</p>
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
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label class="flex flex-col min-w-40 flex-1">
                    <p class="text-white text-base font-medium leading-normal pb-2">Review</p>
                    <textarea
                        placeholder="Write your review here"
                        class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#3d5245] bg-[#1c2620] focus:border-[#3d5245] min-h-36 placeholder:text-[#9eb7a8] p-[15px] text-base font-normal leading-normal"
                        value={review}
                        onChange={e => setReview(e.target.value)}
                    ></textarea>
                </label>
            </div>
            <div class="flex px-4 py-3 justify-end">
                <button
                    class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#38e07b] text-[#111714] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                    <span class="truncate">Submit Review</span>
                </button>
            </div>

        </section>)
};

export default RatingSection;