import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/services";

export function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  const isAuthenticate = user?.role === "authenticated";

  console.log("🔍 DEBUG: isLoding", isLoading);
  console.log("🔍 DEBUG: user is:", user);
  console.log("🔍 DEBUG: if user is authenticated?", isAuthenticate);

  return { user, isLoading, isAuthenticate };
}
