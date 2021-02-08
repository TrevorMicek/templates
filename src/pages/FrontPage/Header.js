import React from 'react';
import styles from '../../styles/styles.module.css';
const headerStyles = require('../../styles/headerStyles.module.css')

const Header = () => (
<header>
    
    <section className={headerStyles.headerPictureWrapper}>

<section className={headerStyles.firstSectionOverlay}></section>
<div className={headerStyles.firstTransition}></div>
  <div className={styles.headerBorder}>
  <h1 className={styles.headerTitle}>
      <span>Small Business Web Design</span><span> & Development</span>
  </h1>
  <h2 className={headerStyles.headerText}>Lorem ipsum dolor sit amet</h2>
  </div>
  
</section>
    </header>
    
    )
    export default Header;