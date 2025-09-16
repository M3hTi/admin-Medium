import { Link } from "react-router-dom";
import logo from "/medium.png";
import { useUser } from "../features/authentication/useUser.js";

function Header() {
  const { user } = useUser();
  return (
    <header className="flex justify-between items-center border border-b-1 border-gray-200 p-2">
      <Link
        to="/dashboard"
        className="flex items-center gap-2 text-black hover:text-gray-700 transition-colors duration-200"
      >
        <img src={logo} alt="medium-alternative-logo" className="w-10" />
        <span className="text-xl font-semibold tracking-tight">Medium</span>
        <span className="text-sm text-gray-500 font-normal">Free Articles</span>
      </Link>

      <div className="flex items-center gap-1.5">
        {user.user_metadata.avatar_url && <span>{
          <img src={user.user_metadata.avatar_url} alt="avatar" className="rounded-full w-9" />
          }</span>}
        <span className="font-bold">Welcome{`, ${user.user_metadata.full_name}`}</span>
      </div>
    </header>
  );
}

export default Header;
