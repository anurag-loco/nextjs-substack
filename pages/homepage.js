import Head from "next/head";
import Header from "../components/header";
import LearningContainer from "../components/learning-container";
import LaunchCard from "../components/launch-card";
import SubscribeCTA from "../components/subscribe-c-t-a";
import SubscribeContainer from "../components/subscribe-container";
import Footer from "../components/footer";
import styles from "./homepage.module.css";

const Homepage = () => {
  return (
    <>
      <Head>
        <title>Newsletter</title>
      </Head>
      <div className={styles.homepage}>
        <Header />
        <div className={styles.main}>
          <LearningContainer />
          <div className={styles.allposts}>
            <div className={styles.postsLeft}>
              <div className={styles.postsHeaderContainer}>
                <div className={styles.postsHeader}>
                  <b className={styles.new}>New</b>
                  <img
                    className={styles.searchIcon}
                    alt=""
                    src="../search-icon.svg"
                  />
                </div>
                <div className={styles.separator} />
              </div>
              <div className={styles.list}>
                <LaunchCard
                  svg="../svg36.svg"
                  svg1="../svg37.svg"
                  svg2="../svg38.svg"
                  listCardImage="../listcardimage1@2x.png"
                />
                <LaunchCard
                  svg="../svg39.svg"
                  svg1="../svg40.svg"
                  svg2="../svg41.svg"
                  listCardImage="../listcardimage1@2x.png"
                />
                <LaunchCard
                  svg="../svg42.svg"
                  svg1="../svg43.svg"
                  svg2="../svg44.svg"
                  listCardImage="../listcardimage1@2x.png"
                />
                <LaunchCard
                  svg="../svg45.svg"
                  svg1="../svg46.svg"
                  svg2="../svg47.svg"
                  listCardImage="../listcardimage1@2x.png"
                />
                <LaunchCard
                  svg="../svg48.svg"
                  svg1="../svg49.svg"
                  svg2="../svg50.svg"
                  listCardImage="../listcardimage1@2x.png"
                />
                <LaunchCard
                  svg="../svg51.svg"
                  svg1="../svg52.svg"
                  svg2="../svg53.svg"
                  listCardImage="../listcardimage1@2x.png"
                />
                <LaunchCard
                  svg="../svg54.svg"
                  svg1="../svg55.svg"
                  svg2="../svg56.svg"
                  listCardImage="../listcardimage1@2x.png"
                />
                <button className={styles.a}>
                  <div className={styles.seeAll}>See all</div>
                  <img className={styles.svgIcon} alt="" src="../svg52.svg" />
                </button>
              </div>
            </div>
            <SubscribeCTA />
          </div>
          <SubscribeContainer />
        </div>
        <Footer
          theLaunchBlogLLC="© 2023 TheLaunchBlog LLC ∙"
          svg="../svg58.svg"
        />
      </div>
    </>
  );
};

export default Homepage;
