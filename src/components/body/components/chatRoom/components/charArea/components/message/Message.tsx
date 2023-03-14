//style
import styles from "./Message.module.css";

//components
import { Avatar } from "../../../../../../../avatar/Avatar";

//hooks
import { useTeamMates } from "../../../../../../../../hooks/useTeamMates";

//type
import {
  Message as MessageType,
  User,
} from "../../../../../../../../types/types";

type MessageProps = {
  message: MessageType;
  lastMessageRef: React.RefObject<HTMLDivElement> | null;
};

export const Message = ({ message, lastMessageRef }: MessageProps) => {
  const ownerId: number | string = message?.from;

  const { teamMates } = useTeamMates();
  const owner = teamMates?.find((teamMate: User) => teamMate.id === ownerId);
  const ownerImage = owner?.photo;
  const ownerName = owner?.name;
  const content: string = message?.content;
  const currentTime = message?.date;

  return (
    <div className={styles.message} ref={lastMessageRef}>
      <div className={styles.avatar}>
        <Avatar src={ownerImage} height="36px" width="36px" />
      </div>

      <div className={styles.messageDetails}>
        <div className={styles.userDetail}>
          <span className={styles.userName}>{ownerName}</span>
          <span className={styles.currentTime}>{currentTime}</span>
        </div>
        <div className={styles.content}>{content}</div>
      </div>
    </div>
  );
};
