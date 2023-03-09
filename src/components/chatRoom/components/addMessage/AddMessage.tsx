import styles from './AddMessage.module.css';
import { useState , useCallback  } from 'react';

const AddMessage = () => {
    //const [message , setMessage] = useState('');

    // const handleClick = useCallback( (e:ChangeEvent<HTMLInputElement>) => {
    //     if(e.target){
    //         setMessage(e.target.value);
    //     }
       
  //  },[]);

    return (
        <div className={styles.addMessage}>
            <div className={styles.inputField} >
                <input type="text" className={styles.input}/>
            </div>

        </div>
    )
}

export default AddMessage;