import React from 'react';

import info from '../../components/frontPage/benefitData';
import styles from '../../components/frontPage/benefit.module.css'


const Benefit = (props) => (
<div className={styles.benefitWrapper}>
          <img src={props.icon} alt={props.alt} width="50px" height="50px" />
          <h3 className={styles.FirstTitle}>
            {props.title}
          </h3>
          <p className={styles.FirstText}>
          {props.text}
          </p>
        </div>
)
const BenefitSection = () => (
    <section className={styles.secondSection}>
    <span>
  <Benefit {...info.one} />
   <Benefit {...info.two} />
   </span>
   <span>
   <Benefit {...info.three} />
   <Benefit {...info.four} />
  </span>
   
   
    
  </section>
)
export default BenefitSection