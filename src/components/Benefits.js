import React from 'react';
import styles from '../styles/SecondaryPages/mainStyles.module.css';
const checkmark = require('../images/checkmark.jpg')

const Benefits = (props) => {
  const benefit = () => {
    return (
      props.title === undefined ? null : 
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
    )
        
  }
      return (
        benefit()
      )
      }
export default Benefits;