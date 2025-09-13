import { Link } from "react-router-dom";
import  logo  from "/medium.png";

function Header() {
  return (
    <header className="flex justify-between items-center border border-b-1 border-gray-200 p-2">
      <Link
        to="/dashboard"
        className="flex items-center gap-2 text-black hover:text-gray-700 transition-colors duration-200"
      >
        <img src={logo} alt="medium-alternative-logo" className="w-10" />
        <span class="text-xl font-semibold tracking-tight">Medium</span>
        <span class="text-sm text-gray-500 font-normal">Free Articles</span>
      </Link>

      <div>
        <span>Welcome, Mehdi</span>
      </div>
    </header>
  );
}

export default Header;
