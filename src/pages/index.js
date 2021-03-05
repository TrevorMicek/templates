import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import FirstSection from '../components/commonComps/MainSectionTitle'
import SecondSection from '../components/frontPage/Benefits'
import info from '../data/frontPage/pageData'
import styles from '../styles/FrontPage/wrapper.module.css'
const IndexPage = () => (
  <Layout title="Small Business Web Design & Development">
    <SEO title="Home" />
    <div className={styles.wrapper}>
    <FirstSection {...info} />
    </div>
      <SecondSection />
  </Layout>
)
export default IndexPage
