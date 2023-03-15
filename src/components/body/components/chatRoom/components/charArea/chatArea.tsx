//libs
import { useEffect, useRef } from "react";

//components
import { TeamMateInfo } from "./components/teamMateInfo/TeamMateInfo";
import { Message } from "./components/message/Message";

//type
import { Message as MessageType, User } from "../../../../../../types/types";

//style
import styles from "./chatArea.module.css";

type ChatAreaProps = {
  activeTeamMate: User;
  chat: MessageType[] | undefined;
};

export const ChatArea = ({ activeTeamMate, chat }: ChatAreaProps) => {
  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView();
    }
  });
  return (
    <div className={styles.displayMessage}>
      <TeamMateInfo activeTeamMate={activeTeamMate} />
      {chat
        ? chat.map((message: MessageType, idx: number) => (
            <Message
              key={message.id}
              message={message}
              lastMessageRef={idx === chat.length - 1 ? lastMessageRef : null}
              activeTeamMate = {activeTeamMate}
            />
          ))
        : null}
    </div>
  );
};
