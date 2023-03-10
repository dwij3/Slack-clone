import styles from './TeamMateDetail.module.css';
import Avatar from '../../../../../../../avatar/Avatar';
import { users } from '../../../../../../../../data/Users';
import {TeamMateDetails} from './types';
import getUserIdx from '../../../../../../../../data/getUserIdx';
import { useUserId } from '../../../../../../../../hooks/UserContext';

const TeamMateDetail = ({teamMateId}:TeamMateDetails) => {

    const teamMateIdx = getUserIdx(teamMateId);
    const teamMateName  = users[teamMateIdx].name;
    const teamMateImageUrl = users[teamMateIdx].photo;
    const userId = useUserId();
    return (
        <div className={styles.friendDetail}>
            <div className={styles.detail}>
                <Avatar src={teamMateImageUrl} height={"55px"} width={"55px"}/>
                <div className={styles.friendNameContainer}>
                <span className={styles.friendName}>{teamMateName}</span>
                </div>
                
            </div>
            <div className={styles.commonMessage}>  
                {
                    (userId===teamMateId) ? <span>This space is just for you. Jot down notes, list your to-dos, or keep links and files handy</span> :  <span>This conversation is just between you  and  <span className={styles.highlight}>@{teamMateName}</span></span>
                }
                
            </div>
        </div>    
    );
}

export default TeamMateDetail;