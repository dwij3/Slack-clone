//hooks
import { useQuery } from "./useQuery";
//type
import { User } from "../types/types";

//utils
import { fetchApi } from "../utils/fetchApi";

type UseUserQuery = { userInfo: User; loading: boolean; error: boolean };

export const useUserQuery = (userId: string): UseUserQuery => {
  const isValidUrl = !userId;
  const { data, loading, error } = useQuery(
    fetchApi,
    `http://localhost:4000/getCurrentUserInfo/${userId}`,
    isValidUrl
  );
  const userInfo = data;
  return { userInfo, loading, error };
};
