//components
import { Avatar } from "../avatar/Avatar";

//hooks
import { useUserQuery } from "../../hooks/useUserQuery";

//style
import styles from "./Header.module.css";

export const Header = () => {
  const { userInfo } = useUserQuery();
  const userImage = userInfo?.photo;

  return (
    <div className={styles.header}>
      <Avatar src={userImage} height="30px" width="30px" />
    </div>
  );
};
