import React from 'react';

import styles from '../../styles/SecondaryPages/mainStyles.module.css';

const userIcon = require('../../images/user.svg')
const qualityIcon = require('../../images//quality.svg')
const optimizeIcon = require('../../images/optimization.svg')
const responsiveIcon = require('../../images/responsive-design.svg')

const Main = () => (

    <main>
      <section className={styles.firstSection}>
  
        <section className={styles.firstSectionWrapper}>
          
       
        <div className={styles.firstSectionTitle}>
          
          <h3>
           <span>$0</span> Down, <span>$195</span> per month
            
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
          <img src={responsiveIcon} className={styles.firstGraphic} />
          <h3 className={styles.FirstTitle}>
            Mobile-First Design
          </h3>
          <p className={styles.FirstText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <div>
          <img src={optimizeIcon} className={styles.secondGraphic} />
          <h3 className={styles.SecondTitle}>
            Optimization
          </h3>
          <p className={styles.SecondText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <div>
          <img src={userIcon} className={styles.thirdGraphic} />
          <h3 className={styles.ThirdTitle}>
            User-Friendly
          </h3>
          <p className={styles.thirdText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          
        </div>
        
      </section>
     
    </main>
)
export default Main;