//style
import styles from "./SideBar.module.css";

//components
import { TeamMateList } from "./components/teamMateList";
import { SideBarHeader } from "./components/sideBarHeader/SideBarHeader";

//type
import { User } from "../../../../types/types";
type SideBarProps = {
  onChangeActiveTeamMate: (activeTeamMate: User) => void;
  activeTeamMate: User;
};

export const SideBar = ({
  onChangeActiveTeamMate,
  activeTeamMate,
}: SideBarProps) => {
  return (
    <div className={styles.sideBar}>
      <SideBarHeader
        companyLogo="https://companieslogo.com/img/orig/CXM.D-7fde2bb4.png?t=1671948296"
        height="20px"
        companyName="Sprinklr"
      />
      <TeamMateList
        onChangeActiveTeamMate={onChangeActiveTeamMate}
        activeTeamMate={activeTeamMate}
      />
    </div>
  );
};
