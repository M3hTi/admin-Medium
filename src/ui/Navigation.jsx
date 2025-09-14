import { FaPlus } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdOutlineArticle } from "react-icons/md";
import { Link } from "react-router-dom";
import Logout from "../features/authentication/Logout";

function Navigation() {
  return (
    <aside className="w-64  bg-gray-50 border-r border-gray-200 p-4 flex flex-col">
      <div>
        <nav className="space-y-2">
          <Link
            to="/dashboard"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
          >
            <MdOutlineArticle />
            Articles
          </Link>

          <Link
            to="/dashboard/edit"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
          >
            <FiEdit />
            Edit Account Info
          </Link>

          <Link
            to="/dashboard/create"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
          >
            <FaPlus />
            Create User
          </Link>
        </nav>
      </div>
      <div className="mt-auto px-3">
        <Logout />
      </div>
    </aside>
  );
}

export default Navigation;
