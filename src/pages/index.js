import React from "react"


import Layout from "../components/layout/layout"

import SEO from "../components/layout/seo"
import Header from './FrontPage/Header'
import Main from './FrontPage/Main'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
  
    <Header />
    <Main />
  </Layout>
)

export default IndexPage
