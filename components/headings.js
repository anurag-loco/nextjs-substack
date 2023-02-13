import styles from "./headings.module.css";

const Headings = () => {
  return (
    <div className={styles.div}>
      <div
        className={styles.bestProductivityTips}
      >{`Best Productivity Tips `}</div>
      <div className={styles.topTipsTo}>
        Top tips to make you launch your idea even faster
      </div>
      <div className={styles.div1}>
        <div className={styles.div2}>
          <img className={styles.svgIcon} alt="" src="../svg54.svg" />
          <div className={styles.hrAgo}>13 hr ago</div>
        </div>
        <div className={styles.div3}>
          <div className={styles.a}>
            <img className={styles.svgIcon1} alt="" src="../svg55.svg" />
            <div className={styles.div4}>27</div>
          </div>
          <div className={styles.a1}>
            <img className={styles.svgIcon1} alt="" src="../svg56.svg" />
            <div className={styles.div4}>1</div>
          </div>
          <img className={styles.aIcon} alt="" src="../a.svg" />
        </div>
      </div>
    </div>
  );
};

export default Headings;
