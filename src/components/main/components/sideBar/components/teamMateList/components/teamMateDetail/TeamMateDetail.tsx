import styles from './TeamMateDetail.module.css';
import {ID} from './type';
import {users} from '../../../../../../../../data/Users';
import Avatar  from '../../../../../../../avatar/Avatar';
import { useCallback } from 'react';
import getUserIdx from '../../../../../../../../data/getUserIdx';

const TeamMateDetail = ({teamMateID , onClick}:ID) => {

    const teamMateIdx = getUserIdx(teamMateID);
    const teamMateImage = users[teamMateIdx].photo;
    const teamMateName = users[teamMateIdx].name;
    const handleClick = useCallback( () => onClick(teamMateID) ,[onClick, teamMateID]);
    return(
        <div className={styles.teamMateDetail} onClick={handleClick}>
            <Avatar src={teamMateImage} height={'20px'} width={'20px'}/>
            <span className={styles.teamMateName}>{teamMateName}</span>
        </div>
    )
}

export default TeamMateDetail;