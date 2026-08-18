import Counter from "./Counter/Counter";
import styles from "./Counter/Counter.module.css"; 
function App() {
  return(
    <div className={styles.container}>
      <Counter/>
    </div>
  );
}
export default App