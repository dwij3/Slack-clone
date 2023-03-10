import styles from "./TeamMateList.module.css";
import TeamMateDetail from "./components/teamMateDetail";
import { users } from "../../../../../../data/Users";
import { TeamMateListProps } from "./type";
import { useCallback, useState } from "react";

const TeamMateList = ({
  TeamMateIds,
  onClick,
  activeTeamMateId,
}: TeamMateListProps) => {
  const [hideTeamMateList, setHideTeamMateList] = useState(false);

  const handleClick = useCallback(() => {
    setHideTeamMateList(!hideTeamMateList);
  }, [hideTeamMateList]);

  const transformButton = hideTeamMateList ? styles.transform : "";
  return (
    <div className={styles.teamMateList}>
      <div className={styles.collapse}>
        <div
          className={`${styles.collapseIcon} ${transformButton}`}
          onClick={handleClick}
        >
          ❯
        </div>
        <span className={styles.messageTitle}>Direct Messages</span>
      </div>

      {hideTeamMateList
        ? null
        : users.map((user) => {
            return TeamMateIds.includes(user.id) ? (
              <TeamMateDetail
                teamMateID={user.id}
                key={user.id}
                onClick={onClick}
                activeTeamMateId={activeTeamMateId}
              />
            ) : null;
          })}
    </div>
  );
};

export default TeamMateList;
