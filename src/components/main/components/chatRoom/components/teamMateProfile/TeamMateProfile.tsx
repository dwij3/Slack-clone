import styles from "./TeamMateProfile.module.css";
import Avatar from "../../../../../avatar/Avatar";
import { id } from "./type";
import { users } from "../../../../../../data/Users";
import getUserIdx from "../../../../../../data/getUserIdx";

const TeamMateProfile = ({ activeTeamMateId }: id) => {
  const teamMateIdx = getUserIdx(activeTeamMateId);

  const teamMateImage = users[teamMateIdx].photo;
  const teamMateName = users[teamMateIdx].name;
  return (
    <div className={styles.teamMateProfile}>
      <Avatar src={teamMateImage} height={"35px"} width={"35px"} />
      <span className={styles.teamMateName}>{teamMateName}</span>
    </div>
  );
};

export default TeamMateProfile;
