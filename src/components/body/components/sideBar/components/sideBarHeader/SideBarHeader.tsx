//style
import styles from "./SideBarHeader.module.css";

//components
import { Avatar } from "../../../../../avatar/Avatar";

//type
type SideBarHeaderProps = {
  companyLogo: string;
  height: string;
  companyName: string;
};

export const SideBarHeader = ({
  companyLogo,
  height,
  companyName,
}: SideBarHeaderProps) => {
  return (
    <div className={styles.sideBarHeader}>
      <Avatar src={companyLogo} height={height} width={height} />
      <span className={styles.companyName}>{companyName}</span>
    </div>
  );
};
