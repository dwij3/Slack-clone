//hooks
import { useState, useCallback, useEffect } from "react";

//constants
import { ACTION } from "../constants";

//type
import { ChatRoom, Action , Message } from "../types/types";
import {useQuery} from "./useQuery";

export const useChatRoom = (userId: number|string, teamMateId: number|string) => {
  const [chatRoom, setChatRoom] = useState<ChatRoom | null>(null);
  const { data, loading, error } = useQuery(
    `http://localhost:3000/getChatRoom/${userId}/${teamMateId}`
  );
  useEffect(() => setChatRoom(data), [data]);

  const handleAddMessage = useCallback( (newMessage: Message) => {
    setChatRoom((chatRoom: any) => {
      return {
        ...chatRoom,
        messageIds: [...chatRoom.messageIds, newMessage],
      };
    });
    // call backEnd
  }, []);

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


