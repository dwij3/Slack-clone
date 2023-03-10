import styles from './Message.module.css';
import Avatar from '../../../../../../../avatar/Avatar';
import {users} from '../../../../../../../../data/Users';
import getUserIdx from '../../../../../../../../data/getUserIdx';



const formatAMPM = (date:Date) => {
  let hours = date.getHours();
  let minutes: (string | number)= date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; 
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

const Message =({message,MyRef}:any ) => {
   
    const date = new Date();
    const currentTime = formatAMPM(date);

    const ownerId = message.from;
    const ownerIdx = getUserIdx(ownerId);
    const ownerImage = users[ownerIdx].photo;
    const ownerName = users[ownerIdx].name;
    const content = message.content;
    console.log(MyRef);

    return(
        <div className={styles.message} ref={MyRef}>
            <div className={styles.avatar}>
            <Avatar src={ownerImage} height='36px' width='36px'/>
            </div>
           
            <div className={styles.messageDetails}>
                <div className={styles.userDetail}>
                    <span className={styles.userName}>{ownerName}</span>
                    <span className={styles.currentTime}>{currentTime}</span>
                </div>
                <div className={styles.content}>
                    {content}
                </div>
            </div>
        </div>
    )
};
export default Message;