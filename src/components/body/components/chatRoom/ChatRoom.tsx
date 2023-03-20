//style
import styles from "./ChatRoom.module.css";

//components
import { ChatArea } from "./components/charArea";
import { TeamMateProfile } from "./components/teamMateProfile";
import { AddMessage } from "./components/addMessage/AddMessage";
import { Spinner } from "../../../spinner/Spinner";
import { ErrorState } from "../../../error/ErrorState";

//hooks and libs
import { useChatRoom } from "../../../../hooks/useChatRoom";
import { useUserId } from "../../../useContext/UserContext";
import { useTeamMateQuery } from "../../../../hooks/useTeamMateQuery";

type ChatRoomProps = {
  activeTeamMateId: string;
};

export const ChatRoom = ({ activeTeamMateId }: ChatRoomProps) => {
  const userId = useUserId();
  const activeTeamMate = useTeamMateQuery(activeTeamMateId);

  const { chatRoom, onAction, loading, error } = useChatRoom(
    userId,
    activeTeamMateId
  );

  if (error) return <ErrorState />;
  if (loading) <Spinner size={100} color="#52bfd9" />;
  return (
    <div className={styles.chatRoom}>
      <TeamMateProfile activeTeamMate={activeTeamMate} />

      <ChatArea activeTeamMate={activeTeamMate} chat={chatRoom?.messages} />
      <AddMessage activeTeamMate={activeTeamMate} onAction={onAction} />
    </div>
  );
};
