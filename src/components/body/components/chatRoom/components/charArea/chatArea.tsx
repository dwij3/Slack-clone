//libs
import { useEffect, useRef, useMemo } from "react";

//components
import { TeamMateInfo } from "./components/teamMateInfo/TeamMateInfo";
// import { Message } from "./components/message/Message";
import { MessageGroup } from "./components/messageGroup/MessageGroup";

//type
import { Message as MessageType, User } from "../../../../../../types/types";

//style
import styles from "./chatArea.module.css";

type ChatAreaProps = {
  activeTeamMate: User;
  chat: MessageType[] | undefined;
};

const groupSameDayMessages = (
  chat: MessageType[] | undefined,
  dayArr: boolean[]
) => {
  if (!chat) return [];

  const sameDayMessages: MessageType[][] = [];

  let tempArr: MessageType[] = [];
  dayArr.forEach((ele: boolean, idx: number) => {
    if (ele && idx) {
      if (tempArr) sameDayMessages.push(tempArr);
      tempArr = [];
    }
    tempArr.push(chat?.[idx]);
  });
  if (tempArr) sameDayMessages.push(tempArr);
  return sameDayMessages;
};

export const ChatArea = ({ activeTeamMate, chat }: ChatAreaProps) => {
  const lastMessageRef = useRef<HTMLDivElement>(null);
  const dayMap = useMemo(() => new Map(), []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dayArr: boolean[] = useMemo(() => [], [activeTeamMate, chat]);
  useMemo(() => {
    chat?.map((message: MessageType, idx: number) => {
      dayArr[idx] = !dayMap.has(message?.day);
      dayMap.set(message?.day, true);
      return null;
    });
  }, [chat, dayArr, dayMap]);

  const sameDayMessages = useMemo(
    () => groupSameDayMessages(chat, dayArr),
    [chat, dayArr]
  );

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView();
    }
  });

  if (!chat) return <></>;
  console.log(sameDayMessages);
  return (
    <div className={styles.displayMessage}>
      <TeamMateInfo activeTeamMate={activeTeamMate} />
      {sameDayMessages.length > 0
        ? sameDayMessages.map((messageGroup, idx) => (
            <MessageGroup
              key={messageGroup[0].id}
              groupOfMessages={messageGroup}
              activeTeamMate={activeTeamMate}
              lastMessageRef={
                idx === sameDayMessages?.length - 1 ? lastMessageRef : null
              }
            />
          ))
        : null}
    </div>
  );
};
