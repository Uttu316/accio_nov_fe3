import { useEffect, useState } from "react";
import styles from "./saleBanner.module.css";

const SaleBanner = () => {
  const [x, setX] = useState(0);

  useEffect(() => {
    //setup function
    console.log("Banner Mounted ");

    return () => {
      //cleanup function
      console.log("Banner Unmounted ");
    };
  }, []);

  useEffect(() => {
    console.log("Discount Updated", x);

    return () => {
      console.log("Last Discout value cleanup", x);
    };
  }, [x]);

  return (
    <div className={styles.banner}>
      <span className={styles.badge}>Live</span>
      <h1 className={styles.heading}>Sale is Live</h1>
      <button className={styles.offer} onClick={() => setX(x + 5)}>
        Discount offer {x}% off
      </button>
    </div>
  );
};
export default SaleBanner;
