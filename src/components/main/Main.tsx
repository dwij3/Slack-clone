import styles from "./Main.module.css";
import SideBar from "./components/sideBar/SideBar";
import ChatRoom from "./components/chatRoom/ChatRoom";
import { useCallback, useState } from "react";

const Main = () => {
  const [teamMateId, setTeamMateId] = useState(1);
  const handleClick = useCallback((updatedTeamMateId: number) => {
    setTeamMateId(updatedTeamMateId);
  }, []);


  return (
    <div className={styles.Main}>
      <SideBar onClick={handleClick} />
      <ChatRoom teamMateId={teamMateId} />
    </div>
  );
};

export default Main;
