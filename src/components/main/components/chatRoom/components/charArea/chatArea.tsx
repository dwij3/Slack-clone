import styles from './chatArea.module.css';
import TeamMateDetail from './components/teamMateDetail/TeamMateDetail';
import Message from './components/message/Message';
import {ID } from './type';
import { useUserId } from '../../../../../../hooks/UserContext';
import { useEffect, useRef } from 'react';


const ChatArea = ({teamMateId , filterMessage}:ID) => {

    let userId = useUserId();

    const lastMessageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(lastMessageRef.current){
            lastMessageRef.current.scrollIntoView();
        }
    });
    
    
    const conversation = filterMessage(userId , teamMateId);
    console.log(conversation);
    return (
        <div className={styles.displayMessage}>
            <TeamMateDetail teamMateId={teamMateId}/>
            {
                conversation.map((message:any,idx:number,conversation:any) => {
                    if(idx === conversation.length-1){
                        console.log(idx);
                        return <Message key={message.id} message={message} MyRef={lastMessageRef}/>
                    }
                   
                    return <Message key={message.id} message={message} />
                })
            } 
        </div>
    )
}

export default ChatArea;