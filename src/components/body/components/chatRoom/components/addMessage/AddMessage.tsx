//libs
import {
  useState,
  useCallback,
  useRef,
  MouseEvent,
  KeyboardEvent,
  ChangeEvent,
} from "react";

//hooks
import { useUserId } from "../../../../../../hooks/UserContext";

//components
import { Avatar } from "../../../../../avatar/Avatar";

//type
import { Action, User } from "../../../../../../types/types";

//constant
import { ACTION } from "../../../../../../constants";

//style
import styles from "./AddMessage.module.css";

//utils
import { formatTime } from "../../../../../../utils/getFormatedTime";

type AddMessageProps = {
  activeTeamMate: User | undefined;
  onAction: (action: Action) => void;
};



export const AddMessage = ({ activeTeamMate, onAction }: AddMessageProps) => {
  const userId = useUserId();
  const href = useRef<HTMLTextAreaElement>(null);
  const [message, setMessage] = useState("");

  const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  }, []);

  const autosize = useCallback(() => {
    if (href.current) {
      href.current.style.cssText = "height:auto; padding:0";
      href.current.style.cssText = "height:" + href.current.scrollHeight + "px";
    }
  }, []);

  const handleAddMessage = useCallback(
    (e: MouseEvent | KeyboardEvent) => {
      autosize();

      if (
        (("key" in e && e.key === "Enter") || e.type === "click") &&
        message.trim().length
      ) {
        if (href.current) href.current.style.cssText = "height: 17px";

        onAction({
          type: ACTION.ADD_MESSAGE,
          newMessage: {
            id: crypto.randomUUID(),
            from: userId,
            to: activeTeamMate?.id,
            content: message,
            date: formatTime(),
          },
        });
        setMessage("");
      }
    },
    [message, autosize, onAction, userId, activeTeamMate?.id]
  );

  return (
    <div className={styles.addMessage}>
      <div className={styles.inputField}>
        <textarea
          value={message}
          className={styles.input}
          placeholder="Message here"
          onChange={handleChange}
          onKeyDown={handleAddMessage}
          rows={1}
          ref={href}
          spellCheck={false}
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
