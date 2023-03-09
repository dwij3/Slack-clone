import styles from "./SideBarHeader.module.css";
import Avatar from "../../../../../avatar/Avatar";

const SideBarHeader = () => {
  return (
    <div className={styles.sideBarHeader}>
      
      {/* <img
        className={styles.sprinklrLogo}
        src="https://companieslogo.com/img/orig/CXM.D-7fde2bb4.png?t=1671948296 "
        alt="sprinklr"
      /> */}
      <Avatar src="https://companieslogo.com/img/orig/CXM.D-7fde2bb4.png?t=1671948296" height="20px" width="20px" />
      <span className={styles.companyName}>Sprinklr</span>
    </div>
  );
};

export default SideBarHeader;
