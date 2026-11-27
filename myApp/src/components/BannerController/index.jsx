import { useState } from "react";
import SaleBanner from "./saleBanner";
import styles from "./bannerController.module.css";

const BannerController = () => {
  const [showBanner, setShowBanner] = useState(false);
  return (
    <div className={styles.controller}>
      <h2 className={styles.title}>Banner Controller</h2>
      <button
        className={`${styles.toggle} ${showBanner ? styles.hide : styles.show}`}
        onClick={() => setShowBanner(!showBanner)}
      >
        {showBanner ? "Hide" : "Show"} Banner
      </button>

      {showBanner && <SaleBanner />}
    </div>
  );
};

export default BannerController;
