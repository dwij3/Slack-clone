import styles from './TeamMateList.module.css';
import TeamMateDetail from './components/teamMateDetail';
import {users} from '../../../../../../data/Users';
import { TeamMateID } from './type';
import { useState } from 'react';

const TeamMateList = ({TeamMateIds , onClick , activeTeamMateId}:TeamMateID) => {
    const [hideTeamMateList , setHideTeamMateList] = useState(false);

    //add useCallback
    const handleClick = () => {
        setHideTeamMateList(!hideTeamMateList);
    }

    const transformButton = hideTeamMateList ? styles.transform : ""; 
    return(
        <div className={styles.teamMateList}>
            <div className={styles.collapse}>
                <div className={`${styles.collapseIcon} ${transformButton}`} onClick={handleClick}>❯</div>
                <span className={styles.messageTitle}>Direct Messages</span>
            </div>
           
            { hideTeamMateList ? null :
                users.map((user) => {
                    return TeamMateIds.includes(user.id) ? <TeamMateDetail teamMateID={user.id} key={user.id} onClick={onClick} activeTeamMateId={activeTeamMateId}/> : null;
                })
            }
        </div>
    )
}

export default TeamMateList;