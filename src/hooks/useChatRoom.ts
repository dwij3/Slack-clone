//hooks
import { useState, useCallback, useEffect } from "react";

//constants
import { ACTION } from "../constants";

//type
import { ChatRoom, Action, Message } from "../types/types";
import { useQuery } from "./useQuery";

export const useChatRoom = (
  userId: number | string | undefined,
  teamMateId: number | string | undefined
) => {
  const [chatRoom, setChatRoom] = useState<ChatRoom | null>(null);
  const { data, loading, error } = useQuery(
    `http://localhost:3000/getChatRoom/${userId}/${teamMateId}`
  );
  useEffect(() => setChatRoom(data), [data]);

  const handleAddMessage = useCallback(
    async (newMessage: Message) => {
      setChatRoom((chatRoom: any) => {
        return {
          ...chatRoom,
          messageIds: [...chatRoom.messageIds, newMessage],
        };
      });

      // call backEnd
      if (!chatRoom) return;
      await fetch(`http://localhost:3000/addMessage/${chatRoom.id}`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newMessage),
      });
    },
    [chatRoom]
  );

  const onAction = useCallback(
    (action: Action) => {
      switch (action.type) {
        case ACTION.ADD_MESSAGE:
          handleAddMessage(action.newMessage);
          break;

        default:
          throw new Error("ACTION not included");
      }
    },
    [handleAddMessage]
  );

  return { chatRoom, onAction, loading, error };
};
