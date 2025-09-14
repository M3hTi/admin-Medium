import { useQuery } from "@tanstack/react-query";
import { getArticles } from "../../services/services";

export function useArticles() {
  const { data: articles, isLoading } = useQuery({
    queryKey: ["articles"],
    queryFn: getArticles,
  });

  return { articles, isLoading };
}
