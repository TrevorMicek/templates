import React from 'react';


import styles from '../../layout/secondaryHeader.module.css';
const Header = (props) => (


    <section className={styles.headerPictureWrapper}>

    <section className={styles.firstSectionOverlay}></section>
    <div className={styles.firstTransition}></div>
      <div className={styles.headerBorder}>
      <h1 className={styles.headerTitle}>
          <span>{props.title}</span>
      </h1>
      <h2 className={styles.headerText}>Websites By Trevor</h2>
      </div>
      
    </section>
  )
export default Header;