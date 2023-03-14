// import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
type SpinnerProps = {
  size: number
}
export const Spinner = ({size}:SpinnerProps) => {
  return (
    <div style={{ width: "100px", margin: "auto", display: "block" }}>
      <ClipLoader color="#52bfd9" size={size} />
    </div>
  );
};
