import React from 'react';

import styles from '../../styles/SecondaryPages/mainStyles.module.css';


const checkmark = require('../../images/checkmark.jpg')

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
          <div className={styles.serviceWrapper}>
          <img src={checkmark} className={styles.firstGraphic} />
          <h3 className={styles.FirstTitle}>
            Hosting Free Included
          </h3>
          </div>
          <p className={styles.FirstText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div>
        <div className={styles.serviceWrapper}>
          <img src={checkmark} className={styles.secondGraphic} />
          <h3 className={styles.SecondTitle}>
            Unlimited Edits
          </h3>
          </div>
          <p className={styles.SecondText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
        </div>
        <div>
        <div className={styles.serviceWrapper}>
          <img src={checkmark} className={styles.thirdGraphic} />
          <h3 className={styles.ThirdTitle}>
            Web Design & Development
          </h3>
          </div>
          <p className={styles.thirdText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          </p>
        </div>
        <div>
        <div className={styles.serviceWrapper}>
          <img src={checkmark} className={styles.thirdGraphic} />
          <h3 className={styles.ThirdTitle}>
            24/7 Customer Service
          </h3>
          </div>
          <p className={styles.thirdText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          </p>
        </div>
        <div>
        <div className={styles.serviceWrapper}>
          <img src={checkmark} className={styles.thirdGraphic} />
          <h3 className={styles.ThirdTitle}>
            Google Analytics
          </h3>
          </div>
          <p className={styles.thirdText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          </p>
        </div>
      </section>
    </main>
)
export default Main;