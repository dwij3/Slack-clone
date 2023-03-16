//hooks
import { useQuery } from "./useQuery";
//type
import { User } from "../types/types";

type UseUserQuery = { userInfo: User; loading: boolean; error: boolean };

export const useUserQuery = (userId: string): UseUserQuery => {
  const isValidUrl = !userId;
  const { data, loading, error } = useQuery(
    `http://localhost:4000/getCurrentUserInfo/${userId}`,
    isValidUrl
  );
  const userInfo = data;
  return { userInfo, loading, error };
};
