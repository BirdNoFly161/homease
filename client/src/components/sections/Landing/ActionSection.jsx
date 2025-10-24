import Button from "../../common/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const ActionSection = () => {
  const { t } = useTranslation();
  const user = useSelector((state) => state.user.currentUser);

  return (
    <section className="flex flex-col items-center justify-center gap-6 py-12 px-4">
      <div className="flex flex-wrap justify-center center w-full">

        {user ? (
          <Link to="make-request" className="flex min-w-[400px]">
            <Button variant="invert" className="w-full h-12">
              {t("landing.actionSection.postRequest") || "Post a Request"}
            </Button>
          </Link>
        ) : (
          <Link to="signup" className="flex min-w-[400px]">
            <Button variant="invert" className="w-full h-12">
              {t("landing.actionSection.getStarted") || "Get Started"}
            </Button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default ActionSection;
