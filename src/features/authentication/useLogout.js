import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logouut as logoutApi } from "../../services/services";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutApi,

    onSuccess: () => {
      toast.success("You successfully logged out");

      queryClient.invalidateQueries({queryKey: ["user"]})

      navigate("/");
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { logout, isPending };
}
