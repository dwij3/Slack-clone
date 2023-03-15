//libs
import ClipLoader from "react-spinners/ClipLoader";
type SpinnerProps = {
  size: number;
};

const color = "#52bfd9";
export const Spinner = ({ size }: SpinnerProps) => {
  return (
    <div style={{ width: "100px", margin: "auto", display: "block" }}>
      <ClipLoader color={color} size={size} />
    </div>
  );
};
