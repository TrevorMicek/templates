import React from 'react';

import styles from '../styles/SecondaryPages/mainStyles.module.css';
import Benefits from './Benefits';

const checkmark = require('../images/checkmark.jpg')

const Package = (props) => (
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
           <div className={styles.benefits}>
       <Benefits title={'Unlimited edits'} />
       <Benefits title={'24/7 Customer Support'} />
          <Benefits title={'includes hosting'} />
          <Benefits title={'lifetime updates'} />
          
          </div>
       </div>
)
export default Package;