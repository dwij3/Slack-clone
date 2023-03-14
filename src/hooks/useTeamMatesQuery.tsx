//hooks
import { useQuery } from "./useQuery";

//type
import { User } from "../types/types";


type UseTeamMatesQuery = {
  teamMates: User[];
  loading: boolean;
  error: boolean;
};

export const useTeamMatesQuery = (
  userId: string
): UseTeamMatesQuery => {
  const isValidUrl = !!userId;
  const {
    data: teamMates,
    loading,
    error,
  } = useQuery(`http://localhost:4000/getUserTeamMates/${userId}`, isValidUrl);
  return { teamMates, loading, error };
};
