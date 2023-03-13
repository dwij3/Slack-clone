//hooks
import { useUserId } from "./UserContext";
import { useEffect, useState } from "react";

//type
import { User } from "./type";

const useUser = () => {
  const userId = useUserId();
  const [userInfo, setUserInfo] = useState<User | null>(null);
  useEffect(() => {
    fetch(`http://localhost:3000/getCurrentUserInfo/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        setUserInfo(json);
      })
      .catch((err) => console.error(`Fetch problem: ${err.message}`));
  }, [userId]);

  return { userInfo };
};

export default useUser;
