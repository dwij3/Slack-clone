import styles from './AddMessage.module.css';
// import { useState , useCallback, SetStateAction  } from 'react';

const AddMessage = () => {
    // const [message , setMessage] = useState('');

//     const handleClick = useCallback( (e: { target: { value: SetStateAction<string>; }; }) => {
//         if(e.target){
//             setMessage(e.target.value);
//         }
       
//    },[]);

    return (
        <div className={styles.addMessage}>
           
            <div className={styles.inputField} >
                <input type="text" className={styles.input} placeholder="Message here"/>
            </div>

        </div>
    )
}

export default AddMessage;