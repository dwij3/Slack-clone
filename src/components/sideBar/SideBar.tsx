import styles from './SideBar.module.css';
import FriendList from './components/friendList';
import SideBarHeader from './components/sideBarHeader/SideBarHeader';
const SideBar = () => {
    return (
        <div className={styles.sideBar}>
            <SideBarHeader />
            <FriendList/>
        </div>
    )
}

export default SideBar;