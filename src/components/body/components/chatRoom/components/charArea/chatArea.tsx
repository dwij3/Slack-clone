//libs
import { useEffect, useRef } from "react";

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
  if(tempArr) sameDayMessages.push(tempArr);
  return sameDayMessages;
};

export const ChatArea = ({ activeTeamMate, chat }: ChatAreaProps) => {
  const lastMessageRef = useRef<HTMLDivElement>(null);
  const dayMap = new Map();

  const dayArr: boolean[] = [];
  chat?.map((message: MessageType, idx: number) => {
    dayArr[idx] = !dayMap.has(message?.day);
    dayMap.set(message?.day, true);
    return null;
  });

  const sameDayMessages = groupSameDayMessages(chat, dayArr);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView();
    }
  });

  if(!chat) return <></>
  return (
    <div className={styles.displayMessage}>
      <TeamMateInfo activeTeamMate={activeTeamMate} />
      {sameDayMessages.length>0 ? sameDayMessages.map((messageGroup, idx) => (
        <MessageGroup
          key={crypto.randomUUID()}
          groupOfMessages={messageGroup}
          activeTeamMate={activeTeamMate}
          lastMessageRef={
            idx === sameDayMessages?.length - 1 ? lastMessageRef : null
          }
        />
      )) : null}
    </div>
  );
};
