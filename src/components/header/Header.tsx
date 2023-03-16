//components
import { Avatar } from "../avatar/Avatar";

//hooks
import { useUserQuery } from "../../hooks/useUserQuery";
import { useUserId } from "../../hooks/UserContext";

//style
import styles from "./Header.module.css";

export const Header = () => {
  const userId = useUserId();
  const { userInfo } = useUserQuery(userId);
  const userImage = userInfo?.photo;

  return (
    <div className={styles.header}>
      <Avatar src={userImage} alt={userInfo?.name} height="30px" width="30px" />
    </div>
  );
};
