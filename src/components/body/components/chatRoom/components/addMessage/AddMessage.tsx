//libs
import {
  useState,
  useCallback,
  MouseEvent,
  KeyboardEvent,
  ChangeEvent,
} from "react";

//hooks
import { useUserId } from "../../../../../../hooks/UserContext";

//components
import { Avatar } from "../../../../../avatar/Avatar";

//type
import { Action , User } from "../../../../../../types/types";

//constant
import { ACTION } from "../../../../../../constants";

//style
import styles from "./AddMessage.module.css";

type AddMessageProps = {
  activeTeamMate: User | undefined;
  onAction: (action: Action) => void;
};

const formatAMPM = (date = new Date()) => {
  let hours = date.getHours();
  let minutes: number | string = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

export const AddMessage = ({ activeTeamMate, onAction }: AddMessageProps) => {
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
            to: activeTeamMate?.id,
            content: message,
            date: formatAMPM(),
          },
        });
        setMessage("");
      }
    },
    [message, onAction, activeTeamMate, userId]
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
