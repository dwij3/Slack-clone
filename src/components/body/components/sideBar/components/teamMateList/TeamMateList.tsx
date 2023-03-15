//libs
import { useCallback, useState } from "react";

//component
import { TeamMateDetail } from "./components/teamMateDetail";
import { Error } from "../../../../../error";
import { Spinner } from "../../../../../spinner";

//hooks
import { useTeamMatesQuery } from "../../../../../../hooks/useTeamMatesQuery";
import { useUserId } from "../../../../../../hooks/UserContext";

//type
import { User } from "../../../../../../types/types";

//style
import styles from "./TeamMateList.module.css";

type TeamMateListProps = {
  onChangeActiveTeamMate: (activeTeamMate: User) => void;
  activeTeamMate: User;
};

export const TeamMateList = ({
  onChangeActiveTeamMate,
  activeTeamMate,
}: TeamMateListProps) => {
  const [toggleTeamMateList, setToggleTeamMateList] = useState<boolean>(true);
  const handleClick = useCallback(() => {
    setToggleTeamMateList(!toggleTeamMateList);
  }, [toggleTeamMateList]);
  const userId = useUserId();

  const { teamMates, loading, error } = useTeamMatesQuery(userId);

  if (loading) return <Spinner size={80} color="#52bfd9" />;
  if (error) return <Error />;

  const transformButtonClass = !toggleTeamMateList ? styles.transform : "";
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
                teamMate={teamMate}
                key={teamMate.id}
                onChangeActiveTeamMate={onChangeActiveTeamMate}
                isActive={teamMate.id === activeTeamMate?.id}
              />
            );
          })
        : null}
    </div>
  );
};
