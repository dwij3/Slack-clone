//style
import styles from "./Profile.module.css";

//components
import Avatar from "../avatar/Avatar";

//hooks
import useUser from "../../hooks/useUser";

const Profile = () => {
  const { userInfo } = useUser();
  const userImage = userInfo?.photo;

  return (
    <div className={styles.header}>
      <Avatar src={userImage} height={"30px"} width={"30px"} />
    </div>
  );
};

export default Profile;
