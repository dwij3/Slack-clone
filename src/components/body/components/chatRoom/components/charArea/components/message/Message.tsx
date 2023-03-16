//components
import { Avatar } from "../../../../../../../avatar/Avatar";

//hooks
import { useUserQuery } from "../../../../../../../../hooks/useUserQuery";

//types
import {
  Message as MessageType,
  User,
} from "../../../../../../../../types/types";

//styles
import styles from "./Message.module.css";
import { useUserId } from "../../../../../../../../hooks/UserContext";

type MessageProps = {
  message: MessageType;
  lastMessageRef: React.RefObject<HTMLDivElement> | null;
  activeTeamMate: User;
};

export const Message = ({
  message,
  lastMessageRef,
  activeTeamMate,
}: MessageProps) => {
  const userId = useUserId();
  const { userInfo: user } = useUserQuery(userId);

  const owner = message.from === userId ? user : activeTeamMate;

  return (
    <div className={styles.message} ref={lastMessageRef}>
      <div className={styles.avatar}>
        <Avatar
          src={owner?.photo}
          alt={owner?.name}
          height="36px"
          width="36px"
        />
      </div>

      <div className={styles.messageDetails}>
        <div className={styles.userDetail}>
          <span className={styles.userName}>{owner?.name}</span>
          <span className={styles.currentTime}>{message.date}</span>
        </div>
        <div className={styles.content}>{message.content}</div>
      </div>
    </div>
  );
};
