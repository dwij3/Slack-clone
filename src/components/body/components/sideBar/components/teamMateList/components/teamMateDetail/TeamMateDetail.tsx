//style
import styles from "./TeamMateDetail.module.css";

//component
import {Avatar} from "../../../../../../../avatar/Avatar";

//hooks
import { useCallback } from "react";
import { useUserId } from "../../../../../../../../hooks/UserContext";
import {useTeamMates} from "../../../../../../../../hooks/useTeamMates";

//type
type TeamMateDetailProps = {
  teamMateId: number | string;
  onChangeActiveTeamMate: (activeTeamMateId: (number|string) ) => void;
  isActive: boolean;
};

export const TeamMateDetail = ({
  teamMateId,
  onChangeActiveTeamMate,
  isActive,
}: TeamMateDetailProps) => {
  const { teamMates } = useTeamMates();
  const currentTeamMate = teamMates?.find(
    (teamMate) => teamMate.id === teamMateId
  );
  const teamMateImage = currentTeamMate?.photo;
  const teamMateName = currentTeamMate?.name;
  const handleClick = useCallback(
    () => onChangeActiveTeamMate(teamMateId),
    [onChangeActiveTeamMate, teamMateId]
  );
  const highlight = isActive ? styles.highlight : "";
  const userId = useUserId();
  return (
    <div
      className={`${styles.teamMateDetail} ${highlight}`}
      onClick={handleClick}
    >
      <Avatar src={teamMateImage} height="20px" width="20px" />
      <span className={styles.teamMateName}>{teamMateName}</span>
      {userId === teamMateId ? <span className={styles.user}>you</span> : null}
    </div>
  );
};


