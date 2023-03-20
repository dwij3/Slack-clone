//components
import { TimeStampBar } from "../../../../../../../timeStampBar";
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
    <>
      {groupOfMessages.length ? (
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
      ) : null}
    </>
  );
};
