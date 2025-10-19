import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import SearchBar from "./SearchBar";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import API from "@/api";
import { setAuthToken } from "@/redux/user/userSlice";
import { setUser } from "@/redux/user/userSlice";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { t, i18 } = useTranslation()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleDropdown = () => setIsOpen(prev => !prev);
  const onLogout = async () => {
    try {
      let response = await API.post("/users/logout");

      if (response.status === 200) {
        dispatch(setAuthToken(null));
        dispatch(setUser(null));
        delete API.defaults.headers.common['Authorization']
        navigate("/")
      }
      //console.log(response2);
      console.log(response);
    }
    catch (error) {
      console.log(error)
    }

  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed w-full z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#29382f] px-10 py-3 bg-[#111714]">
      <div className="flex items-center gap-8">
        <Link className="flex items-center gap-4 text-white" to="/">
          <div className="size-16 rounded">
            <img className="rounded-full" src="../../../public/homease_logo.jpg" />
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">{t("navbar.brand.title")}</h2>
        </Link>
        <div className="flex items-center gap-9">
          <Link className="text-white text-sm font-medium leading-normal" to="/browse-professionals">
            {t("navbar.links.browse")}
          </Link>
          <Link className="text-white text-sm font-medium leading-normal" to="/requests">
            {t("navbar.links.requests")}
          </Link>
        </div>
      </div>

      <div className="flex flex-1 justify-end gap-8">
        {/*<SearchBar placeholder="Search" small />*/}
        <LanguageSwitcher />
        <div className="flex gap-2 items-center">
          <Button variant="primary">{t("navbar.actions.postRequest")}</Button>

          {user ? (
            <div className="relative inline-block">
              {/* Avatar */}
              <div
                onClick={toggleDropdown}
                className="ml-2 bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 cursor-pointer"
                style={{ backgroundImage: `url("${user.avatar}")` }}
              ></div>

              {/* Dropdown */}
              {isOpen && (
                <div
                  className="absolute right-0 top-16 w-48 bg-[#111714] border border-[#29382f] rounded shadow-lg z-10 p-2"
                >
                  <button
                    onClick={onLogout}
                    className="w-full text-white text-left px-4 py-2 bg-[#111714] border border-[#29382f] rounded hover:bg-[#29382f]"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>


          ) : (
            <Link to="/login">
              <Button variant="secondary" onClick={() => setIsLoggedIn(true)}>
                {t("navbar.actions.login")}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default NavBar;
