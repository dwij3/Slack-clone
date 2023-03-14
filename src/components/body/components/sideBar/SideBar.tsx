//style
import styles from "./SideBar.module.css";

//components
import {TeamMateList} from "./components/teamMateList";
import {SideBarHeader} from "./components/sideBarHeader/SideBarHeader";

//type
type SideBarProps = {
  onChangeActiveTeamMate: (activeTeamMateId: number|string) => void;
  activeTeamMateId: number|string;
};



export const SideBar = ({ onChangeActiveTeamMate, activeTeamMateId }: SideBarProps) => {
  return (
    <div className={styles.sideBar}>
      <SideBarHeader
        companyLogo="https://companieslogo.com/img/orig/CXM.D-7fde2bb4.png?t=1671948296"
        height="20px"
        companyName="Sprinklr"
      />
      <TeamMateList onChangeActiveTeamMate={onChangeActiveTeamMate} activeTeamMateId={activeTeamMateId} />
    </div>
  );
};

