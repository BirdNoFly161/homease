const Review = ({ avatar, name, date, rating, comment }) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i} className="text-white">
      {i < rating ? "★" : "☆"}
    </span>
  ));

  return (
    <div className="flex flex-col gap-3 bg-[#111714]">
      <div className="flex items-center gap-3">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          style={{ backgroundImage: `url(${avatar})` }}
        ></div>
        <div className="flex-1">
          <p className="text-white text-base font-medium leading-normal">{name}</p>
          <p className="text-[#9eb7a8] text-sm font-normal leading-normal">{date}</p>
        </div>
      </div>
      <div className="flex gap-0.5">{stars}</div>
      <p className="text-white text-base font-normal leading-normal">{comment}</p>
    </div>
  );
};

export default Review;