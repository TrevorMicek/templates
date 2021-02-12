import React from 'react';

import styles from '../../styles/FrontPage/headerStyles.module.css'

const Header = () => (
<header>
    
    <section className={styles.headerPictureWrapper}>

<section className={styles.firstSectionOverlay}></section>
<div className={styles.firstTransition}></div>
  <div className={styles.headerBorder}>
  <h1 className={styles.headerTitle}>
      <span>Small Business Web Design</span><span> & Development</span>
  </h1>
  <h2 className={styles.headerText}>Websites By Trevor</h2>
  </div>
  
</section>
    </header>
    
    )
    export default Header;