import Button from "../../common/Button";
import { Link } from "react-router-dom";
const JoinSection = () => {
  return (
    <section className="flex flex-col items-center gap-6 px-10 py-20 text-center">
      <h1 className="text-white text-4xl font-bold leading-tight max-w-[720px]">
        Join SkillHub as a Professional
      </h1>
      <p className="text-white text-base max-w-[720px]">
        Offer your skills and connect with clients seeking your expertise.
      </p>
      <Link to="/login">
        <Button variant="primary">Become a Pro</Button>
      </Link>
    </section>
  );
};

export default JoinSection;