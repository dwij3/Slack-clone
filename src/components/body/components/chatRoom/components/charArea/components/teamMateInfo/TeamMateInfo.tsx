//style
import styles from "./TeamMateInfo.module.css";

//components
import {Avatar} from "../../../../../../../avatar/Avatar";

//hooks
import { useUserId } from "../../../../../../../../hooks/UserContext";
import {useTeamMates} from "../../../../../../../../hooks/useTeamMates";

//type
import { User } from "../../../../../../../../types/types";
type TeamMateInfoProps = {
  activeTeamMateId: number|string;
};



export const TeamMateInfo = ({ activeTeamMateId }: TeamMateInfoProps) => {
  const { teamMates } = useTeamMates();
  const activeTeamMate = teamMates?.find((teamMate: User) => {
    return teamMate.id === activeTeamMateId;
  });
  const teamMateName = activeTeamMate?.name;
  const teamMateImageUrl = activeTeamMate?.photo;
  const userId = useUserId();

  return (
    <div className={styles.friendDetail}>
      <div className={styles.detail}>
        <Avatar src={teamMateImageUrl} height="55px" width="55px" />
        <div className={styles.friendNameContainer}>
          <span className={styles.friendName}>{teamMateName}</span>
        </div>
      </div>
      <div className={styles.commonMessage}>
        {userId === activeTeamMateId ? (
          <span>
            This space is just for you. Jot down notes, list your to-dos, or
            keep links and files handy
          </span>
        ) : (
          <span>
            This conversation is just between you and{" "}
            <span className={styles.highlight}>@{teamMateName}</span>
          </span>
        )}
      </div>
    </div>
  );
};

