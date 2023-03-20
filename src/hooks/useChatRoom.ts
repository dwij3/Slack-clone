//libs
import { useState, useCallback, useEffect } from "react";

//hooks
import { useQuery } from "./useQuery";
import { useMutation } from "./useMutation";

//type
import { Action, ChatRoom, NewMessage } from "../types/types";

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

  const onSuccess = useCallback((newMessage: any) => {
    if (!chatRoom) return;
    const newChatRoom = {
      ...chatRoom,
      messages: [...chatRoom.messages, newMessage],
    };
    setChatRoom(newChatRoom);
  },[chatRoom]);

  const { mutate, status } = useMutation<NewMessage>(
    `http://localhost:4000/addMessage/${chatRoom?.id}`,
    { onSuccess }
  );
  const handleAddMessage = useCallback(
    async (newMessage: NewMessage) => {
      if (!chatRoom) return;
      await mutate(newMessage);
      if (status === STATUS.ERROR) {
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
