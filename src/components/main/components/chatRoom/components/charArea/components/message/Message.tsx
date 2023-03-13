//style
import styles from "./Message.module.css";

//components
import Avatar from "../../../../../../../avatar/Avatar";

//hooks
import useTeamMates from "../../../../../../../../hooks/useTeamMates";

//type
import { MessageProps } from "./type";

const Message = ({ message, lastMessageRef }: MessageProps) => {
  const ownerId: number | string = message?.from;

  const { teamMates } = useTeamMates();
  const owner = teamMates?.find((teamMate: any) => teamMate.id === ownerId);
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
export default Message;
