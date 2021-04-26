import React, { useState } from 'react';

import styles from '../../../styles/ServicesPage/package.module.css';
import Benefits from './TierBenefits';

const Package = (props) => {
  const [benefit, setBenefit] = useState(true)
  const switchButton = () => setBenefit(!benefit)
return (
  <section className={styles.pricingSection}>
    <div>
         <div className={styles.price}>
           <div className={styles.pricingTitle}>
             <span>
             {props.title}
             </span>
             <span>
           {props.pages}
         </span>
          </div>
           <h3>
             <span className={styles.dollarsign}>$</span><span className={styles.priceTitle}>{props.price}</span> <span className={styles.month}>/MO</span>
           </h3>
           </div>
           <div className={styles.featureSwitch}>
           <button className={benefit === true ? styles.benefitButtonActive : styles.benefitButton} onClick={switchButton}>benefits</button>
            <button className={benefit === false ? styles.featureButtonActive : styles.featureButton} onClick={switchButton}>features</button>
           </div>
           <Benefits title={benefit === true ? props.benefitOne : props.featureOne}  />
           <Benefits title={benefit === true ? props.benefitTwo : props.featureTwo } />
           <Benefits title={benefit === true ? props.benefitThree: props.featureThree} />
           <Benefits title={benefit === true ? props.benefitFour : props.featureFour} />
       </div>
       </section>
)
}
export default Package;