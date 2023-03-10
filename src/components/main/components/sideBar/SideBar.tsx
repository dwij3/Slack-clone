import styles from "./SideBar.module.css";
import TeamMateList from "./components/teamMateList";
import SideBarHeader from "./components/sideBarHeader/SideBarHeader";
import { useUserId } from "../../../../hooks/UserContext";
import { users } from "../../../../data/Users";
import getUserIdx from "../../../../data/getUserIdx";
import { SideBarProps } from "./type";

const SideBar = ({ onClick, activeTeamMateId }: SideBarProps) => {
  const userId = useUserId();
  const userIdx = getUserIdx(userId);
  const teamMateIds = users[userIdx].teamMateId;
  return (
    <div className={styles.sideBar}>
      <SideBarHeader
        companyLogo="https://companieslogo.com/img/orig/CXM.D-7fde2bb4.png?t=1671948296"
        height="20px"
        companyName="Sprinklr"
      />
      <TeamMateList
        TeamMateIds={teamMateIds}
        onClick={onClick}
        activeTeamMateId={activeTeamMateId}
      />
    </div>
  );
};

export default SideBar;
