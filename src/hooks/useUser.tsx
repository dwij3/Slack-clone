//hooks
// import { useUserId } from "./UserContext";

//type
import { User } from "../types/types";
import { useQuery } from "./useQuery";
import { useUserId } from "./UserContext";

type UseUser = { userInfo: User; loading: boolean; error: boolean };

export const useUser = (): UseUser => {
  const userId = useUserId();
  const { data, loading, error } = useQuery(
    `http://localhost:3000/getCurrentUserInfo/${userId}`
  );
  const userInfo = data;
  return { userInfo, loading, error };
};
