//style
import styles from "./TeamMateProfile.module.css";

//component
import { Avatar } from "../../../../../avatar/Avatar";
//type
import { User } from "../../../../../../types/types";
type TeamMateProfileProps = {
  activeTeamMate: User;
};

export const TeamMateProfile = ({ activeTeamMate }: TeamMateProfileProps) => {

  return (
    <div className={styles.teamMateProfile}>
      <Avatar src={activeTeamMate?.photo} height="35px" width="35px" />
      <span className={styles.teamMateName}>{activeTeamMate?.name}</span>
    </div>
  );
};
