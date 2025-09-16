import { Link } from "react-router-dom";
import logo from "/medium.png";
import { useUser } from "../features/authentication/useUser.js";

function Header() {
  const { user } = useUser();
  return (
    <header className="flex flex-col space-y-3 sm:flex-row sm:justify-between sm:items-center sm:space-y-0 sm:p-4  border border-b-1 border-gray-200 p-3">
      <Link
        to="/dashboard"
        className="flex items-center justify-center sm:justify-start gap-2 text-black hover:text-gray-700 transition-colors duration-200"
      >
        <img src={logo} alt="medium-alternative-logo" className="w-8 sm:w-10" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
          <span className="text-lg sm:text-xl font-semibold tracking-tight">Medium</span>
          <span className="text-xs sm:text-sm text-gray-500 font-normal">
            Free Articles
          </span>
        </div>
      </Link>

      <div className="flex items-center justify-center sm:justify-end gap-2 sm:gap-1.5">
        {user.user_metadata.avatar_url && (
          <span>
            {
              <img
                src={user.user_metadata.avatar_url}
                alt="avatar"
                className="rounded-full w-8 sm:w-9 flex-shrink-0"
              />
            }
          </span>
        )}
        <span className="font-bold text-sm sm:text-base text-center sm:text-left">
          Welcome{`, ${user.user_metadata.full_name}`}
        </span>
      </div>
    </header>
  );
}

export default Header;
