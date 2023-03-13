import { Message } from "../../../../../../../../hooks/type";

export type MessageProps = {
  message: Message;
  lastMessageRef: React.RefObject<HTMLDivElement> | null;
};
