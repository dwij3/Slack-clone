//style
import styles from "./ChatRoom.module.css";

//components
import { ChatArea } from "./components/charArea";
import { TeamMateProfile } from "./components/teamMateProfile";
import { AddMessage } from "./components/addMessage/AddMessage";
import { Spinner } from "../../../spinner/Spinner";
import { Error } from "../../../error/Error";

//hooks and libs
import { useChatRoom } from "../../../../hooks/useChatRoom";
import { useUserId } from "../../../../hooks/UserContext";

//type
import { User } from "../../../../types/types";

type ChatRoomProps = {
  activeTeamMate: User;
};

export const ChatRoom = ({ activeTeamMate }: ChatRoomProps) => {
  const userId = useUserId();

  const { chatRoom, onAction, loading, error } = useChatRoom(
    userId, 
    activeTeamMate?.id
  );

  if(error) return <Error />
  if(loading) <Spinner size={100} color="#52bfd9" />
  return (
    <div className={styles.chatRoom}>
          <TeamMateProfile activeTeamMate={activeTeamMate} />

          <ChatArea
            activeTeamMate={activeTeamMate}
            chat={chatRoom?.messageIds}
          />
          <AddMessage activeTeamMate={activeTeamMate} onAction={onAction} />
    </div>
  );
};
