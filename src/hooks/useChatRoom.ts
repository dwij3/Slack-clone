//libs
import { useState, useCallback, useEffect } from "react";

//hooks
import { useQuery } from "./useQuery";
import { useMutation } from "./useMutation";

//type
import { ChatRoom, Action, Message } from "../types/types";

//constants
import { ACTION } from "../constants";

//utils
import { fetchApi } from "../utils/fetchApi";

export const useChatRoom = (userId: string, teamMateId: string) => {
  const [chatRoom, setChatRoom] = useState<ChatRoom | undefined>(undefined);
  const isValidUrl = !(userId && teamMateId);
  const { data, loading, error } = useQuery(
    fetchApi,
    `http://localhost:4000/getChatRoom/${userId}/${teamMateId}`,
    isValidUrl
  );
  useEffect(() => setChatRoom(data), [data]);
  const { mutate } = useMutation<Message>(
    `http://localhost:4000/addMessage/${chatRoom?.id}`
  );
  const handleAddMessage = useCallback(
    async (newMessage: Message) => {
      if (!chatRoom) return;
      const newChatRoom = {
        ...chatRoom,
        messageIds: [...chatRoom.messageIds, newMessage],
      };
      setChatRoom(newChatRoom);

      mutate(newMessage);
    },
    [chatRoom, mutate]
  );

  const onAction = useCallback(
    (action: Action) => {
      switch (action.type) {
        case ACTION.ADD_MESSAGE:
          handleAddMessage(action.newMessage);
          break;

        default:
          throw new Error("ACTION NOT INCLUDED:");
      }
    },
    [handleAddMessage]
  );

  return { chatRoom, onAction, loading, error };
};
