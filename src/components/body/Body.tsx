//libs
import { useCallback, useEffect, useState } from "react";

//components
import { SideBar } from "./components/sideBar/SideBar";
import { ChatRoom } from "./components/chatRoom/ChatRoom";

//hook
import { useUserQuery } from "../../hooks/useUserQuery";

//type
import { User } from "../../types/types";

//style
import styles from "./Body.module.css";
import { useUserId } from "../../hooks/UserContext";

export const Body = () => {
  const userId = useUserId();
  const { userInfo } = useUserQuery(userId);

  //activeTeamMate has the information about teamMate user currently chatting with
  const [activeTeamMate, setActiveTeamMate] = useState<User>(userInfo);

  useEffect(() => {
    setActiveTeamMate(userInfo);
  }, [userInfo]);

  const handleClick = useCallback((activeTeamMate: User) => {
    setActiveTeamMate(activeTeamMate);
  }, []);

  return (
    <div className={styles.body}>
      <SideBar
        onChangeActiveTeamMate={handleClick}
        activeTeamMate={activeTeamMate}
      />
      <ChatRoom activeTeamMate={activeTeamMate} />
    </div>
  );
};
