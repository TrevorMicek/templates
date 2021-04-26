import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import styles from '../styles/AboutPage/mainStyles.module.css'

import Section from '../components/pages/aboutPage/aboutSection'
import info from '../data/aboutPage/aboutInfo';
import CreateComponent from '../components/commonComps/createComponent'

const IndexPage = () => {
const date = new Date()
const year = date.getFullYear()
const calcAge = () => {
  let age;
  let month = date.getMonth()
  age = (year - 1995 - 1)
  const bday = 6;
  if (month >= bday) {
    age = age + 1
  }
  return age
}
return(
  <Layout title="About Us">
    <SEO title="Home" />
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
             I am Colorado born, currently residing in Fort Collins, CO. I'm {calcAge()} years old and I have a passion for many things, including; hiking, meditation, video games, coding, cooking, dogs & cats, and helping people.
            </p>
          </article>
        </div> 
        </section>
      </section>
      <section className={styles.secondSection}>
          <CreateComponent component={Section} data={info} />
      </section>
  </Layout>
)
}
export default IndexPage