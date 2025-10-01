import { formatDistance, parseISO } from "date-fns";
import { Link } from "react-router-dom";
import { useConfirmed } from "./useConfirmed";
import { useReject } from "./useReject";
import Menu from "../../ui/Menu";

function Article({ article }) {
  const { confirm, confirming } = useConfirmed();
  const { reject, rejecting } = useReject();

  const { title, content, created_at, id } = article;

  console.log("🔍 DEBUG: My content of article is:", content);

  const displayContent = content.split(".").slice(0, 1).join("");

  console.log("🔍 DEBUG: my display content is:", displayContent);

  const publishDate = formatDistance(parseISO(created_at), new Date(), {
    addSuffix: true,
  });

  console.log("🔍 DEBUG: Relative publishDate is:", publishDate);

  function handleConfirm() {
    const newStatus = {
      status: "confirmed",
      id,
    };

    confirm(newStatus);
  }

  function handleReject() {
    const newStatus = {
      status: "rejected",
      id,
    };

    reject(newStatus);
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="flex flex-col p-4 border-r border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <span className="text-sm text-gray-500">{publishDate}</span>
          </div>
          <div>
            <Menu
              articleId={id}
              onConfirm={handleConfirm}
              onReject={handleReject}
              confirming={confirming}
              rejecting={rejecting}
            />
          </div>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          {displayContent}
          <span>...</span>
        </p>
      </div>
    </div>
  );
}

export default Article;
