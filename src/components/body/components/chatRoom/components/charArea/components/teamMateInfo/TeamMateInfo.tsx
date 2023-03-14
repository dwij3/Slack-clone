//style
import styles from "./TeamMateInfo.module.css";

//components
import { Avatar } from "../../../../../../../avatar/Avatar";

//hooks
import { useUserId } from "../../../../../../../../hooks/UserContext";

//type
import { User } from "../../../../../../../../types/types";
type TeamMateInfoProps = {
  activeTeamMate: User;
};

export const TeamMateInfo = ({ activeTeamMate }: TeamMateInfoProps) => {
  const userId = useUserId();

  return (
    <div className={styles.friendDetail}>
      <div className={styles.detail}>
        <Avatar src={activeTeamMate?.photo} height="55px" width="55px" />
        <div className={styles.friendNameContainer}>
          <span className={styles.friendName}>{activeTeamMate?.name}</span>
        </div>
      </div>
      <div className={styles.commonMessage}>
        {userId === activeTeamMate?.id ? (
          <span>
            This space is just for you. Jot down notes, list your to-dos, or
            keep links and files handy.
          </span>
        ) : (
          <span>
            This conversation is just between you and{" "}
            <span className={styles.highlight}>@{activeTeamMate?.name}</span>
          </span>
        )}
      </div>
    </div>
  );
};
