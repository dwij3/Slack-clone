//components
import { Avatar } from "../../../../../../../avatar/Avatar";

//hooks
import { useUserId } from "../../../../../../../../hooks/UserContext";

//type
import { User } from "../../../../../../../../types/types";

//style
import styles from "./TeamMateInfo.module.css";

type TeamMateInfoProps = {
  activeTeamMate: User;
};

export const TeamMateInfo = ({ activeTeamMate }: TeamMateInfoProps) => {
  const userId = useUserId();

  return (
    <div className={styles.teamMateDetail}>
      <div className={styles.detail}>
        <Avatar src={activeTeamMate?.photo} height="55px" width="55px" />
        <div className={styles.teamMateNameContainer}>
          <span className={styles.teamMateName}>{activeTeamMate?.name}</span>
        </div>
      </div>
      <div className={styles.commonMessage}>
        {userId === activeTeamMate?.id ? (
          <span>
            This space is just for you. Just take notes, list your to-dos, or
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
