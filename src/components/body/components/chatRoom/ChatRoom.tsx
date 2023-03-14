//style
import styles from "./ChatRoom.module.css";

//components
import { ChatArea } from "./components/charArea";
import { TeamMateProfile } from "./components/teamMateProfile";
import { AddMessage } from "./components/addMessage/AddMessage";
import { Spinner } from "../../../spinner/Spinner";
import { Error } from "../../../error/Error";

//hooks
import { useChatRoom } from "../../../../hooks/useChatRoom";
import { useUserId } from "../../../../hooks/UserContext";

//type
type ChatRoomProps = {
  activeTeamMateId: number | string;
};

export const ChatRoom = ({ activeTeamMateId }: ChatRoomProps) => {
  const userId = useUserId();
  const { chatRoom, onAction, loading, error } = useChatRoom(
    userId,
    activeTeamMateId
  );

  if (loading) return <Spinner />;
  if (error) return <Error />;
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
