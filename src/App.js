import styles from "./App.module.css";
import Users from "./components/Users";

const App = () => {
  return (
    <div className={styles.content}>
      <Users />
    </div>
  );
};

export default App;
