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

function formatAMPM(date = new Date()) {
  var hours = date.getHours();
  var minutes: number|string = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
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
            date: formatAMPM(),
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
