import { Link } from "react-router-dom";

const FooterSection = () => (
  <footer className="flex justify-center">
    <div className="flex max-w-[960px] flex-1 flex-col">
      <Link to={"/signup"}>
        <p className="text-[#b89d9f] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">
          Don't have an account? Sign up
        </p>
      </Link>
    </div>
  </footer>
);

export default FooterSection;