//components
import { TeamMateList } from "./components/teamMateList";
import { SideBarHeader } from "./components/sideBarHeader/SideBarHeader";

//style
import styles from "./SideBar.module.css";

type SideBarProps = {
  onChangeActiveTeamMateId: (activeTeamMateId: string) => void;
  activeTeamMateId: string;
};

export const SideBar = ({
  onChangeActiveTeamMateId,
  activeTeamMateId,
}: SideBarProps) => {
  return (
    <div className={styles.sideBar}>
      <SideBarHeader
        imgSrc="https://companieslogo.com/img/orig/CXM.D-7fde2bb4.png?t=1671948296"
        title="Sprinklr"
      />
      <TeamMateList
        onChangeActiveTeamMateId={onChangeActiveTeamMateId}
        activeTeamMateId={activeTeamMateId}
      />
    </div>
  );
};
