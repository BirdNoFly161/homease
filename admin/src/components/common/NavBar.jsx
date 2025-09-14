import { Link } from "react-router-dom";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Button from "./Button";
import { useDispatch, useSelector} from "react-redux";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);


  return (
    <header className="fixed w-full z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#29382f] px-10 py-3 bg-[#111714]">
      <div className="flex items-center gap-8">
        <Link className="flex items-center gap-4 text-white" to="/">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Homease Admin</h2>
        </Link>
        <div className="flex items-center gap-9">
          <Link className="text-white text-sm font-medium leading-normal" to="/browse-professionals">
            Browse
          </Link>
            <Link className="text-white text-sm font-medium leading-normal" to="/requests">
            Requests
          </Link>
        </div>
      </div>

      <div className="flex flex-1 justify-end gap-8">
        <SearchBar placeholder="Search" small />
        <div className="flex gap-2 items-center">
          <Button variant="primary">Post a request</Button>

          {user ? (
            <Link to="/profile/dashboard">
              <div
                className="ml-2 bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{
                  backgroundImage: `url("${user.avatar}")`,
                }}
              ></div>
            </Link>
          ) : (
            <Link to="/login">
              <Button variant="secondary" onClick={() => setIsLoggedIn(true)}>
                Log in
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default NavBar;
