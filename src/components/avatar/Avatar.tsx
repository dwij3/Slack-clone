import styles from "./Avatar.module.css";

type Avatarprops = {
  src: string | undefined;
  height: string;
  width: string;
};


export const Avatar = ({ src, height, width }: Avatarprops) => {
  return (
    <img
      className={styles.avatar}
      src={src}
      alt={""}
      height={height}
      width={width}
    />
  );
};


