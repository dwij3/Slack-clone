import styles from "./Main.module.css";
import SideBar from "./components/sideBar/SideBar";
import ChatRoom from "./components/chatRoom/ChatRoom";
import { useCallback, useState } from "react";

const Main = () => {
  const [activeTeamMateId, setActiveTeamMateId] = useState<number>(1);
  const handleClick = useCallback((updatedTeamMateId: number) => {
    setActiveTeamMateId(updatedTeamMateId);
  }, []);

  return (
    <div className={styles.Main}>
      <SideBar onClick={handleClick} activeTeamMateId={activeTeamMateId} />
      <ChatRoom activeTeamMateId={activeTeamMateId} />
    </div>
  );
};

export default Main;
