import styles from "./Message.module.css";
import Avatar from "../../../../../../../avatar/Avatar";
import { users } from "../../../../../../../../data/Users";
import getUserIdx from "../../../../../../../../data/getUserIdx";



const Message = ({ message, lastMessageRef }: any) => {

  const ownerId: number = message.from;
  const ownerIdx: number | string = getUserIdx(ownerId);
  const ownerImage = users[ownerIdx].photo;
  const ownerName = users[ownerIdx].name;
  const content: string = message.content;
  const currentTime = message.date;

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
