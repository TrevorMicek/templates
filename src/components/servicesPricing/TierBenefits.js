import React from 'react';

import styles from './tierBenefits.module.css';
const checkmark = require('../../images/checkmark.jpg')

const Benefits = (props) => (
      props.title === undefined ? null : 
      <div className={styles.benefits}>
      <div>
    <div className={styles.imgWrapper}>
        <img src={checkmark} alt={"mid-sized blue checkmark icon"} className={styles.thirdGraphic} width="35px" height="35px" />
        </div>
    <div className={styles.pricingWrapper}>
        <h3 className={styles.benefitTitle}>
          {props.title}
        </h3>
        </div>
        </div>
        </div>
    )
export default Benefits;