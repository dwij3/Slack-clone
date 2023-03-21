//hooks
import { useQuery } from "./useQuery";

//type
import { User } from "../types/types";

//utils
import { fetchApi } from "../utils/fetchApi";

type UseTeamMatesQuery = {
  teamMates: User[];
  loading: boolean;
  error: Error | undefined;
};

export const useTeamMatesQuery = (userId: string): UseTeamMatesQuery => {
  const isValidUrl = !userId;
  const {
    data: teamMates,
    loading,
    error,
  } = useQuery(
    fetchApi,
    `http://localhost:4000/getUserTeamMates/${userId}`,
    isValidUrl
  );
  return { teamMates, loading, error };
};
