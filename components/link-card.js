import Link from "next/link";
import styles from "./link-card.module.css";

const LinkCard = ({ svg, svg1, svg2 }) => {
  return (
    <Link href="/blog-page">
      <a className={styles.div}>
        <div className={styles.div1}>
          <b className={styles.title}>How to launch even faster</b>
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
      </a>
    </Link>
  );
};

export default LinkCard;
