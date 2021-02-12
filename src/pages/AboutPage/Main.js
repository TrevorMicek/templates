import React from 'react';
import styles from '../../styles/FrontPage/mainStyles.module.css'

import Benefit from '../../components/MainBenefit'
import info from '../../components/benefitData';
const qualityIcon = require('../../images//quality.svg')


const Main = () => {

return (
<main className={styles.mainWrapper}>
    
      <section className={styles.firstSection}>
    
        <section className={styles.firstSectionWrapper}>
          
       
        <div className={styles.firstSectionTitle}>
          <img src={qualityIcon} className={styles.firstSectionGraphic} />
          <h3>
            Websites Done Uniquely
            
          </h3>
        </div>
        <div>
          <article className={styles.firstSectionText}>
            <p>
              Websites By Trevor offers a quality of service that cannot be beat by WordPress nor other local developers. There are a few key differences you will find, the main differences being;
              
            </p>
          </article>
        </div> 
        </section>
      </section>
      <section className={styles.secondSection}>
          
      <Benefit {...info.one} />
       <Benefit {...info.two} />
       <Benefit {...info.three} />
       <Benefit {...info.four} />

       
       
        
      </section>
     
    </main>
)
    }
    export default Main;