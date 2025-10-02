import { Link } from "react-router-dom";
import EllipsisProvider from "./EllipsisButton";
import { FiMoreHorizontal } from "react-icons/fi";

function Menu({
  articleId,
  onConfirm,
  onReject,
  confirming,
  rejecting,
  activeTab,
  setActiveTab,
}) {
  return (
    <div>
      <EllipsisProvider activeTab={activeTab} setActiveTab={setActiveTab} articleId={articleId}>
        <EllipsisProvider.Button className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200 text-gray-600 hover:text-gray-900">
          <FiMoreHorizontal />
        </EllipsisProvider.Button>
        <EllipsisProvider.List className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-10">
          <EllipsisProvider.Item>
            <button
              onClick={onConfirm}
              className="w-ful cursor-pointer text-left px-4 py-2 text-sm text-green-700 hover:bg-green-50 transition-colors duration-200 flex items-center"
            >
              {confirming ? "Confirming..." : "Confirm"}
            </button>
          </EllipsisProvider.Item>
          <EllipsisProvider.Item>
            <button
              onClick={onReject}
              className="w-full cursor-pointer text-left px-4 py-2 text-sm text-red-700 hover:bg-red-50 transition-colors duration-200 flex items-center"
            >
              {rejecting ? "Rejecting..." : "Rejected"}
            </button>
          </EllipsisProvider.Item>
          <EllipsisProvider.Item>
            <Link
              to={`${articleId}`}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              See More
            </Link>
          </EllipsisProvider.Item>
        </EllipsisProvider.List>
      </EllipsisProvider>
    </div>
  );
}

export default Menu;
