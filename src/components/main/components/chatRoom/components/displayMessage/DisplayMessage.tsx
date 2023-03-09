import styles from './DisplayMessage.module.css';
import TeamMateDetail from './components/teamMateDetail/TeamMateDetail';
import Message from './components/message/Message';
import {ID } from './type';
import { useUserId } from '../../../../../../hooks/UserContext';
import useMessages from '../hooks/useMessages';
const DisplayMessage = ({teamMateId}:ID) => {

    let userId = useUserId();
    const { filterMessage} = useMessages(); 
    const conversation = filterMessage(userId , teamMateId);
    return (
        <div className={styles.displayMessage}>
            <TeamMateDetail teamMateId={teamMateId}/>
            {
                conversation.map((content) => {
                    return <Message key={content.id} messageId={content.id} />
                })
            } 
        </div>
    )
}

export default DisplayMessage;