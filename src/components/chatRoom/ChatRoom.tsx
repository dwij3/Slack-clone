import styles from './ChatRoom.module.css';
import AddMessage from './components/addMessage/AddMessage';
import DisplayMessage from './components/displayMessage';
import UserProfile from './components/userProfile';

const ChatRoom = () => {

    return (
        <div className={styles.chatRoom}>
            <UserProfile/>
            <DisplayMessage />
            <AddMessage />
            
        </div>
    )
}

export default ChatRoom;