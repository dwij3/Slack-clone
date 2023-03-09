import styles from './FriendDetail.module.css';
import Avatar from '../../../../../avatar/Avatar';
import { users } from '../../../../../../data/Users';
import {FriendDetails} from './types';

const FriendDetail = ({friendId}:FriendDetails) => {

    const friendName  = users[friendId].name;
    const friendImageUrl = users[friendId].photo;
    return (
        <div className={styles.friendDetail}>
            <div className={styles.detail}>
                <Avatar src={friendImageUrl} height={"55px"} width={"55px"}/>
                <div className={styles.friendNameContainer}>
                <span className={styles.friendName}>{friendName}</span>
                </div>
                
            </div>
            <div className={styles.commonMessage}>
                This conversation is just between you and <span className={styles.highlight}>@{friendName}</span>.
            </div>
        </div>    
    );
}

export default FriendDetail;