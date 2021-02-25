import React from 'react';

import styles from '../../styles/ServicesPage/mainStyles.module.css';
import info from './pageData'
import SecondSectionTitle from '../../components/commonComps/MainSectionTitle'
import Package from '../../components/servicesPricing/package';
import pricing from '../../components/servicesPricing/PricingInfo';
import Benefit from '../../components/servicesPricing/TopBenefits';
import BenefitData from '../../components/servicesPricing/BenefitData';

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
        <span>
        <Benefit {...BenefitData.one} />
        <Benefit {...BenefitData.two} />
        <Benefit {...BenefitData.two} />
        </span>
        <span>
        <Benefit {...BenefitData.three} />
        <Benefit {...BenefitData.four} />
        <Benefit {...BenefitData.five} />
        </span>
        </section>
      

      <section className={styles.thirdSection}>
      <SecondSectionTitle {...info} />
      
      <section className={styles.packageWrapper}>
      <Package {...pricing.tierOne} />
      <Package {...pricing.tierTwo} />
      <Package {...pricing.tierThree} />
      </section>
      </section>
      
    </main>
  )
}
export default Main;