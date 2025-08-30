const Button = ({ children, variant = "primary", ...props }) => {
  const baseClasses =
    "flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 text-sm font-bold leading-normal tracking-[0.015em]";

  const variants = {
    primary: "bg-[#38e07b] text-[#111714]",
    secondary: "bg-[#29382f] text-white",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;