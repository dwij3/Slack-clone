import styles from './SideBar.module.css';
import TeamMateList from './components/teamMateList';
import SideBarHeader from './components/sideBarHeader/SideBarHeader';
const SideBar = () => {
    return (
        <div className={styles.sideBar}>
            <SideBarHeader />
            <TeamMateList/>
        </div>
    )
}

export default SideBar;