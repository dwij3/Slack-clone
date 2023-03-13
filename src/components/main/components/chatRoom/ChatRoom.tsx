//style
import styles from "./ChatRoom.module.css";

//components
import ChatArea from "./components/charArea";
import TeamMateProfile from "./components/teamMateProfile";
import AddMessage from "./components/addMessage/AddMessage";

//type
import { ChatRoomProps } from "./type";

//hooks
import useChatRoom from "../../../../hooks/useChatRoom";
import { useUserId } from "../../../../hooks/UserContext";

const ChatRoom = ({ activeTeamMateId }: ChatRoomProps) => {
  const userId = useUserId();
  const { chatRoom, onAction } = useChatRoom(userId, activeTeamMateId);
  return (
    <div className={styles.chatRoom}>
      <TeamMateProfile activeTeamMateId={activeTeamMateId} />
      <ChatArea
        activeTeamMateId={activeTeamMateId}
        chat={chatRoom?.messageIds}
      />
      <AddMessage activeTeamMateId={activeTeamMateId} onAction={onAction} />
    </div>
  );
};

export default ChatRoom;
