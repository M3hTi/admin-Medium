import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/services";

export function useLogin() {
  const { mutate: login } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (data) => {
      console.log("📝 LOG: user is:", data);
    },

    onError: (err) => {
      console.log("❌ ERROR: error is:", err.message);
    },
  });

  return { login };
}
