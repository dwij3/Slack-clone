import styles from './TeamMateDetail.module.css';
import Avatar from '../../../../../../../avatar/Avatar';
import { users } from '../../../../../../../../data/Users';
import {TeamMateDetails} from './types';
import getUserIdx from '../../../../../../../../data/getUserIdx';

const TeamMateDetail = ({teamMateId}:TeamMateDetails) => {

    const teamMateIdx = getUserIdx(teamMateId);
    const teamMateName  = users[teamMateIdx].name;
    const teamMateImageUrl = users[teamMateIdx].photo;
    return (
        <div className={styles.friendDetail}>
            <div className={styles.detail}>
                <Avatar src={teamMateImageUrl} height={"55px"} width={"55px"}/>
                <div className={styles.friendNameContainer}>
                <span className={styles.friendName}>{teamMateName}</span>
                </div>
                
            </div>
            <div className={styles.commonMessage}>
                This conversation is just between you and <span className={styles.highlight}>@{teamMateName}</span>.
            </div>
        </div>    
    );
}

export default TeamMateDetail;