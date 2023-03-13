//style
import styles from "./TeamMateDetail.module.css";

//type
import { TeamMateDetailProps } from "./type";

//component
import Avatar from "../../../../../../../avatar/Avatar";

//hooks
import { useCallback } from "react";
import { useUserId } from "../../../../../../../../hooks/UserContext";
import useTeamMates from "../../../../../../../../hooks/useTeamMates";

const TeamMateDetail = ({
  teamMateID,
  onClick,
  activeTeamMateId,
}: TeamMateDetailProps) => {
  const { teamMates } = useTeamMates();
  const currentTeamMate = teamMates.find(
    (teamMate) => teamMate.id === teamMateID
  );
  const teamMateImage = currentTeamMate?.photo;
  const teamMateName = currentTeamMate?.name;
  const handleClick = useCallback(
    () => onClick(teamMateID),
    [onClick, teamMateID]
  );
  const highlight = teamMateID === activeTeamMateId ? styles.highlight : "";
  const userId = useUserId();
  return (
    <div
      className={`${styles.teamMateDetail} ${highlight}`}
      onClick={handleClick}
    >
      <Avatar src={teamMateImage} height={"20px"} width={"20px"} />
      <span className={styles.teamMateName}>{teamMateName}</span>
      {userId === teamMateID ? <span className={styles.user}>you</span> : null}
    </div>
  );
};

export default TeamMateDetail;
