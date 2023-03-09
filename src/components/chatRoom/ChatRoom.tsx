import styles from './ChatRoom.module.css';
import DisplayMessage from './components/displayMessage';
import UserProfile from './components/userProfile';
import AddMessage  from './components/addMessage/AddMessage';

const ChatRoom = () => {

    return (
        <div className={styles.chatRoom}>
            <UserProfile friendId={2}/>
            <DisplayMessage />
            <AddMessage />
        </div>
    )
}

export default ChatRoom;