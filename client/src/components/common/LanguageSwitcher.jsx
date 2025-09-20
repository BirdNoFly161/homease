import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";

const languages = [
    { code: "en", label: "English", flagCode: "us" },
    { code: "ar", label: "العربية" },
    // Add more languages here if needed
];

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;

    return (
        <div className="flex items-center px-2 py-1">
            <select
                value={currentLang}
                onChange={e => i18n.changeLanguage(e.target.value)}
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