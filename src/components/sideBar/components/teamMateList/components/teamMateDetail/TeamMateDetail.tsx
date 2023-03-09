import styles from './TeamMateDetail.module.css';
import {ID} from './type';
import {users} from '../../../../../../data/Users';
import Avatar  from '../../../../../avatar/Avatar';

const TeamMateDetail = ({teamMateID}:ID) => {

    const teamMateImage = users[teamMateID].photo;
    const teamMateName = users[teamMateID].name;
    return(
        <div className={styles.teamMateDetail}>
            <Avatar src={teamMateImage} height={'20px'} width={'20px'}/>
            <span className={styles.teamMateName}>{teamMateName}</span>
        </div>
    )
}

export default TeamMateDetail;