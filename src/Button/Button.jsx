import { useState } from 'react';
import styles from './Button.module.css'
function Button(){
    let i = 0;
    const [name , setName] = useState("harold");
    const changename = () => {
    if(i % 2 == 0){
        setName("root");
    }
    else setName("harold");
    i++;
    }
    return(
        <div>
            <h1>my name is : {name}</h1>
            <button onClick={changename} className={styles.mybtn}>Click</button>
        </div>
    );
}
export default Button