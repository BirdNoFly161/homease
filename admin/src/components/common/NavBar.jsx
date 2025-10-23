import { Link } from "react-router-dom";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);


  return (
    <header className="fixed w-full z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#29382f] px-10 py-3 bg-[#111714]">
      <div className="flex items-center gap-8">
        <Link className="flex items-center gap-4 text-white" to="/">
          <div className="size-16 rounded">
            <img className="rounded-full" src="/homease_logo.jpg" />
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Homease Admin</h2>
        </Link>
        <div className="flex items-center gap-9">
          <Link className="text-white text-sm font-medium leading-normal" to="/browse-professionals">
            Browse Professionals
          </Link>
          <Link className="text-white text-sm font-medium leading-normal" to="/requests">
            Requests
          </Link>
        </div>
      </div>

    </header>
  );
}

export default NavBar;
