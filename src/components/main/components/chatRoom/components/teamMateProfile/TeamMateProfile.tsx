import styles from "./TeamMateProfile.module.css";
import Avatar from "../../../../../avatar/Avatar";
import {TeamMateProfileProps} from "./type";
import useTeamMates from "../../../../../../hooks/useTeamMates";

const TeamMateProfile = ({ activeTeamMateId }: TeamMateProfileProps) => {


  const {teamMates} = useTeamMates();
  const teamMate = teamMates.find((teamMate:any) => teamMate.id === activeTeamMateId);
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
