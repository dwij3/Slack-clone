//style
import styles from "./Header.module.css";

//components
import { Avatar } from "../avatar/Avatar";

//hooks
import { useUser } from "../../hooks/useUser";

export const Header = () => {
  const { userInfo } = useUser();
  const userImage = userInfo?.photo;

  return (
    <div className={styles.header}>
      <Avatar src={userImage} height="30px" width="30px" />
    </div>
  );
};
