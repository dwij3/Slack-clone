//libs
import { useCallback } from "react";

//component
import { Avatar } from "../../../../../../../avatar/Avatar";

//hooks
import { useUserId } from "../../../../../../../useContext/UserContext";

//type
import { User } from "../../../../../../../../types/types";

//style
import styles from "./TeamMateDetail.module.css";
type TeamMateDetailProps = {
  teamMate: User;
  onChangeActiveTeamMateId: (activeTeamMateId: string) => void;
  isActive: boolean;
};

export const TeamMateDetail = ({
  teamMate,
  onChangeActiveTeamMateId,
  isActive,
}: TeamMateDetailProps) => {
  const handleClick = useCallback(
    () => onChangeActiveTeamMateId(teamMate.id),
    [onChangeActiveTeamMateId, teamMate]
  );
  const highlightClass = isActive ? styles.highlight : "";
  const userId = useUserId();
  return (
    <button onClick={handleClick} className={`${styles.btn} `}>
      <div className={`${styles.teamMateDetail} ${highlightClass}`}>
        <Avatar
          src={teamMate.photo}
          alt={teamMate.name}
          height="20px"
          width="20px"
        />
        <span className={styles.teamMateName}>{teamMate.name}</span>
        {userId === teamMate?.id ? (
          <span className={styles.user}>you</span>
        ) : null}
      </div>
    </button>
  );
};
