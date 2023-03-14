//style
import styles from "./Body.module.css";

//components
import {SideBar} from "./components/sideBar/SideBar";
import {ChatRoom} from "./components/chatRoom/ChatRoom";

//hooks
import { useCallback, useState } from "react";
import { useUserId } from "../../hooks/UserContext";

export const Body = () => {
  const userId = useUserId();
  const [activeTeamMateId, setActiveTeamMateId] = useState<number | string>(userId);

  const handleClick = useCallback((updatedTeamMateId: number|string) => {
    setActiveTeamMateId(updatedTeamMateId);
  }, []);

  return (
    <div className={styles.body}>
      <SideBar onChangeActiveTeamMate={handleClick} activeTeamMateId={activeTeamMateId} />
      <ChatRoom activeTeamMateId={activeTeamMateId} />
    </div>
  );
};


