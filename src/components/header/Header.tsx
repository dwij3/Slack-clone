//style
import styles from "./Header.module.css";

//components
import { Avatar } from "../avatar/Avatar";

//hooks
import { useUser } from "../../hooks/useUser";
import { useUserId } from "../../hooks/UserContext";

export const Header = () => {
  const userId = useUserId();
  const { userInfo } = useUser(userId);
  const userImage = userInfo?.photo;

  return (
    <div className={styles.header}>
      <Avatar src={userImage} height="30px" width="30px" />
    </div>
  );
};
