import { messages as conversation } from "../../../../../../data/Messages";
import { useCallback, useState } from "react";
import { Message } from "./type";
import { ACTION } from "../../../../../../constants";
const useMessages = () => {
  const [messages, setMessages] = useState<Message[]>(() => conversation);

  const handleAddMessage = useCallback((newMessage: Message) => {
    setMessages((messages) => [...messages, newMessage]);
  }, []);

  const filterMessage = useCallback(
    (userId: number, teamMateId: number) => {
      return messages.filter(
        (message) =>
          (message.from === userId && message.to === teamMateId) ||
          (message.from === teamMateId && message.to === userId)
      );
    },
    [messages]
  );

  const onAction = useCallback(
    (action: any) => {
      switch (action.type) {
        case ACTION.ADD_MESSAGE:
          handleAddMessage(action.newMessage);
          filterMessage(action.userId, action.teamMateId);
          break;

        default:
          throw new Error("Action Not Defined");
      }
    },
    [filterMessage, handleAddMessage]
  );
  return { onAction, filterMessage };
};

export default useMessages;
