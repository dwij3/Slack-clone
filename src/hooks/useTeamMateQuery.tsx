import { useUserQuery } from "./useUserQuery";

const useTeamMateQuery = (id: string) => {
  const { userInfo: teamMate } = useUserQuery(id);

  return teamMate;
};

export { useTeamMateQuery };
