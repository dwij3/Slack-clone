//style
import styles from "./AddMessage.module.css";

//hooks
import {
  useState,
  useCallback,
  MouseEvent,
  KeyboardEvent,
  ChangeEvent,
} from "react";
import { useUserId } from "../../../../../../hooks/UserContext";

//constant
import { ACTION } from "../../../../../../constants";

//components
import { Avatar } from "../../../../../avatar/Avatar";

//type
import { Action } from "../../../../../../types/types";
type AddMessageProps = {
  activeTeamMateId: number | string;
  onAction: (action: Action) => void;
};

function formattedDate(d = new Date()) {
  let month = String(d.getMonth() + 1);
  let day = String(d.getDate());
  const year = String(d.getFullYear());

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return `${day}/${month}/${year}`;
}

export const AddMessage = ({ activeTeamMateId, onAction }: AddMessageProps) => {
  const userId = useUserId();
  const [message, setMessage] = useState("");

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }, []);

  const handleAddMessage = useCallback(
    (e: MouseEvent | KeyboardEvent) => {
      if (
        (("key" in e && e.key === "Enter") || e.type === "click") &&
        message.length
      ) {
        onAction({
          type: ACTION.ADD_MESSAGE,
          newMessage: {
            id: crypto.randomUUID(),
            from: userId,
            to: activeTeamMateId,
            content: message,
            date: String(formattedDate()),
          },
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
          onKeyDown={handleAddMessage}
        />
        <span onClick={handleAddMessage} className={styles.submitButton}>
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
