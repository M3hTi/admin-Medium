import { useMutation } from "@tanstack/react-query";
import { updateAdmin } from "../../services/services";
import toast from "react-hot-toast";

export function useUpdateInfo() {
  const { mutate: updateInfo } = useMutation({
    mutationFn: (admin) => updateAdmin(admin),

    onSuccess: () => {
      toast.success("Your information successfully updated 🎉");
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateInfo };
}
