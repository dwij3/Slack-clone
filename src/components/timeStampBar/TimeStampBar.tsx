import styles from "./TimeStampBar.module.css";
import { getDay } from "../../utils/getDate";

type StickyDayProps = {
  day: string | undefined;
};
export const TimeStampBar = ({ day }: StickyDayProps) => {
  const today = getDay();
  return (
    <>
      <div className={styles.dateMessage}>{day === today ? "Today" : day}</div>
      <div className={styles.borderContainer}>
        <div className={styles.line}></div>
      </div>
    </>
  );
};
