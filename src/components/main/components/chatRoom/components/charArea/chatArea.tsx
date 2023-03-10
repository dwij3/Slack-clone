import styles from "./chatArea.module.css";
import TeamMateIntro from "./components/teamMateIntro/TeamMateIntro";
import Message from "./components/message/Message";
import { ChatAreaProps, MESSAGE } from "./type";
import { useUserId } from "../../../../../../hooks/UserContext";
import { useEffect, useRef } from "react";

const ChatArea = ({ activeTeamMateId, filterMessage }: ChatAreaProps) => {
  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView();
    }
  });

  let userId = useUserId();
  const conversation = filterMessage(userId, activeTeamMateId);
  return (
    <div className={styles.displayMessage}>
      <TeamMateIntro activeTeamMateId={activeTeamMateId} />
      {conversation.map(
        (message: MESSAGE, idx: number, conversation: MESSAGE[]) => {
          if (idx === conversation.length - 1) {
            return (
              <Message
                key={message.id}
                message={message}
                lastMessageRef={lastMessageRef}
              />
            );
          }

          return <Message key={message.id} message={message} />;
        }
      )}
    </div>
  );
};

export default ChatArea;
