//libs
import { useCallback, useState } from "react";

//components
import { SideBar } from "./components/sideBar/SideBar";
import { ChatRoom } from "./components/chatRoom/ChatRoom";

//hook
import { useUserId } from "../useContext/UserContext";

import styles from "./Body.module.css";

export const Body = () => {
  const userId = useUserId();
  const [activeTeamMateId, setActiveTeamMateId] = useState<string>(userId);

  const handleClick = useCallback((activeTeamMateId: string) => {
    setActiveTeamMateId(activeTeamMateId);
  }, []);

  return (
    <div className={styles.body}>
      <SideBar
        onChangeActiveTeamMateId={handleClick}
        activeTeamMateId={activeTeamMateId}
      />
      <ChatRoom activeTeamMateId={activeTeamMateId} />
    </div>
  );
};
