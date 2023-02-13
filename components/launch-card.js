import Link from "next/link";
import styles from "./launch-card.module.css";

const LaunchCard = ({ svg, svg1, svg2, listCardImage }) => {
  return (
    <Link href="/blog-page">
      <a className={styles.listcard}>
        <div className={styles.div}>
          <b className={styles.title}>Planning your app launch</b>
          <div className={styles.description}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </div>
          <div className={styles.stats}>
            <div className={styles.date}>
              <img className={styles.svgIcon} alt="" src={svg} />
              <div className={styles.datetext}>Feb 9</div>
            </div>
            <div className={styles.likes}>
              <img className={styles.svgIcon} alt="" src={svg1} />
              <div className={styles.datetext}>35</div>
            </div>
            <div className={styles.comments}>
              <img className={styles.svgIcon} alt="" src={svg2} />
              <div className={styles.datetext}>1</div>
            </div>
          </div>
        </div>
        <img className={styles.listcardimageIcon} alt="" src={listCardImage} />
      </a>
    </Link>
  );
};

export default LaunchCard;
