import styles from './Avatar.module.css';
import {Avatarprops} from './types';

const Avatar = ({src,height,width} : Avatarprops) => {
    return(
        <img className={styles.Avatar} src={src} alt={"!!"} height={height} width={width}/>
    );
};

export default Avatar;