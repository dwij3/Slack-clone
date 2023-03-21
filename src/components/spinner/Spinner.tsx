//libs
import ClipLoader from "react-spinners/ClipLoader";

//style
import styles from "./Spinner.module.css";

type SpinnerProps = {
  size: number;
  color: string;
};

export const Spinner = ({ size, color }: SpinnerProps) => {
  return (
    <div className={styles.spinner}>
      <ClipLoader color={color} size={size} />
    </div>
  );
};
