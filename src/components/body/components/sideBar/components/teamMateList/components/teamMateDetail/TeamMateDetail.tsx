//libs
import { useCallback } from "react";

//component
import { Avatar } from "../../../../../../../avatar/Avatar";

//hooks
import { useUserId } from "../../../../../../../../hooks/UserContext";

//type
import { User } from "../../../../../../../../types/types";

//style
import styles from "./TeamMateDetail.module.css";
type TeamMateDetailProps = {
  teamMate: User;
  onChangeActiveTeamMate: (activeTeamMateId: User) => void;
  isActive: boolean;
};

export const TeamMateDetail = ({
  teamMate,
  onChangeActiveTeamMate,
  isActive,
}: TeamMateDetailProps) => {
  const handleClick = useCallback(
    () => onChangeActiveTeamMate(teamMate),
    [onChangeActiveTeamMate, teamMate]
  );
  const highlightClass = isActive ? styles.highlight : "";
  const userId = useUserId();
  return (
    <div
      className={`${styles.teamMateDetail} ${highlightClass}`}
      onClick={handleClick}
    >
      <Avatar src={teamMate.photo} height="20px" width="20px" />
      <span className={styles.teamMateName}>{teamMate.name}</span>
      {userId === teamMate?.id ? (
        <span className={styles.user}>you</span>
      ) : null}
    </div>
  );
};
