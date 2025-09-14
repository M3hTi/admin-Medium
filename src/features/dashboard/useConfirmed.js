import { useMutation, useQueryClient } from "@tanstack/react-query";
import { resetArticleStatus } from "../../services/services";
import toast from "react-hot-toast";

export function useConfirmed() {
  const queryClient = useQueryClient();
  const { mutate: confirm, isPending: confirming } = useMutation({
    mutationFn: (article) => resetArticleStatus(article),

    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });

      toast.success(`${data.title} status updated 🎉`);
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { confirm, confirming };
}
