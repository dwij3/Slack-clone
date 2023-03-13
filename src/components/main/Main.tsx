import styles from "./Main.module.css";
import SideBar from "./components/sideBar/SideBar";
import ChatRoom from "./components/chatRoom/ChatRoom";
import { useCallback, useState } from "react";
import { useUserId } from "../../hooks/UserContext";

const Main = () => {
  const userId = useUserId();
  const [activeTeamMateId, setActiveTeamMateId] = useState<number>(userId);

  const handleClick = useCallback((updatedTeamMateId: number) => {
    setActiveTeamMateId(updatedTeamMateId);
  }, []);

  return (
    <div className={styles.main}>
      <SideBar onClick={handleClick} activeTeamMateId={activeTeamMateId} />
      <ChatRoom activeTeamMateId={activeTeamMateId} />
    </div>
  );
};

export default Main;
