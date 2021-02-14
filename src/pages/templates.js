import React from "react"


import Layout from "../components/layout/layout"

import SEO from "../components/layout/seo"
import Header from '../components/layout/Header'
import Main from './AboutPage/Main'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
  
    <Header title="Templates" />
    <Main />
  </Layout>
)

export default IndexPage
