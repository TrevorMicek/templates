import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import Main from '../components/pages/ContactPage/contactForm'

const IndexPage = () => (
  <Layout title="Contact Us">
    <SEO title="Home" />
    <Main />
  </Layout>
)
export default IndexPage