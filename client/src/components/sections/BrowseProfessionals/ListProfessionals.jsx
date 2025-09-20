import PageSelector from "@/components/common/PageSelector";
import { useState, useEffect } from "react";
import API from "@/api";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

/*
const professionals = [
  {
    name: "Sophia Carter",
    reviews: "4.8 • 123 reviews",
    description: "Expert in web development, specializing in React and Node.js",
    rate: "$50/hr",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBnVILutpPZt2L_hPavAZubeb6OYolx26h6_UUQ-vURQu-E-GlanPtvk_5JkKyiD_agPLDiigXYKy3kiCHUuvL_5OWbjhwXgSGH0n28OQWd0ZNgKQkkj1IQQIsSXyPxvIgi_G3_puCo-609iXFz_oNh2Zb-8sLWRakvla6JQcLk1rp9MBbpFpbI4Tfd2bZ55m9N1ZJFFD9Svsnlh6qjMfXsFpPnKnum5JNxayKU9vPxvUBJfSguXWPvTtAkIibP5tjARdUUxBdacb9h",
  },
  {
    name: "Ethan Bennett",
    reviews: "4.9 • 98 reviews",
    description:
      "Experienced graphic designer with a focus on branding and illustration",
    rate: "$45/hr",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA7WQZoAoDqI9nDLQDi0S_cmhJ4LcMKDrHx_2T5RY5KJzvzjHcYX5h4-_sjNkWRf9j8DXYTHj4ZaCWxIMdoKuerC-_nrY5NpbAaLpaNGorwac0Jy0zSLNG_hGreThMPfu5RzRhPOKPMa-cTX1R0-7aAysoUVkMKx9o8M_WYbRNswqbfw6wCAq5k4SF6hQjeKWnlZTxuFFBuTESmbWPpaO6FFZ-M3hmBWqhhNvO0ZH5jRGZY96JzoEz8r9i9BAyM0lb-oV_LkbCb15hH",
  },
  {
    name: "Olivia Harper",
    reviews: "4.7 • 76 reviews",
    description:
      "Data analyst proficient in SQL, Python, and data visualization tools",
    rate: "$60/hr",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCq_H4OLyqSYCqjELYc7nNld6RbNGQc0Oh1qPNsxCXojoS-9oePU5v1o7TNm_1kYbEBZ5A5WON9bKVeLhQDQcfzABsY8Atyp_wJVgWZX3ua-SUhZJsp4ajmFVY-UMa8zfaZTrohW6dTVgznbjujBm2LPVSVJ2eFjmSC2EDidsBwSZrBF5kWsdoHLFYKxZB2WHL8q_XA9ZXXP68kqsxqhDNRFfro2tQS9UoRdz56k14nvJra2wjE7BppzDNx7UC9J3EI5I0YS2xZEKDB",
  },
  {
    name: "Liam Foster",
    reviews: "4.6 • 54 reviews",
    description:
      "Digital marketing specialist with expertise in SEO and social media marketing",
    rate: "$55/hr",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCALNGyiti3vNM2Yq3v1Z1UJqdtq0iCOUYiaGtGxCpxcUbg_1mCr_cHNXvPcyul0CISi2VUbaMp7TB7aZNp2tciO96OlLiKVMyurpg-5OzG16CP-yT3pAvN0grHkZmoQ0DjhWlPrfcenR-mez1zw0vvpC9gcwOJAXdWKcqsZsbVDS1hdOjooZuVGrVNJp9nfAWSjOABKKJMoDNq1Znr_o2l1rG3V_Qd0ATkKb-7VJkoO-sj8ppkXAIYBlNt2Vbibq0hn22RwcMwCD2p",
  },
  {
    name: "Ava Mitchell",
    reviews: "4.9 • 112 reviews",
    description:
      "Professional translator fluent in English, Spanish, and French",
    rate: "$40/hr",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCGtsKXKK-ROO1oMTGo1FgqPHlP8i6rMpmc4SqPaWM8RK6ZcyMMTUsoDHtQkv-nr0vyneDEyamcMi6zxBzfNP_dlO5jVtK4lcqdeX8tFV62ovvyo_2_LgfMNkkViRFJKJCkG3EXVKc29jDFFg265CsqXeBhKF6ITBSvktljvJaKqFa3tr5_pRA34bgKV1jqWv2kAuYGoqvbHNmQYpYnNaP9_gG6TaPWT-FMjamMlTQCLHrgwFhR5uQ9MMVnPyiGKvfCrge7Lwfndv5A",
  },
];

*/

const ListProfessionals = () => {

  const [professionals, setProfessionals] = useState([]);
  const [search, setSearch] = useState('');
  const { t, i18 } = useTranslation()

  async function fetchProfessionals() {
    try {
      const { data, ok, msg } = (await API.get("users/professionals")).data;
      console.log("got data: ", data);
      if (!ok) return;
      setProfessionals(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchProfessionals();
  }, []);


  return (
    <section className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">
          {t("browse.title")}
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-3 p-3 flex-wrap pr-4">
        {/*["Skill Category", "Rating", "Price Range", "Verification"]*/[].map(
          (filter) => (
            <button
              key={filter}
              className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#29382f] pl-4 pr-2"
            >
              <p className="text-white text-sm font-medium leading-normal">
                {filter}
              </p>
              <div className="text-white" data-icon="CaretDown" data-size="20px" data-weight="regular">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                </svg>
              </div>
            </button>
          )
        )}
      </div>

      {/* Professionals List */}
      {professionals.map((pro, i) => (
        <Link to={`/u/${pro._id}`}>
          <div key={i} className="flex gap-4 bg-[#111714] px-4 py-3 justify-between">
            <div className="flex items-start gap-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-[70px] w-fit"
                style={{ backgroundImage: `url("${pro.avatar}")` }}
              ></div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-white text-base font-medium leading-normal">{pro.firstName} {pro.lastName}</p>
                <p className="text-[#9eb7a8] text-sm font-normal leading-normal">{pro.reviews[0] ? pro.reviews[0].rating : "Not reviewed yet"}</p>
                <p className="text-[#9eb7a8] text-sm font-normal leading-normal">{pro.description}</p>
              </div>
            </div>
            <div className="shrink-0">
              <p className="text-white text-base font-normal leading-normal">{pro.rate}</p>
            </div>
          </div>
        </Link>

      ))}

      {/*<PageSelector totalPages={10} initialPage={3} />*/}
    </section>
  );
};

export default ListProfessionals;