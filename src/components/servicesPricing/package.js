import React from 'react';

import styles from './package.module.css';
import Benefits from './TierBenefits';

const Package = (props) => (
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
           <Benefits title={props.benefitOne}  />
           <Benefits title={props.benefitTwo} />
           <Benefits title={props.benefitThree} />
           <Benefits title={props.benefitFour} />
       </div>
       </section>
)
export default Package;