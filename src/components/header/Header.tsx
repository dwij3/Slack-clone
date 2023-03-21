//components
import { Avatar } from "../avatar/Avatar";

//hooks
import { useUserQuery } from "../../hooks/useUserQuery";
import { useUserId } from "../useContext/UserContext";

//style
import styles from "./Header.module.css";

export const Header = () => {
  const userId = useUserId();
  const { userInfo } = useUserQuery(userId);

  return (
    <div className={styles.header}>
      <Avatar src={userInfo?.photo} alt={userInfo?.name} height="30px" width="30px" />
    </div>
  );
};
