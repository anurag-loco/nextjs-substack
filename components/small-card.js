import Link from "next/link";
import styles from "./small-card.module.css";

const SmallCard = ({
  svgImageUrls,
  svgImageUrls2,
  svgImageUrls6and9,
  svgImageUrls7and10,
}) => {
  return (
    <Link href="/blog-page">
      <a className={styles.leftcard}>
        <img className={styles.cardimageIcon} alt="" src={svgImageUrls} />
        <div className={styles.details}>
          <b className={styles.title}>How to learn app development</b>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </div>
          <div className={styles.stats}>
            <div className={styles.date}>
              <img className={styles.svgIcon} alt="" src={svgImageUrls2} />
              <div className={styles.datetext}>Feb 9</div>
            </div>
            <div className={styles.likes}>
              <img className={styles.svgIcon} alt="" src={svgImageUrls6and9} />
              <div className={styles.datetext}>35</div>
            </div>
            <div className={styles.comments}>
              <img className={styles.svgIcon} alt="" src={svgImageUrls7and10} />
              <div className={styles.datetext}>1</div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default SmallCard;
