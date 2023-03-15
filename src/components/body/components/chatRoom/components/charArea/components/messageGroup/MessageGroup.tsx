//components
import { StickyDay } from "../../../../../../../stickyDay";
import { Message } from "../message/Message";

//styles
import styles from "./MessageGroup.module.css";

//type
import {
  Message as MessageType,
  User,
} from "../../../../../../../../types/types";
type MessageGroupProps = {
  groupOfMessages: MessageType[];
  activeTeamMate: User;
  lastMessageRef: React.RefObject<HTMLDivElement> | null;
};
export const MessageGroup = ({
  groupOfMessages,
  activeTeamMate,
  lastMessageRef,
}: MessageGroupProps) => {
  return (
    <div className={styles.messageGroupContainer}>
      <StickyDay day={groupOfMessages[0].day} />
      {groupOfMessages.map((message: MessageType, idx) => (
        <Message
          key={message.id}
          message={message}
          lastMessageRef={
            idx === groupOfMessages.length - 1 ? lastMessageRef : null
          }
          activeTeamMate={activeTeamMate}
        />
      ))}
    </div>
  );
};
