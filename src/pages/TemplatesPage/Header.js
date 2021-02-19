import React from 'react';


import styles from '../../styles/TemplatesPage/headerStyles.module.css';
const Header = (props) => (
    <header>
    <section className={styles.headerPictureWrapper}>
      <div className={styles.headerOverlay}></div>

  <div className={styles.headerBorder}>
  <h1 className={styles.headerTitle}>
     {props.title}
  </h1>
  
  </div>
</section>

    </header>
    
)
export default Header;