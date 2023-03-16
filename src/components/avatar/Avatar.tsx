import styles from "./Avatar.module.css";

type Avatarprops = {
  src: string | undefined;
  alt: string;
  height: string;
  width: string;
};

export const Avatar = ({ src, alt, height, width }: Avatarprops) => {
  return (
    <img
      className={styles.avatar}
      src={src}
      alt={alt}
      height={height}
      width={width}
    />
  );
};
