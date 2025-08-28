import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-primary py-16 lg:py-32 px-8 lg:px-16 text-white snap-end bottom-0">
      <div className="flex justify-between">
        <div className=" text-sm lg:text-md flex flex-col gap-y-4">
          <span>Homease</span>
          <span>&copy; 2025</span>
          <span>Privacy terms</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
