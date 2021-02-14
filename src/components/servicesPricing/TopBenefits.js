import React from 'react';

import styles from './topBenefits.module.css'
const checkmark = require('../../images/checkmark.jpg')

const Benefits = (props) => (
  <section className={styles.secondSection}>
    <div>
    <div className={styles.imgWrapper}>
     <img src={checkmark} className={styles.firstGraphic} />
     </div>
     <div className={styles.serviceWrapper}>
     <h3 className={styles.SecondSectionTitle}>
       {props.title}
     </h3>
     <p className={styles.FirstText}>
      {props.text}
     </p>
     </div>
   </div>
   </section>
)
export default Benefits;