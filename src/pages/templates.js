import React from "react"


import Layout from "../components/layout/layout"

import SEO from "../components/layout/seo"
import Header from '../components/layout/Header'
import Main from './TemplatesPage/Main'
import NavBar from './TemplatesPage/NavBar'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <NavBar />
    <Header title="Template Home Page" />
    <Main />
    
  </>
)

export default IndexPage
