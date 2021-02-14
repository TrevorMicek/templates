import React from 'react';
import styles from './tierBenefits.module.css';
const checkmark = require('../../images/checkmark.jpg')

const Benefits = (props) => {
  
    return (
      props.title === undefined ? null : 
      <div className={styles.benefits}>
      <div>
    <div className={styles.imgWrapper}>
     
        <img src={checkmark} className={styles.thirdGraphic} />
        </div>
    <div className={styles.pricingWrapper}>
        <h3 className={styles.benefitTitle}>
          {props.title}
        </h3>
        </div>
        </div>
        </div>
    )
        

      }
export default Benefits;