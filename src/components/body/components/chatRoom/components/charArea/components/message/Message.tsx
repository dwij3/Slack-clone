//style
import styles from "./Message.module.css";

//components
import { Avatar } from "../../../../../../../avatar/Avatar";

//type
import { Message as MessageType } from "../../../../../../../../types/types";
import { useUser } from "../../../../../../../../hooks/useUser";

type MessageProps = {
  message: MessageType;
  lastMessageRef: React.RefObject<HTMLDivElement> | null;
};

export const Message = ({ message, lastMessageRef }: MessageProps) => {
  const { userInfo: user } = useUser();

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
