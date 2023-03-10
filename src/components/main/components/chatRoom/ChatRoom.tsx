import styles from "./ChatRoom.module.css";
import ChatArea from "./components/charArea";
import TeamMateProfile from "./components/teamMateProfile";
import AddMessage from "./components/addMessage/AddMessage";
import { ChatRoomProps } from "./type";
import useMessages from "./components/hooks/useMessages";

const ChatRoom = ({ activeTeamMateId }: ChatRoomProps) => {
  const { onAction, filterMessage } = useMessages();
  return (
    <div className={styles.chatRoom}>
      <TeamMateProfile activeTeamMateId={activeTeamMateId} />
      <ChatArea
        activeTeamMateId={activeTeamMateId}
        filterMessage={filterMessage}
      />
      <AddMessage activeTeamMateId={activeTeamMateId} onAction={onAction} />
    </div>
  );
};

export default ChatRoom;
