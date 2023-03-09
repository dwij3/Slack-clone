import styles from './DisplayMessage.module.css';
import FriendDetail from './components/friendDetail/FriendDetail';
import Message from './components/message/Message';
const DisplayMessage = () => {
    return (
        <div className={styles.displayMessage}>
            <FriendDetail friendId={5}/>
            
            <Message messageId={1} />
            <Message messageId={2} />
            <Message messageId={3} />
            <Message messageId={4} />
            <Message messageId={5} />
            <Message messageId={6} />
            <Message messageId={7} />
            <Message messageId={8} />
            <Message messageId={9} />
            <Message messageId={10} />
            <Message messageId={1} />
            <Message messageId={2} />
            <Message messageId={3} />
            <Message messageId={4} />
            <Message messageId={5} />
            <Message messageId={6} />
            <Message messageId={7} />
            <Message messageId={8} /> 
            <Message messageId={9} /> 
        </div>
    )
}

export default DisplayMessage;