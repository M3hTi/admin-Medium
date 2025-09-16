import { useQuery } from "@tanstack/react-query";
import { useUser } from "../authentication/useUser";
import { getAdmin } from "../../services/services";

export function useAdmin() {
  const { user } = useUser();

  console.log(
    "%c🔍 DEBUG: admin information",
    "color: #9CA3AF; font-weight: bold",
    user
  );

  const adminId = user?.id;

  const { data: admin, isLoading } = useQuery({
    queryKey: ["admin"],
    queryFn: () => getAdmin(adminId),
  });

  return { admin, isLoading };
}
