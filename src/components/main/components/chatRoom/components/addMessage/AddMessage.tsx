import styles from "./AddMessage.module.css";
import { useState, useCallback } from "react";
import { ACTION } from "../../../../../../constants";
import { AddMessageProps } from "./type";
import { useUserId } from "../../../../../../hooks/UserContext";
import getDate from "../../../../../../data/getDate";
import Avatar from "../../../../../avatar/Avatar";

const AddMessage = ({ activeTeamMateId, onAction }: AddMessageProps) => {
  const userId = useUserId();
  const [message, setMessage] = useState("");

  const handleChange = useCallback((e: any) => {
    setMessage(e.target.value);
  }, []);

  const handleAddMessage = useCallback(
    (e:any) => {
      if ((e.key === "Enter" || e.type === "click") && message.length) {
        onAction({
          type: ACTION.ADD_MESSAGE,
          newMessage: {
            id: crypto.randomUUID(),
            from: userId,
            to: activeTeamMateId,
            content: message,
            date: getDate(),
          },
          userId: userId,
          teamMateId: activeTeamMateId,
        });
        setMessage("");
      }
    },
    [message, onAction, activeTeamMateId, userId]
  );

  return (
    <div className={styles.addMessage}>
      <div className={styles.inputField}>
        <input
          type="text"
          value={message}
          className={styles.input}
          placeholder="Message here"
          onChange={handleChange}
          onKeyDown={(e) => handleAddMessage(e)}
        />
        <span onClick={(e) => handleAddMessage(e)} className={styles.submitButton}>
          <Avatar
            src="https://w7.pngwing.com/pngs/818/816/png-transparent-paper-plane-airplane-computer-icons-send-angle-ribbon-rectangle-thumbnail.png"
            height="20px"
            width="23px"
          />
        </span>
      </div>
    </div>
  );
};

export default AddMessage;
