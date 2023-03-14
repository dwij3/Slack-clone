//hooks
import { useQuery } from "./useQuery";
import { useUserId } from "./UserContext";
//type
import { User } from "../types/types";

type UseUserQuery = { userInfo: User; loading: boolean; error: boolean };

export const useUserQuery = (): UseUserQuery => {
  const userId = useUserId();
  const isValidUrl = !!userId;
  const { data, loading, error } = useQuery(
    `http://localhost:3000/getCurrentUserInfo/${userId}`,
    isValidUrl
  );
  const userInfo = data;
  return { userInfo, loading, error };
};
