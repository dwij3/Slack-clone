//components
import { ChatArea } from "./components/charArea";
import { TeamMateProfile } from "./components/teamMateProfile";
import { AddMessage } from "./components/addMessage/AddMessage";
import { Spinner } from "../../../spinner/Spinner";
import { ErrorState } from "../../../errorState/ErrorState";

//hooks 
import { useChatRoom } from "../../../../hooks/useChatRoom";
import { useUserId } from "../../../useContext/UserContext";
import { useUserQuery } from "../../../../hooks/useUserQuery";

//style
import styles from "./ChatRoom.module.css";

type ChatRoomProps = {
  activeTeamMateId: string;
};

export const ChatRoom = ({ activeTeamMateId }: ChatRoomProps) => {
  const userId = useUserId();
  const { userInfo: activeTeamMate } = useUserQuery(activeTeamMateId);

  const {
    data: chatRoom,
    onAction,
    loading,
    error,
  } = useChatRoom(userId, activeTeamMateId);

  if (error) return <ErrorState />;
  if (loading) return <Spinner size={100} color="#52bfd9" />;
  return (
    <div className={styles.chatRoom}>
      <TeamMateProfile activeTeamMate={activeTeamMate} />
      <ChatArea activeTeamMate={activeTeamMate} chat={chatRoom?.messages} />
      <AddMessage activeTeamMate={activeTeamMate} onAction={onAction} />
    </div>
  );
};
