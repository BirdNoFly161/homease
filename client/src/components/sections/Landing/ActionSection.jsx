import Button from "../../common/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const ActionSection = () => {
  const { t } = useTranslation();
  const user = useSelector((state) => state.user.currentUser);

  return (
    <section className="flex flex-col items-center justify-center gap-6 py-12 px-4">
      <h2 className="text-white text-[22px] font-bold pb-3">{t("landing.actionSection.letsGetStarted")}</h2>
      <div className="flex flex-wrap justify-center center w-full">

        <div className="flex gap-4">
          <Link to="make-request" className="flex min-w-[400px]">
            <Button variant="invert" className="w-full h-12">
              {t("landing.actionSection.serviceSeeker") || "Post a Request"}
            </Button>
          </Link>

          <Link to="signup" className="flex min-w-[400px]">
            <Button variant="invert" className="w-full h-12">
              {t("landing.actionSection.serviceProvider") || "Get Started"}
            </Button>
          </Link>
        </div>


      </div>
    </section>
  );
};

export default ActionSection;
