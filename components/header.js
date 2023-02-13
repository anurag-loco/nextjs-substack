import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.topheader}>
        <div className={styles.logocontainer}>
          <img className={styles.logoIcon} alt="" src="../logo@2x.png" />
        </div>
        <div className={styles.thelaunchblog}>TheLaunchBlog</div>
        <div className={styles.rightSection}>
          <img className={styles.searchIcon} alt="" src="../search.svg" />
          <button className={styles.subscribeButton}>
            <div className={styles.subscribe}>Subscribe</div>
          </button>
          <div className={styles.signIn}>Sign in</div>
          <div className={styles.profileSettings}>Profile Settings</div>
          <div className={styles.profileSettings}>Log out</div>
        </div>
      </div>
      <div className={styles.separator} />
      <div className={styles.menu}>
        <b className={styles.home}>Home</b>
        <div className={styles.about}>About</div>
      </div>
      <div className={styles.separator} />
    </div>
  );
};

export default Header;
