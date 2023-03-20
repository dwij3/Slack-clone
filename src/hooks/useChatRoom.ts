//libs
import { useCallback } from "react";

//hooks
import { useQuery } from "./useQuery";
import { useMutation } from "./useMutation";

//type
import { Action, NewMessage } from "../types/types";

//constants
import { ACTION, STATUS } from "../constants";

//utils
import { fetchApi } from "../utils/fetchApi";

export const useChatRoom = (userId: string, teamMateId: string) => {
  const isValidUrl = !(userId && teamMateId);
  const { data, loading, error, updateQuery } = useQuery(
    fetchApi,
    `http://localhost:4000/getChatRoom/${userId}/${teamMateId}`,
    isValidUrl
  );

  const onSuccess = useCallback(
    (newMessage: NewMessage) => {
      updateQuery(newMessage);
    },
    [updateQuery]
  );

  const { mutate, status } = useMutation<NewMessage>(
    `http://localhost:4000/addMessage/${data?.id}`,
    { onSuccess }
  );
  const handleAddMessage = useCallback(
    async (newMessage: NewMessage) => {
      await mutate(newMessage);
      if (status === STATUS.ERROR) {
        console.error("can't add data");
      }
    },
    [mutate, status]
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

  return { data, onAction, loading, error };
};
