import styles from './ChatRoom.module.css';
import ChatArea from './components/charArea';
import TeamMateProfile from './components/teamMateProfile';
import AddMessage  from './components/addMessage/AddMessage';
import {ChatRoomProps} from './type';
import useMessages  from './components/hooks/useMessages';
const ChatRoom = ({teamMateId}:ChatRoomProps) => {
    const { onAction , filterMessage} = useMessages();
    return (
        <div className={styles.chatRoom}>
            <TeamMateProfile teamMateId={teamMateId}/>
            <ChatArea teamMateId={teamMateId} filterMessage={filterMessage}/>
            <AddMessage teamMateId={teamMateId} onAction={onAction}/>
        </div>
    )
}

export default ChatRoom;