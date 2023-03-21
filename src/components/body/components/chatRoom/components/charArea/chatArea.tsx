//libs
import { useEffect, useRef, useMemo } from "react";

//components
import { TeamMateInfo } from "./components/teamMateInfo/TeamMateInfo";
import { MessageGroup } from "./components/messageGroup/MessageGroup";

//type
import { Message, User } from "../../../../../../types/types";

//styles
import styles from "./chatArea.module.css";

//utils
import { groupSameDayMessages } from "../../../../../../utils/messageUtils";

type ChatAreaProps = {
  activeTeamMate: User;
  chat: Message[] | undefined;
};

export const ChatArea = ({ activeTeamMate, chat }: ChatAreaProps) => {
  const lastMessageRef = useRef<HTMLDivElement>(null);

  const sameDayMessages = useMemo(() => {
    return groupSameDayMessages(chat);
  }, [chat]);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView();
    }
  }, [chat]);

  return (
    <div className={styles.displayMessage}>
      <TeamMateInfo activeTeamMate={activeTeamMate} />
      {sameDayMessages.map((messageGroup, idx) => {
        return messageGroup.length > 0 ? (
          <MessageGroup
            key={messageGroup[0].id}
            groupOfMessages={messageGroup}
            activeTeamMate={activeTeamMate}
            lastMessageRef={
              idx === sameDayMessages?.length - 1 ? lastMessageRef : null
            }
          />
        ) : null;
      })}
    </div>
  );
};
