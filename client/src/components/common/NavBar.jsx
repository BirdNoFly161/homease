import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/user/userSlice";
import { setAuthToken } from "../../redux/user/userSlice";
import { navLinks } from "../../constants";
import { BiMenu } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import API from "../../api";
import { useState } from "react";
import { ShoppingCart } from 'lucide-react';
import SearchBar from "./SearchBar";
import Button from "./Button";

function Navbar() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#29382f] px-10 py-3">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 text-white">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">SkillHub</h2>
        </div>
        <div className="flex items-center gap-9">
          <a className="text-white text-sm font-medium leading-normal" href="#">Browse</a>
          <a className="text-white text-sm font-medium leading-normal" href="#">For Pros</a>
        </div>
      </div>

      <div className="flex flex-1 justify-end gap-8">
        <SearchBar placeholder="Search" small />
        <div className="flex gap-2">
          <Button variant="primary">Post a request</Button>
          <Button variant="secondary">Log in</Button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
