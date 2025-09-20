import { useTranslation } from "react-i18next";
import Button from "../../common/Button";
import { Link } from "react-router-dom";

const JoinSection = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center gap-6 px-10 py-20 text-center">
      <h1 className="text-white text-4xl font-bold leading-tight max-w-[720px]">
        {t("landing.joinSection.title_1")}
      </h1>
      <p className="text-white text-base max-w-[720px]">
        {t("landing.joinSection.p_1")}
      </p>
      <Link to="/login">
        <Button variant="primary">{t("landing.joinSection.b_1")}</Button>
      </Link>
    </section>
  );
};

export default JoinSection;