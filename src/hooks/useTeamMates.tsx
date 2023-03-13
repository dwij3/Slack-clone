import { useState, useEffect } from "react";
import { useUserId } from "./UserContext";

const useTeamMates = () => {
  const [teamMates, setTeamMates] = useState<any>([]);
  const userId = useUserId();
  useEffect(() => {
    fetch(`http://localhost:3000/getUserTeamMates/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        setTeamMates(json);
      })
      .catch((err) => console.error(`Fetch problem: ${err.message}`));
  }, [userId]);

  return { teamMates };
};

export default useTeamMates;
