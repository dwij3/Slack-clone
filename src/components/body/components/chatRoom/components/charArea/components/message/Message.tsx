//components
import { Avatar } from "../../../../../../../avatar/Avatar";

//hooks
import { useUserQuery } from "../../../../../../../../hooks/useUserQuery";

//types
import { Message as MessageType } from "../../../../../../../../types/types";

//styles
import styles from "./Message.module.css";
import { useUserId } from "../../../../../../../../hooks/UserContext";

type MessageProps = {
  message: MessageType;
  lastMessageRef: React.RefObject<HTMLDivElement> | null;
};

export const Message = ({ message, lastMessageRef }: MessageProps) => {
  const userId = useUserId();
  const { userInfo: user } = useUserQuery(userId);

  return (
    <div className={styles.message} ref={lastMessageRef}>
      <div className={styles.avatar}>
        <Avatar src={user?.photo} height="36px" width="36px" />
      </div>

      <div className={styles.messageDetails}>
        <div className={styles.userDetail}>
          <span className={styles.userName}>{user?.name}</span>
          <span className={styles.currentTime}>{message.date}</span>
        </div>
        <div className={styles.content}>{message.content}</div>
      </div>
    </div>
  );
};
