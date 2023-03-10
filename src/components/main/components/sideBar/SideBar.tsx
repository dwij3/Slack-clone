import styles from './SideBar.module.css';
import TeamMateList from './components/teamMateList';
import SideBarHeader from './components/sideBarHeader/SideBarHeader';
import { useUserId } from '../../../../hooks/UserContext';
import {users} from '../../../../data/Users';
import getUserIdx from '../../../../data/getUserIdx';


const SideBar = ({onClick , teamMateId}:any) => {

    const userId = useUserId();
    const userIdx = getUserIdx(userId);
    const teamMateIds = users[userIdx].teamMateId;
    return (
        <div className={styles.sideBar}>
            <SideBarHeader />
            <TeamMateList TeamMateIds={teamMateIds} onClick={onClick} activeTeamMateId={teamMateId}/>
        </div>
    )
}

export default SideBar;