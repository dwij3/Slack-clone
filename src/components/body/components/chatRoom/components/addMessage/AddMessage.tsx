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
import { useUserId } from "../../../../../useContext/UserContext";

//type
import { Action, User } from "../../../../../../types/types";

//constant
import { ACTION } from "../../../../../../constants";

//style
import styles from "./AddMessage.module.css";

//utils
import { formatTime } from "../../../../../../utils/getDate";
import { getDay } from "../../../../../../utils/getDate";

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
        ((e as KeyboardEvent<HTMLButtonElement>).key === "Enter" ||
          e.type === "click") &&
        message.trim().length
      ) {
        if (href.current) href.current.style.cssText = "height: 17px";

        onAction({
          type: ACTION.ADD_MESSAGE,
          newMessage: {
            from: userId,
            to: activeTeamMate?.id,
            content: message,
            date: formatTime(),
            day: getDay(),
          },
        });
        setMessage("");
      }
    },
    [message, autosize, onAction, userId, activeTeamMate?.id]
  );

  const placeholder =
    userId === activeTeamMate?.id
      ? "Make a note of something"
      : `Message ${activeTeamMate?.name}`;
  return (
    <div className={styles.addMessage}>
      <div className={styles.inputField}>
        <textarea
          value={message}
          className={styles.textarea}
          placeholder={placeholder}
          onChange={handleChange}
          onKeyDown={handleAddMessage}
          rows={1}
          ref={href}
          spellCheck={false}
        />

        <button
          onClick={handleAddMessage}
          className={`${styles.submitButton} ${
            message.length > 0 ? styles.transformColor : ""
          }`}
        >
          <span className="material-symbols-outlined">send</span>
        </button>
      </div>
    </div>
  );
};
