//hooks
import { useState, useEffect, useCallback } from "react";

//constants
import { ACTION } from "../constants";

//type
import { ChatRoom, Action } from "./type";

const useChatRoom = (userId: number, teamMateId: number) => {
  const [chatRoom, setChatRoom] = useState<ChatRoom | null>(null);

  const handleAddMessage = useCallback(async (newMessage: any) => {
    setChatRoom((chatRoom: any) => {
      return {
        ...chatRoom,
        messageIds: [...chatRoom.messageIds, newMessage],
      };
    });
    console.log(newMessage);

    //call backEnd
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/getChatRoom/${userId}/${teamMateId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        setChatRoom(json);
      })
      .catch((err) => console.error(`Fetch problem: ${err.message}`));
  }, [teamMateId, userId]);

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
  return { chatRoom, onAction };
};

export default useChatRoom;
