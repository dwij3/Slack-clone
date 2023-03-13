//style
import styles from "./TeamMateProfile.module.css";

//component
import Avatar from "../../../../../avatar/Avatar";

//type
import { TeamMateProfileProps } from "./type";

//hooks
import useTeamMates from "../../../../../../hooks/useTeamMates";
import { User } from "../../../../../../hooks/type";

const TeamMateProfile = ({ activeTeamMateId }: TeamMateProfileProps) => {
  const { teamMates } = useTeamMates();
  const teamMate = teamMates.find(
    (teamMate: User) => teamMate.id === activeTeamMateId
  );
  const teamMateImage = teamMate?.photo;
  const teamMateName = teamMate?.name;

  return (
    <div className={styles.teamMateProfile}>
      <Avatar src={teamMateImage} height={"35px"} width={"35px"} />
      <span className={styles.teamMateName}>{teamMateName}</span>
    </div>
  );
};

export default TeamMateProfile;
