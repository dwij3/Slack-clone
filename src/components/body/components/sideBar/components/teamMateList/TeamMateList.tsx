//libs
import { useCallback } from "react";

//component
import { TeamMateDetail } from "./components/teamMateDetail";
import { ErrorState } from "../../../../../errorState";
import { Spinner } from "../../../../../spinner";

//hooks
import { useTeamMatesQuery } from "../../../../../../hooks/useTeamMatesQuery";
import { useUserId } from "../../../../../useContext/UserContext";
import { useToggle } from "../../../../../../hooks/useToggle";

//type
import { User } from "../../../../../../types/types";

//style
import styles from "./TeamMateList.module.css";

type TeamMateListProps = {
  onChangeActiveTeamMateId: (activeTeamMateId: string) => void;
  activeTeamMateId: string;
};

export const TeamMateList = ({
  onChangeActiveTeamMateId,
  activeTeamMateId,
}: TeamMateListProps) => {
  const { isCollapsed: isTeamMateListCollapsed, toggleHandler } = useToggle(true);
  const handleClick = useCallback(() => {
    toggleHandler(!isTeamMateListCollapsed);
  }, [isTeamMateListCollapsed, toggleHandler]);
  const userId = useUserId();

  const { teamMates, loading, error } = useTeamMatesQuery(userId);

  if (loading) return <Spinner size={80} color="#52bfd9" />;
  if (error) return <ErrorState />;

  const transformButtonClass = !isTeamMateListCollapsed ? styles.transform : "";
  return (
    <div className={styles.teamMateList}>
      <div className={styles.collapse}>
        <div
          className={`${styles.collapseIcon} ${transformButtonClass}`}
          onClick={handleClick}
        >
          ❯
        </div>
        <span className={styles.messageTitle}>Direct Messages</span>
      </div>

      {isTeamMateListCollapsed
        ? teamMates?.map((teamMate: User) => {
            return (
              <TeamMateDetail
                teamMate={teamMate}
                key={teamMate.id}
                onChangeActiveTeamMateId={onChangeActiveTeamMateId}
                isActive={teamMate.id === activeTeamMateId}
              />
            );
          })
        : null}
    </div>
  );
};
