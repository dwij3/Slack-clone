import styles from './TeamMateDetail.module.css';
// import {ID} from './type';
import {users} from '../../../../../../../../data/Users';
import Avatar  from '../../../../../../../avatar/Avatar';
import { useCallback } from 'react';
import getUserIdx from '../../../../../../../../data/getUserIdx';
import { useUserId } from '../../../../../../../../hooks/UserContext';

const TeamMateDetail = ({teamMateID , onClick , activeTeamMateId}:any) => {

    const teamMateIdx = getUserIdx(teamMateID);
    const teamMateImage = users[teamMateIdx].photo;
    const teamMateName = users[teamMateIdx].name;
    const handleClick = useCallback( () => onClick(teamMateID) ,[onClick, teamMateID]);
    const highlight = (teamMateID === activeTeamMateId) ? styles.highlight : "";
    const userId = useUserId();
    return(
        <div className={`${styles.teamMateDetail} ${highlight}`} onClick={handleClick}>
            <Avatar src={teamMateImage} height={'20px'} width={'20px'}/>
            <span className={styles.teamMateName}>{teamMateName}</span>
            {
                (userId === teamMateID) ? <span className={styles.user}>you</span> : (null)
            }
        </div>
    )
}

export default TeamMateDetail;