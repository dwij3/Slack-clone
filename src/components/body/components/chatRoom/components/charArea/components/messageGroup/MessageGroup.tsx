//components
import { TimeStampBar } from "../../../../../../../timeStampBar";
import { Message } from "../message/Message";

//type
import {
  Message as MessageType,
  User,
} from "../../../../../../../../types/types";

//styles
import styles from "./MessageGroup.module.css";

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
      <TimeStampBar day={groupOfMessages?.[0]?.day} />
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
