import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { resetArticleStatus } from "../../services/services";

export function useReject() {
  const queryClient = useQueryClient();
  const { mutate: reject, isPending: rejecting } = useMutation({
    mutationFn: (article) => resetArticleStatus(article),

    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });

      toast.success(`${data.title} status updated `);
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { reject, rejecting };
}
