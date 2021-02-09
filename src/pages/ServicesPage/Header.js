import React from 'react';


import styles from '../../styles/SecondaryPages/secondaryHeader.module.css';
const Header = () => (
    <header>
    <section className={styles.headerPictureWrapper}>
      <div className={styles.headerOverlay}></div>

  <div className={styles.headerBorder}>
  <h1 className={styles.headerTitle}>
      Services & Pricing
  </h1>
  
  </div>
</section>

    </header>
    
)
export default Header;