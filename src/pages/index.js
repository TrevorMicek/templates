import React from "react"


import Layout from "../components/layout"

import SEO from "../components/seo"
import Nav from '../components/NavBar.js';
import Header from './FrontPage/Header'
import Main from './FrontPage/Main'
import global from '../styles/styles.module.css'
const IndexPage = () => (
  <section className={global.global}>
    <SEO title="Home" />
    <Nav />
    <Header />
    <Main />
  </section>
)

export default IndexPage
