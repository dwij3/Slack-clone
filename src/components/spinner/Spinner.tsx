// import styles from './Spiner.module.css';

// import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

export const Spinner = () => {
  return (
    <div style={{ width: "100px", margin: "auto", display: "block" }}>
      <ClipLoader color="#52bfd9" size={10} />
    </div>
  );
};
