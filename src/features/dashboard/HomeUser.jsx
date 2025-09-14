import Spinner from "../../ui/Spinner";
import Article from "./Article";
import { useArticles } from "./useArticles";

function HomeUser() {
  const { articles, isLoading } = useArticles();

  console.log("📝 LOG: Articles are:", articles);

  
  if(isLoading){
    return <Spinner />
  }




  return <div>
    {articles.map(article => (
        <Article key={article.id} article={article} />
    ))}
  </div>;
}

export default HomeUser;
