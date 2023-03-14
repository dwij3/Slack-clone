//style
import styles from "./Body.module.css";

//components
import { SideBar } from "./components/sideBar/SideBar";
import { ChatRoom } from "./components/chatRoom/ChatRoom";

//hooks and libs
import { useCallback, useEffect, useState } from "react";

//type
import { User } from "../../types/types";
import { useUser } from "../../hooks/useUser";

export const Body = () => {
  const { userInfo } = useUser();

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
