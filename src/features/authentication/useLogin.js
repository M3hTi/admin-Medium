import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/services";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (data) => {
      console.log("📝 LOG: user is:", data);
      toast.success("You loogged in Successfully");

      queryClient.setQueryData(["user"], data.user);

      navigate("/dashboard");
    },

    onError: (err) => {
      console.log("❌ ERROR: error is:", err.message);

      toast.error(err.message);
    },
  });

  return { login };
}
