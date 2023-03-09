import styles from './TeamMateList.module.css';
// import {users} from '../../../../data/Users';
import TeamMateDetail from './components/teamMateDetail';

const TeamMateList = () => {

    return(
        <div className={styles.teamMateList}>
            <p>Direct Messages</p>
            <TeamMateDetail teamMateID={1}/>
            <TeamMateDetail teamMateID={2}/>
            <TeamMateDetail teamMateID={3}/>
            <TeamMateDetail teamMateID={4}/>
            <TeamMateDetail teamMateID={5}/>
        </div>
    )
}

export default TeamMateList;