import styles from './TeamMateList.module.css';
import TeamMateDetail from './components/teamMateDetail';
import {users} from '../../../../../../data/Users';
import { TeamMateID } from './type';
import { useState } from 'react';

const TeamMateList = ({TeamMateIds , onClick}:TeamMateID) => {
    const [hideTeamMateList , setHideTeamMateList] = useState(false);

    //add useCallback
    const handleClick = () => {
        setHideTeamMateList(!hideTeamMateList);
    }

    return(
        <div className={styles.teamMateList}>
            <div className={styles.collapse}>
                <span className={styles.collapseIcon} onClick={handleClick}>❯</span>
                <span className={styles.messageTitle}>Direct Messages</span>
            </div>
           
            { hideTeamMateList ? null :
                users.map((user) => {
                    return TeamMateIds.includes(user.id) ? <TeamMateDetail teamMateID={user.id} key={user.id} onClick={onClick}/> : null;
                })
            }
        </div>
    )
}

export default TeamMateList;