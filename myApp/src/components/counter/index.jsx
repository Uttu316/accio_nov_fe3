import { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  const [x, setX] = useState(0);

  const onAdd = () => {
    setX(x + 1); //async
    setX(x + 1);
    setX(x + 1);
    setX(x + 1);
    console.log("Add", x); //sync
  };
  const onMinus = () => {
    setX((curr) => curr - 1);
    setX((curr) => curr - 1);
    setX((curr) => curr - 1);
    setX((curr) => curr - 1);
    console.log("Minus", x);
  };

  console.log("Counter rendering");
  return (
    <div className={styles.counter}>
      <h2 className={styles.title}>Counter</h2>
      <h3 className={styles.value}>{x}</h3>
      <div className={styles.actions}>
        <button className={`${styles.button} ${styles.add}`} onClick={onAdd}>
          Add
        </button>
        <button
          className={`${styles.button} ${styles.minus}`}
          onClick={onMinus}
        >
          Minus
        </button>
      </div>
    </div>
  );
};

export default Counter;
