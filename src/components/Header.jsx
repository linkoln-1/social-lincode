import React from "react";
import styles from "./Header.module.scss";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.HeaderFix}>
          <div className={styles.HeaderLogo}>
            <p>LINCODE</p>
          </div>
          <div className={styles.HeaderSearch}>
            <input type="text" />
          </div>
        </div>
      </header>
      <section className={styles.HeaderSection}>
        <p>Педагогический проект социальная сеть</p>
      </section>
    </>
  );
}

export default Header;
