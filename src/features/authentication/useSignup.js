import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/services";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup } = useMutation({
    mutationFn: (info) => signupApi(info),

    onSuccess: (data) => {
      console.log(
        "%cℹ️ INFO: new user info is:",
        "color: #3B82F6; font-weight: bold",
        data
      );
      toast.success(`You Successfully created new Account 🎉`);
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {signup}
}
