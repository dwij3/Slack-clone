//hooks
// import { useState, useEffect } from "react";
import { useUserId } from "./UserContext";

//type
import { User } from "../types/types";
import { useQuery } from "./useQuery";

type UseTeamMates = {
  teamMates: User[];
  loading: boolean;
  error: boolean;
};

export const useTeamMates = (): UseTeamMates => {
  const userId = useUserId();
  const {
    data: teamMates,
    loading,
    error,
  } = useQuery(`http://localhost:3000/getUserTeamMates/${userId}`);
  return { teamMates, loading, error };
};
