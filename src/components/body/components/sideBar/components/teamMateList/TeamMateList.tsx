//style
import styles from "./TeamMateList.module.css";

//component
import { TeamMateDetail } from "./components/teamMateDetail";
import { Error } from "../../../../../error";
import { Spinner } from "../../../../../spinner";

//hooks
import { useCallback, useState } from "react";
import { useTeamMates } from "../../../../../../hooks/useTeamMates";

//type
import { User } from "../../../../../../types/types";
type TeamMateListProps = {
  onChangeActiveTeamMate: (activeTeamMateId: number | string) => void;
  activeTeamMateId: number | string;
};

export const TeamMateList = ({
  onChangeActiveTeamMate,
  activeTeamMateId,
}: TeamMateListProps) => {
  const [toggleTeamMateList, setToggleTeamMateList] = useState<boolean>(true);
  const handleClick = useCallback(() => {
    setToggleTeamMateList(!toggleTeamMateList);
  }, [toggleTeamMateList]);

  const transformButtonClass = !toggleTeamMateList ? styles.transform : "";
  const { teamMates, loading, error } = useTeamMates();

  if (loading) return <Spinner />;
  if (error) return <Error />;

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

      {toggleTeamMateList
        ? teamMates?.map((teamMate: User) => {
            return (
              <TeamMateDetail
                teamMateId={teamMate.id}
                key={teamMate.id}
                onChangeActiveTeamMate={onChangeActiveTeamMate}
                isActive={teamMate.id === activeTeamMateId}
              />
            );
          })
        : null}
    </div>
  );
};
