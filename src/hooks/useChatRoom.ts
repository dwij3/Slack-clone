//libs
import { useState, useCallback, useEffect } from "react";

//hooks
import { useQuery } from "./useQuery";

//type
import { ChatRoom, Action, Message } from "../types/types";

//constants
import { ACTION } from "../constants";

export const useChatRoom = (
  userId:  string,
  teamMateId:  string
) => {
  const [chatRoom, setChatRoom] = useState<ChatRoom | undefined>(undefined);
  const isValidUrl = !!(userId && teamMateId);
  const { data, loading, error } = useQuery(
    `http://localhost:4000/getChatRoom/${userId}/${teamMateId}`,
    isValidUrl
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
      await fetch(`http://localhost:4000/addMessage/${chatRoom.id}`, {
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
