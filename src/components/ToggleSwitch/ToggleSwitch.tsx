
import { useState } from 'react';
import styles from './ToggleSwitch.module.less';
import { useDispatch } from 'react-redux';
import { ADMIN, USER, updateUser } from '../../redux/slices/userSlice';

type ToggleSwitchProps = {
  labelLeft: string;
  labelRight: string;
};

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ labelLeft, labelRight }) => {
  const dispatch = useDispatch();
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    const userType = isOn ? ADMIN : USER;
    setIsOn(!isOn);
    dispatch(updateUser(userType))
  }

  return (
    <div className={styles.toggleContainer}>
      <span>{labelLeft}</span>
      <div
        className={`${styles.toggle} ${isOn ? styles.on : ''}`}
        onClick={() => handleToggle()}
      >
        <div className={styles.slider}></div>
      </div>
      <span>{labelRight}</span>
    </div>
  );
};

export default ToggleSwitch;
