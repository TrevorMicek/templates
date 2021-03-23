/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./layoutGrid.module.css"
import "./layout.css"

const Layout = ({  children, title }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>

      <div
        style={{
          margin: `0 0`
        }}
      >
       <div className={styles.grid}>
        <NavBar />
        <Header title={title}/>
        <main className={styles.main}>{children}</main>
        <Footer />
       </div>
      </div>
     
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
