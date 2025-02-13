import Header from './components/Header';
import Inventory from './components/Inventory';
import styles from './styles.module.less';

const App: React.FC = () => {
    return (
        <div className={styles["container"]}>
            <Header />
            <Inventory />
        </div>
    )
}

export default App;