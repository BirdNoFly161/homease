import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    // Set HTML direction and language attributes
    const lang = languages.find(l => l.code === currentLang);
    document.documentElement.lang = lang?.code || "en";
    document.documentElement.dir = lang?.dir || "ltr";
  }, [currentLang]);

  const handleChange = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="flex items-center px-2 py-1">
      <select
        value={currentLang}
        onChange={handleChange}
        className="bg-[#1c2620] text-[#9eb7a8] rounded-full px-3 py-1 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#38e07b]"
      >
        {languages.map(lang => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
