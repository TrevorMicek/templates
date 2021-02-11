import React from 'react';
import styles from '../../styles/FrontPage/mainStyles.module.css'

const userIcon = require('../../images/user.svg')
const qualityIcon = require('../../images//quality.svg')
const optimizeIcon = require('../../images/optimization.svg')
const responsiveIcon = require('../../images/responsive-design.svg')
const subscriptionIcon = require('../../images/subscription.svg')

const Main = () => {

return (
<main className={styles.mainWrapper}>
    
      <section className={styles.firstSection}>
    
        <section className={styles.firstSectionWrapper}>
          
       
        <div className={styles.firstSectionTitle}>
          <img src={qualityIcon} className={styles.firstSectionGraphic} />
          <h3>
            Focused On Quality<br /> &  Ease-of-use
            
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
      <section className={styles.secondSection}>
          
      <div>
          <img src={subscriptionIcon} />
          <h3 className={styles.FirstTitle}>
            Subscription-Based
          </h3>
          <p className={styles.FirstText}>
          <b>NO SETUP FEE</b>, <span>$195</span> per month for a 5 page website + maintenance. Affordable packages with no hidden fees. Cancel anytime,
          </p>
        </div>
       
        <div>
          <img src={optimizeIcon} />
          <h3 className={styles.SecondTitle}>
            Optimization
          </h3>
          <p className={styles.SecondText}>
            Website speed is our driving force for a quality site because the number one reason visitors will leave your website is if it's too slow.
          </p>
        </div>
        <div>
          <img src={responsiveIcon} />
          <h3 className={styles.FirstTitle}>
            Mobile-First Design
          </h3>
          <p className={styles.FirstText}>
           We build all our sites mobile-first because most online traffic is on mobile devices. We also ensure every site is fully responsive.
          </p>
        </div>
        <div>
          <img src={userIcon} />
          <h3 className={styles.ThirdTitle}>
            User-Friendly
          </h3>
          <p className={styles.thirdText}>
           A simple and easy to use website is a priority, yet sometimes overlooked. All of our sites are easy to navigate and use.
          </p>
          
        </div>
       
        
      </section>
     
    </main>
)
    }
    export default Main;