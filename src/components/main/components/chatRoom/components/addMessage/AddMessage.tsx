import styles from "./AddMessage.module.css";
import { useState, useCallback } from "react";
import useMessages from "../hooks/useMessages";
import { ACTION } from "../../../../../../constants";
import { AddMessageProps } from "./type";
import { useUserId } from "../../../../../../hooks/UserContext";

const AddMessage = ({ teamMateId }: AddMessageProps) => {
  const userId = useUserId();
  const [message, setMessage] = useState("");
  const { onAction } = useMessages();
  const handleClick = useCallback(() => {
    onAction({
      type: ACTION.ADD_MESSAGE,
      newMessage: {
        id: crypto.randomUUID(),
        from: userId,
        to: teamMateId,
        content: message,
        date: new Date(),
      },
      userId: userId,
      teamMateId: teamMateId,
    });
  }, [message, onAction, teamMateId, userId]);

  const handleChange = useCallback((e: any) => {
    setMessage(e.target.value);
  }, []);

  return (
    <div className={styles.addMessage}>
      <div className={styles.inputField}>
        <input
          type="text"
          value={message}
          className={styles.input}
          placeholder="Message here"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add</button>
      </div>
    </div>
  );
};

export default AddMessage;
