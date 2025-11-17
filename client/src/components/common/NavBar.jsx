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

export default function NavBar() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isRTL = i18n.dir() === "rtl"
  const user = useSelector((state) => state.user.currentUser);

  // desktop avatar dropdown
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);
  const avatarRef = useRef(null);

  // small-screen hamburger menu
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  // Active/inactive toggle
  const [isToggled, setIsToggled] = useState(Boolean(user?.status === "Active"));

  useEffect(() => {
    setIsToggled(Boolean(user?.status === "Active"));
  }, [user]);

  // Close avatar dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (avatarRef.current && !avatarRef.current.contains(e.target)) {
        setIsAvatarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setIsMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const onLogout = async () => {
    try {
      const response = await API.post("/users/logout");
      if (response.status === 200) {
        dispatch(setAuthToken(null));
        dispatch(setUser(null));
        delete API.defaults.headers.common["Authorization"];
        setIsAvatarOpen(false);
        setIsMobileOpen(false);
        navigate("/");
      }
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggle = async () => {
    const newValue = !isToggled;
    setIsToggled(newValue);
    try {
      if (!user?._id) return;
      const response = await API.put(`/users/${user._id}`, {
        ...user,
        status: newValue ? "Active" : "Inactive",
      });
      if (response.status === 200) {
        console.log("status updated", response);
        // Optionally update user in redux if backend returns updated user:
        // dispatch(setUser(response.data));
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Mobile menu content builder (keeps parity with desktop)
  const MobileMenuContent = ({ onClickItem = () => { } }) => (
    <div className="flex flex-col gap-3 p-4">
      {user ? (
        <>
          {/* Toggle */}
          <div className="relative flex">
            <button
              onClick={handleToggle}
              aria-pressed={isToggled}
              className="relative w-[50px] h-[26px] rounded-full focus:outline-none"
              style={{ backgroundColor: isToggled ? "#4CAF50" : "#ccc" }}
              title={isToggled ? "Set Inactive" : "Set Active"}
            >
              <span
                className="absolute top-[2px] w-[22px] h-[22px] bg-white rounded-full transition-left duration-300"
                style={{ left: isToggled ? "26px" : "2px", transition: "left 0.25s" }}
              />
            </button>

            <div className="absolute right-2 text-s text-white mb-3">Status: {isToggled ? "Active" : "Inactive"}</div>
          </div>
          <Link to="make-request" onClick={onClickItem}>
            <Button variant="primary" className="w-full">
              {t("navbar.actions.postRequest") || "Post Request"}
            </Button>
          </Link>
          <Button variant="secondary" className="w-full" onClick={() => {
            onLogout();
            onClickItem();
          }}>
            {"Logout"}
          </Button>
        </>
      ) : (
        <>
          <Link to="signup" onClick={onClickItem}>
            <Button variant="primary" className="w-full">
              {t("navbar.actions.signup") || "Signup"}
            </Button>
          </Link>
          <Link to="login" onClick={onClickItem}>
            <Button variant="secondary" className="w-full">
              {t("navbar.actions.login") || "Login"}
            </Button>
          </Link>
        </>
      )}
    </div>
  );

  return (
    <header className="fixed w-full z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#29382f] px-6 md:px-10 py-3 bg-[#111714]">
      <div className="flex items-center gap-6">
        <Link className="flex items-center gap-4 text-white" to="/">
          <div className="flex items-center justify-center rounded">
            <img className="rounded-full w-10 h-10 object-cover" src="/homease_logo.jpg" alt="logo" />
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
            {t("navbar.brand.title") || "Homease"}
          </h2>
        </Link>
      </div>

      {/* Desktop actions (md and up) */}
      <div className="hidden md:flex items-center gap-6">
        <LanguageSwitcher />

        <div className="flex gap-2 items-center">
          {user ? (
            <Link to="make-request">
              <Button variant="primary">{t("navbar.actions.postRequest") || "Post Request"}</Button>
            </Link>
          ) : (
            <Link to="signup">
              <Button variant="primary">{t("navbar.actions.signup") || "Signup"}</Button>
            </Link>
          )}

          {/* Active toggle + Avatar */}
          {user ? (
            <div className="flex items-center gap-3 relative" ref={avatarRef}>
              {/* Toggle */}
              <button
                onClick={handleToggle}
                aria-pressed={isToggled}
                className="relative w-[50px] h-[26px] rounded-full focus:outline-none"
                style={{ backgroundColor: isToggled ? "#4CAF50" : "#ccc" }}
                title={isToggled ? "Set Inactive" : "Set Active"}
              >
                <span
                  className="absolute top-[2px] w-[22px] h-[22px] bg-white rounded-full transition-left duration-300"
                  style={{ left: isToggled ? "26px" : "2px", transition: "left 0.25s" }}
                />
              </button>
              {/* Avatar */}
              <div
                onClick={() => setIsAvatarOpen((s) => !s)}
                className="ml-2 bg-center bg-no-repeat bg-cover rounded-full w-10 h-10 cursor-pointer border border-transparent hover:border-[#29382f]"
                style={{ backgroundImage: `url("${user.avatar}")` }}
                aria-haspopup="true"
                aria-expanded={isAvatarOpen}
                role="button"
                title="Open menu"
              />

              {/* Avatar dropdown */}
              {isAvatarOpen && (
                <div className={`absolute ${isRTL ? "left-0" : "right-0"} top-14 w-64 bg-[#111714] border border-[#29382f] rounded shadow-lg z-20 p-2`}>
                  <div className="px-3 py-2">
                    <div className="text-white text-sm font-medium mb-2">{user.name || user.email}</div>
                    <div className="text-xs text-gray-300 mb-3">Status: {isToggled ? "Active" : "Inactive"}</div>
                    <div className="flex flex-col gap-2">
                      <Link
                        to="/profile"
                        onClick={() => setIsAvatarOpen(false)}
                        className="w-full text-white text-left px-4 py-2 bg-[#111714] border border-[#29382f] rounded hover:bg-[#29382f]"
                      >
                        Profile
                      </Link>
                      <button
                        onClick={onLogout}
                        className="w-full text-white text-left px-4 py-2 bg-[#111714] border border-[#29382f] rounded hover:bg-[#29382f]"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <Button variant="secondary">{t("navbar.actions.login") || "Login"}</Button>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile: hamburger */}
      <div className="md:hidden flex items-center gap-3">
        <LanguageSwitcher />

        <button
          onClick={() => setIsMobileOpen((s) => !s)}
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          className="p-2 rounded-md focus:outline-none"
        >
          {/* Simple hamburger / close icon */}
          {!isMobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M6 6l12 12M6 18L18 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      {isMobileOpen && (
        // overlay to dim background (optional)
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/40" />

          <nav
            ref={mobileMenuRef}
            className={`absolute ${isRTL ? "left-3" : "right-3"} top-16 w-[90%] max-w-xs bg-[#111714] border border-[#29382f] rounded shadow-lg z-50 p-4`}
          >
            {/* Show user info on top */}
            <div className="flex items-center justify-center gap-3 mb-3">
              {user ? (
                <>
                  <div
                    className="w-20 h-20 rounded-full mt-5 mb-2 bg-center bg-cover"
                    style={{ backgroundImage: `url("${user.avatar}")` }}
                    aria-hidden
                  />
                  <div className="text-white text-sm">{user.name || user.email}</div>
                </>
              ) : (
                <div className="text-white text-sm">{t("navbar.brand.title") || "Homease"}</div>
              )}
            </div>

            <MobileMenuContent
              onClickItem={() => {
                setIsMobileOpen(false);
              }}
            />
          </nav>
        </div>
      )}
    </header>
  );
};
