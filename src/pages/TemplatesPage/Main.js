import React from 'react';
import styles from '../../styles/AboutPage/mainStyles.module.css'

import Section from '../../components/aboutPage/aboutSection'
import info from '../../components/aboutPage/aboutInfo';


const Main = () => {

return (
<main className={styles.mainWrapper}>
      <section className={styles.firstSection}>
        <section className={styles.firstSectionWrapper}>
        <div className={styles.firstSectionTitle}>
          <h3>
            A Little More About Me
          </h3>
        </div>
        <div>
          <article className={styles.firstSectionText}>
            <p>
             I am Colorado born, currently residing in Fort Collins, CO. I'm 25 years old and I have a passion for many things, including; hiking, meditation, video games, coding, cooking, dogs & cats, and helping people.
            </p>
          </article>
        </div> 
        </section>
      </section>
      <section className={styles.secondSection}>
          <Section {...info.sectionOne} />
          <Section {...info.sectionTwo} />
          <Section {...info.sectionThree} />
      </section>
    </main>
)
    }
    export default Main;