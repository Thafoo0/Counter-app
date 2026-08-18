import { useState } from 'react';
import styles from './Counter.module.css'
function Counter(){
    const [i,setI] = useState(0);
    let Fminus = () => {
        setI(i-1)
    }
    let Fadd = () => {
        setI(i+1)
    }
    let Freset = () => {
        setI(0)
    }

    return(
        <div className={styles.box0}>
        <p>{i}</p>
        <div className={styles.box1}>
            <button onClick={Fminus}>Disconting</button>
            <button onClick={Freset}>Reset</button>
            <button onClick={Fadd}>Count</button>
        </div>
        </div>
    );
}
export default Counter;