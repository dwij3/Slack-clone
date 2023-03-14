//style
import styles from "./chatArea.module.css";

//components
import {TeamMateInfo} from "./components/teamMateInfo/TeamMateInfo";
import {Message} from "./components/message/Message";

//hooks
import { useEffect, useRef } from "react";

//type
import { Message as MessageType } from "../../../../../../types/types";
type ChatAreaProps = {
  activeTeamMateId: number|string;
  chat: MessageType[] | undefined;
};

export const ChatArea = ({ activeTeamMateId, chat }: ChatAreaProps) => {
  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView();
    }
  });
  return (
    <div className={styles.displayMessage}>
      <TeamMateInfo activeTeamMateId={activeTeamMateId} />
      {chat
        ? chat.map((message: MessageType, idx: number) => (
            <Message
              key={message.id}
              message={message}
              lastMessageRef={idx === chat.length - 1 ? lastMessageRef : null}
            />
          ))
        : null}
    </div>
  );
};

