import React from 'react';

import styles from '../../styles/ServicesPage/mainStyles.module.css';
import Package from '../../components/servicesPricing/package';
import pricing from '../../components/servicesPricing/PricingInfo';
import Benefit from '../../components/servicesPricing/TopBenefits';
import BenefitData from '../../components/servicesPricing/BenefitData'

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
        <Benefit {...BenefitData.one} />
        <Benefit {...BenefitData.two} />
        <Benefit {...BenefitData.three} />
        <Benefit {...BenefitData.four} />
        <Benefit {...BenefitData.five} />
        </section>
      

      <section className={styles.thirdSection}>
      <section className={styles.firstSection}>
        <section className={styles.firstSectionWrapper}>
        <div className={styles.firstSectionTitle}>
          <h3>
           Customized Packages
          </h3>
        </div>
        <div>
          <article className={styles.thirdSectionText}>
            <p>
              Alongside these benefits, we offer highly customized packages 
              that include everything you need. Every small business is different but 
              we have found that these packages suit most businesses needs. Our main goal is to handle all of your website concerns so we are more than happy to adjust your subscription as needed.
              
            </p>
          </article>
        </div> 
        </section>
      </section>
      
      <section>
      <Package {...pricing.tierOne} />
      <Package {...pricing.tierTwo} />
      <Package {...pricing.tierThree} />
      </section>
      </section>
      
    </main>
  )
}
export default Main;