import React from 'react';

import styles from '../../styles/SecondaryPages/mainStyles.module.css';
import Package from '../../components/package'

const checkmark = require('../../images/checkmark.jpg')

const Main = () => (
    <main>
      <section className={styles.firstSection}>
        <section className={styles.firstSectionWrapper}>
        <div className={styles.firstSectionTitle}>
          <h3>
           Websites Done Uniquely
           
          </h3>
        </div>
        <div>
          <article className={styles.firstSectionText}>
           <ul className={styles.firstSectionList}>
             <li>
            
            <span>Speed: </span> <span>2x-4x Faster Than WordPress</span>
            
      
             </li>
             <li>
               <span>
              Cost: 
               </span> <span> No Setup Fee, Affordable Monthly Subscription</span>
            
             </li>
             <li>
               
                 <span>Benefit: 
                 </span>
                <span> Quality Websites Lead To More Organic Growth</span>
             </li>
           </ul>
          </article>
        </div> 
        </section>
      </section>

      <section className={styles.secondSection}>
        <div>
         <div className={styles.imgWrapper}>
          <img src={checkmark} className={styles.firstGraphic} />
          </div>
          <div className={styles.serviceWrapper}>
          <h3 className={styles.SecondSectionTitle}>
            Hosting Fees Included
          </h3>
          <p className={styles.FirstText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          </div>
        </div>
        <div>
      
        <div className={styles.imgWrapper}>
          <img src={checkmark} className={styles.secondGraphic} />
          </div>
          <div className={styles.serviceWrapper}>
          <h3 className={styles.SecondSectionTitle}>
            Fully Customized Site
          </h3>
          
          <p className={styles.SecondText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          </div>
        </div>
        <div>
      
        <div className={styles.imgWrapper}>
          <img src={checkmark} className={styles.thirdGraphic} />
          </div>
          <div className={styles.serviceWrapper}>
          <h3 className={styles.SecondSectionTitle}>
            Web Design & Development
          </h3>
          
          <p className={styles.thirdText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          </p>
          </div>
        </div>
        <div>
        
        <div className={styles.imgWrapper}>
          <img src={checkmark} className={styles.thirdGraphic} />
          </div>
          <div className={styles.serviceWrapper}>
          <h3 className={styles.SecondSectionTitle}>
            24/7 Customer Service
          </h3>
          
          <p className={styles.thirdText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          </p>
          </div>
        </div>
        <div>
        
        <div className={styles.imgWrapper}>
          <img src={checkmark} className={styles.thirdGraphic} />
          </div>
          <div className={styles.serviceWrapper}>
          <h3 className={styles.SecondSectionTitle}>
            Google Analytics
          </h3>
          
          <p className={styles.thirdText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          </p>
          </div>
        </div>
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
          <article className={styles.firstSectionText}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              
            </p>
          </article>
        </div> 
        </section>
      </section>
       <section className={styles.pricingSection}>
      <Package title={'standard'} pages={'5 pages'} price={'195'} />
      <Package title={'standard+Ecommerce'} pages={'6 pages'} price={'295'} />
      <Package title={'brochure'} pages={'1 page'} price={'50'} />
          </section>
      </section>
      
    </main>
)
export default Main;