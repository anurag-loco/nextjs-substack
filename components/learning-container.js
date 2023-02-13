import Link from "next/link";
import SmallCard from "../components/small-card";
import LaunchCard from "../components/launch-card";
import LinkCard from "../components/link-card";
import styles from "./learning-container.module.css";

const LearningContainer = () => {
  return (
    <div className={styles.featured}>
      <div className={styles.leftsection}>
        <SmallCard
          svgImageUrls="../cardimage@2x.png"
          svgImageUrls2="../svg5.svg"
          svgImageUrls6and9="../svg6.svg"
          svgImageUrls7and10="../svg7.svg"
        />
        <SmallCard
          svgImageUrls="../cardimage1@2x.png"
          svgImageUrls2="../svg8.svg"
          svgImageUrls6and9="../svg9.svg"
          svgImageUrls7and10="../svg10.svg"
        />
      </div>
      <div className={styles.middlesection}>
        <Link href="/blog-page">
          <a className={styles.bigcard}>
            <img
              className={styles.bigcardiamgeIcon}
              alt=""
              src="../bigcardiamge@2x.png"
            />
            <div className={styles.details}>
              <b className={styles.title}>{`Best Productivity Tips `}</b>
              <div className={styles.description}>
                Top tips to make you launch your idea even faster
              </div>
              <div className={styles.stats}>
                <div className={styles.date}>
                  <img className={styles.svgIcon} alt="" src="../svg6.svg" />
                  <div className={styles.datetext}>Feb 9</div>
                </div>
                <div className={styles.likes}>
                  <img className={styles.svgIcon} alt="" src="../svg7.svg" />
                  <div className={styles.datetext}>35</div>
                </div>
                <div className={styles.comments}>
                  <img className={styles.svgIcon} alt="" src="../svg8.svg" />
                  <div className={styles.datetext}>1</div>
                </div>
              </div>
            </div>
          </a>
        </Link>
        <LaunchCard
          svg="../svg14.svg"
          svg1="../svg15.svg"
          svg2="../svg16.svg"
          listCardImage="../listcardimage@2x.png"
        />
      </div>
      <div className={styles.rightsection}>
        <div className={styles.h3}>
          <div className={styles.mostPopular}>Most popular</div>
        </div>
        <div className={styles.separator} />
        <LinkCard svg="../svg17.svg" svg1="../svg18.svg" svg2="../svg19.svg" />
        <div className={styles.separator} />
        <LinkCard svg="../svg20.svg" svg1="../svg21.svg" svg2="../svg22.svg" />
        <div className={styles.separator} />
        <LinkCard svg="../svg23.svg" svg1="../svg24.svg" svg2="../svg25.svg" />
        <div className={styles.separator} />
        <LinkCard svg="../svg26.svg" svg1="../svg27.svg" svg2="../svg28.svg" />
        <div className={styles.separator} />
        <LinkCard svg="../svg29.svg" svg1="../svg30.svg" svg2="../svg31.svg" />
        <div className={styles.separator} />
        <LinkCard svg="../svg32.svg" svg1="../svg33.svg" svg2="../svg34.svg" />
        <div className={styles.separator} />
        <div className={styles.a}>
          <div className={styles.seeAllPopular}>See all popular</div>
          <img className={styles.svgIcon3} alt="" src="../svg30.svg" />
        </div>
      </div>
    </div>
  );
};

export default LearningContainer;
