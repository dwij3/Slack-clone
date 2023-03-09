import styles from './ChatRoom.module.css';
import DisplayMessage from './components/displayMessage';
import TeamMateProfile from './components/teamMateProfile';
import AddMessage  from './components/addMessage/AddMessage';
import {ChatRoomProps} from './type';

const ChatRoom = ({teamMateId}:ChatRoomProps) => {
    
    return (
        <div className={styles.chatRoom}>
            <TeamMateProfile teamMateId={teamMateId}/>
            <DisplayMessage teamMateId={teamMateId}/>
            <AddMessage teamMateId={teamMateId}/>
        </div>
    )
}

export default ChatRoom;