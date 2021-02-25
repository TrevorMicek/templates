import React from 'react';

import styles from './styles/mainSection.module.css';

const Title = (props) => (
    <section className={styles.firstSection}>
    
        <section className={styles.firstSectionWrapper}>
          
       
        <div className={styles.firstSectionTitle}>
          
          <h3>
            {props.title}
          </h3>
          {props.imgSrc === undefined ? null : 
          <img src={props.imgSrc} alt="colorful desktop icon" className={styles.firstSectionGraphic} width="100px" height="100px" />
          }
        </div>
        <div>
          <article className={styles.firstSectionText}>
            <p>
              {props.text}
              
            </p>
          </article>
        </div> 
        </section>
      </section>
)
export default Title;