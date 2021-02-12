import React from 'react';

import styles from '../styles/SecondaryPages/mainStyles.module.css'
const checkmark = require('../images/checkmark.jpg')

const Benefits = (props) => (
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
)
export default Benefits;