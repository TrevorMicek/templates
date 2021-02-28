import React, { useEffect, useState } from 'react';

import styles from '../../styles/ServicesPage/mainStyles.module.css';
import info from './pageData'
import SecondSectionTitle from '../../components/commonComps/MainSectionTitle'
import Package from '../../components/servicesPricing/package';
import pricing from '../../components/servicesPricing/PricingInfo';
import Benefit from '../../components/servicesPricing/TopBenefits';
import BenefitData from '../../components/servicesPricing/BenefitData';
import CreateComponent from '../../components/commonComps/createComponent'
const Main = () => {

  return (
    <main>
      <section className={styles.firstSection}>
        <section className={styles.firstSectionWrapper}>
        <div className={styles.firstSectionTitle}>
          <h3>
          Focused On Quality<br /> &  Ease-of-use
           
          </h3>
        </div>
        <div>
          <article className={styles.firstSectionText}>
           <ul className={styles.firstSectionList}>
             
            <span>
              <li>
            <span>Speed: </span> <span> 2x-4x Faster Than WordPress</span>
            
      
             </li>
             <li>
               <span className={styles.cost}>
              Cost: 
               </span> <span> No Setup Fee, Affordable Monthly Subscription</span>
            
             </li>
             <li>
                 <span>Benefit: 
                 </span>
                <span> Quality Websites Lead To More Organic Growth</span>
             </li>
             </span>
           </ul>
          </article>
        </div> 
        </section>
      </section>

      <section className={styles.secondSection}>
       
       <CreateComponent component={Benefit} data={BenefitData} />
    
        </section>
      <section className={styles.thirdSection}>
        <section className={styles.firstSection}>
      <SecondSectionTitle {...info} />
      </section>
      <section className={styles.packageWrapper}>
     
     <CreateComponent component={Package} data={pricing} />
     
      </section>
      </section>
      
    </main>
  )
}
export default Main;