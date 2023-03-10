import styles from "./Profile.module.css";
import Avatar from "../avatar/Avatar";
import { users } from "../../data/Users";
import getUserIdx from "../../data/getUserIdx";
import { useUserId } from "../../hooks/UserContext";

const Profile = () => {
  const userId = useUserId();
  const userIdx = getUserIdx(userId);
  const userImage = users[userIdx].photo;
  return (
    <div className={styles.header}>
      <Avatar src={userImage} height={"30px"} width={"30px"} />
    </div>
  );
};

export default Profile;
