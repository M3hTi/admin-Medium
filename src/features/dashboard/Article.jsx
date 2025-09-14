import { formatDistance, parseISO } from "date-fns";
import { Link } from "react-router-dom";

function Article({ article }) {
  const { title, content, created_at, id } = article;

  console.log("🔍 DEBUG: My content of article is:", content);

  const displayContent = content.split(".").slice(0, 1).join("");

  console.log("🔍 DEBUG: my display content is:", displayContent);

  const publishDate = formatDistance(parseISO(created_at), new Date(), {
    addSuffix: true,
  });

  console.log("🔍 DEBUG: Relative publishDate is:", publishDate);

  return (
    <div className="grid grid-cols-[1fr_250px] bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      <div className="flex flex-col p-4 border-r border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <span className="text-sm text-gray-500">{publishDate}</span>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          {displayContent}
          <span>...</span>
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex-1 p-2 border-b border-gray-200">
          <button className="cursor-pointer w-full h-full px-3 py-2 text-sm font-medium text-green-700 bg-white border border-green-200 rounded-md hover:bg-green-50 hover:text-green-800 transition-colors duration-200">
            Confirmed
          </button>
        </div>
        <div className="flex-1 p-2 border-b border-gray-200">
          <button className="cursor-pointer w-full h-full px-3 py-2 text-sm font-medium text-red-700 bg-white border border-red-200 rounded-md hover:bg-red-50 hover:text-red-800 transition-colors duration-200">
            Rejected
          </button>
        </div>
        <div className="flex-1 p-2">
          <Link
            to={`/dashboard/${id}`}
            className="flex items-center justify-center w-full h-full px-3 py-2 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
          >
            Preview
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Article;
