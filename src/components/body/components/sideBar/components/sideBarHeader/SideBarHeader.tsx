//components
import { Avatar } from "../../../../../avatar/Avatar";

//style
import styles from "./SideBarHeader.module.css";

type SideBarHeaderProps = {
  imgSrc: string;
  title: string;
};

export const SideBarHeader = ({ imgSrc, title }: SideBarHeaderProps) => {
  return (
    <div className={styles.sideBarHeader}>
      <Avatar src={imgSrc} alt={"Sprinklr logo"} height="20px" width="20px" />
      <span className={styles.companyName}>{title}</span>
    </div>
  );
};
