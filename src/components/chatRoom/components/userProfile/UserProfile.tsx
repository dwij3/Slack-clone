import styles from './UserProfile.module.css';
import Avatar from '../../../avatar/Avatar';
import {id} from './type';
import {users} from '../../../../data/Users';

const UserProfile = ({friendId}:id) => {
    const friendImage = users[friendId].photo;
    const friendName = users[friendId].name;
    return (
        <div className={styles.userProfile}>
            {/* User Profile Section */}
            <Avatar src={friendImage} height={"35px"} width={"35px"} />
            <span className={styles.userName}>{friendName}</span>

        </div>
    )
}

export default UserProfile;