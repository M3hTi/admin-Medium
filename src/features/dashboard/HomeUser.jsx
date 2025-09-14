import Spinner from "../../ui/Spinner";
import Article from "./Article";
import { useArticles } from "./useArticles";

function HomeUser() {
  const { articles, isLoading } = useArticles();

  console.log("📝 LOG: Articles are:", articles);

  if (isLoading) {
    return <Spinner />;
  }

  if (articles?.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)] bg-gray-50">
        <div className="text-center space-y-3">
          <div className="text-4xl">📝</div>
          <h2 className="text-xl font-semibold text-gray-900">
            No Articles Found
          </h2>
          <p className="text-sm text-gray-600">
            There are no articles to display at the moment.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {articles?.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
}

export default HomeUser;
