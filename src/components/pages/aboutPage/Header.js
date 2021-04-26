import React from 'react';


import firstStyles from '../../../styles/FrontPage/headerStyles.module.css';
const Header = (props) => (

  
    <section className={firstStyles.headerPictureWrapper}>

    <section className={firstStyles.firstSectionOverlay}></section>
    <div className={firstStyles.firstTransition}></div>
      <div className={firstStyles.headerBorder}>
      <h1 className={firstStyles.headerTitle}>
          <span>{props.title}</span>
      </h1>
      <h2 className={firstStyles.headerText}>Websites By Trevor</h2>
      </div>
      
    </section>
  )
export default Header;