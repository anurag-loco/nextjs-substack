import Headings from "../components/headings";
import Footer from "../components/footer";
import styles from "./blog-page.module.css";

const BlogPage = () => {
  return (
    <div className={styles.blogPage}>
      <div className={styles.topheader}>
        <div className={styles.logocontainer}>
          <img className={styles.logoIcon} alt="" src="../logo@2x.png" />
        </div>
        <div className={styles.thelaunchblog}>TheLaunchBlog</div>
        <div className={styles.rightSection}>
          <img className={styles.searchIcon} alt="" src="../search1.svg" />
          <button className={styles.subscribeButton}>
            <div className={styles.subscribe}>Subscribe</div>
          </button>
          <div className={styles.signIn}>Sign in</div>
          <div className={styles.profileSettings}>Profile Settings</div>
          <div className={styles.profileSettings}>Log out</div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.article}>
          <Headings />
          <div className={styles.div}>
            <i className={styles.description}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </i>
            <img
              className={styles.blogImageIcon}
              alt=""
              src="../blog-image@2x.png"
            />
            <div className={styles.description}>
              <p
                className={styles.sedUtPerspiciatis}
              >{`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. `}</p>
              <p
                className={styles.sedUtPerspiciatis}
              >{`Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. `}</p>
              <p className={styles.utEnimAd}>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur, vel illum
                qui dolorem eum fugiat quo voluptas nulla pariatur?
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer
        theLaunchBlogLLC="© 2023 TheLaunchBlogchBlog LLC ∙"
        svg="../svg3.svg"
      />
    </div>
  );
};

export default BlogPage;
