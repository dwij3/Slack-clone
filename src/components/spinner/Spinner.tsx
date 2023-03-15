//libs
import ClipLoader from "react-spinners/ClipLoader";

type SpinnerProps = {
  size: number;
  color: string;
};

export const Spinner = ({ size, color }: SpinnerProps) => {
  return (
    <div style={{ width: "100px", margin: "auto", display: "block" }}>
      <ClipLoader color={color} size={size} />
    </div>
  );
};
