import { useQuery } from "@tanstack/react-query";
import { getArticles } from "../../services/services";

export function useArticles(articleId = "") {
  const { data: articles, isLoading } = useQuery({
    queryKey: ["articles", articleId],
    queryFn: () => getArticles(articleId),
  });

  return { articles, isLoading };
}
