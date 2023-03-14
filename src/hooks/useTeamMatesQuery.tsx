//hook
import { useUserId } from "./UserContext";

//type
import { User } from "../types/types";
import { useQuery } from "./useQuery";

type UseTeamMatesQuery = {
  teamMates: User[];
  loading: boolean;
  error: boolean;
};

export const useTeamMatesQuery = (): UseTeamMatesQuery => {
  const userId = useUserId();
  const isValidUrl = !!userId;
  const {
    data: teamMates,
    loading,
    error,
  } = useQuery(`http://localhost:3000/getUserTeamMates/${userId}`, isValidUrl);
  return { teamMates, loading, error };
};
