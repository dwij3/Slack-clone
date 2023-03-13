//style
import styles from "./TeamMateList.module.css";

//component
import TeamMateDetail from "./components/teamMateDetail";

//type
import { TeamMateListProps } from "./type";

//hooks
import { useCallback, useState } from "react";
import useTeamMates from "../../../../../../hooks/useTeamMates";

const TeamMateList = ({ onClick, activeTeamMateId }: TeamMateListProps) => {
  const [hideTeamMateList, setHideTeamMateList] = useState<boolean>(false);
  const handleClick = useCallback(() => {
    setHideTeamMateList(!hideTeamMateList);
  }, [hideTeamMateList]);

  const transformButton = hideTeamMateList ? styles.transform : "";
  const { teamMates } = useTeamMates();

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
        : teamMates?.map((teamMate: any) => {
            return (
              <TeamMateDetail
                teamMateID={teamMate.id}
                key={teamMate.id}
                onClick={onClick}
                activeTeamMateId={activeTeamMateId}
              />
            );
          })}
    </div>
  );
};

export default TeamMateList;
