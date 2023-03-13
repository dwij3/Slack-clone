import styles from "./Profile.module.css";
import Avatar from "../avatar/Avatar";
import useUser from "../../hooks/useUser";

const Profile = () => {
  const { userInfo } = useUser();
  const userImage = userInfo.photo;
  console.log(userInfo);

  return (
    <div className={styles.header}>
      <Avatar src={userImage} height={"30px"} width={"30px"} />
    </div>
  );
};

export default Profile;
