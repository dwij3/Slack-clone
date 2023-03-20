//libs
import { useState, useCallback, useEffect } from "react";

//hooks
import { useQuery } from "./useQuery";
import { useMutation } from "./useMutation";

//type
import { ChatRoom, Action, Message } from "../types/types";

//constants
import { ACTION, STATUS } from "../constants";

//utils
import { fetchApi } from "../utils/fetchApi";

export const useChatRoom = (userId: string, teamMateId: string) => {
  const isValidUrl = !(userId && teamMateId);
  const { data, loading, error } = useQuery(
    fetchApi,
    `http://localhost:4000/getChatRoom/${userId}/${teamMateId}`,
    isValidUrl
  );
  const [chatRoom, setChatRoom] = useState<ChatRoom | undefined>(undefined);
  useEffect(() => setChatRoom(data), [data]);
  const { mutate, status } = useMutation<Message>(
    `http://localhost:4000/addMessage/${chatRoom?.id}`
  );
  const handleAddMessage = useCallback(
    (newMessage: Message) => {
      if (!chatRoom) return;
      const newChatRoom = {
        ...chatRoom,
        messages: [...chatRoom.messages, newMessage],
      };

      mutate(newMessage);
      if (status === STATUS.SUCCESS) setChatRoom(newChatRoom);
      else if (status === STATUS.ERROR) {
        console.error("can't add data");
      }
    },
    [chatRoom, mutate, status]
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
