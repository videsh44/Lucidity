import ToggleSwitch from "../ToggleSwitch"
import styles from './Header.module.less';

const Header = () => {
  return (
    <div className={styles["headerContainer"]} >
        <div></div>
        <div><ToggleSwitch labelLeft="admin" labelRight="user" /></div>
    </div>
  )
}

export default Header
