import { CgLogOut } from "react-icons/cg";
import { useLogout } from "./useLogout";

function Logout() {
  const { logout, isPending } = useLogout();
  return (
    <button
      onClick={logout}
      className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors duration-200 cursor-pointer"
    >
      <span>
        <CgLogOut />
      </span>
      <span>{isPending ? "Loging out..." : "Logout"}</span>
    </button>
  );
}

export default Logout;
