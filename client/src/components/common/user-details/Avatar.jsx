const Avatar = ({ imageUrl, alt = "Profile picture" }) => (
  <div
    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
    style={{ backgroundImage: `url("${imageUrl}")` }}
    role="img"
    aria-label={alt}
  />
);

export default Avatar