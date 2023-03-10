import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./login-page.module.css";

const LoginPage = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/homepage");
  }, [router]);

  return (
    <div className={styles.loginPage}>
      <div className={styles.div}>
        <div className={styles.div1}>
          <img className={styles.aIcon} alt="" src="../a.svg" />
          <img className={styles.logoIcon} alt="" src="../logo@2x.png" />
        </div>
        <div className={styles.signIn}>Sign in</div>
      </div>
      <div className={styles.div2}>
        <div className={styles.div3}>
          <img className={styles.logoIcon} alt="" src="../logo@2x.png" />
          <div className={styles.continueToParent}>
            <div className={styles.continueTo}>Continue to</div>
            <b className={styles.thelaunchblog}>TheLaunchBlog</b>
          </div>
        </div>
        <div className={styles.div4}>
          <div className={styles.form}>
            <input
              className={styles.input}
              type="text"
              placeholder="Your Email"
            />
            <input
              className={styles.input1}
              type="text"
              placeholder="Your Password "
            />
            <button className={styles.button} onClick={onButtonClick}>
              <div className={styles.signIn1}>Sign In</div>
            </button>
          </div>
          <div className={styles.dontHaveAnContainer}>
            <span>{`Don't have an account yet? `}</span>
            <span className={styles.signUp}>Sign up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
