//style
import styles from "./chatArea.module.css";

//components
import TeamMateIntro from "./components/teamMateInfo/TeamMateInfo";
import Message from "./components/message/Message";

//hooks
import { ChatAreaProps, MessageType } from "./type";
import { useEffect, useRef } from "react";

const ChatArea = ({ activeTeamMateId, chat }: ChatAreaProps) => {
  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView();
    }
  });
  return (
    <div className={styles.displayMessage}>
      <TeamMateIntro activeTeamMateId={activeTeamMateId} />
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

export default ChatArea;
