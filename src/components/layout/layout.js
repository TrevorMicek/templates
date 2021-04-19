/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, {useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";
import createComponent from '../commonComps/createCart'
import styles from "./layoutGrid.module.css"
import "./layout.css"
import { useShopify } from "../../storePage/hooks";
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import * as reducers from "../../storePage/redux/ducks"
import { Provider } from "react-redux"
const Layout = ({children, title}) => {
  

  /*
  const rootReducer = combineReducers(reducers);

  const enhancer = compose(applyMiddleware(thunk));
  
  const store = createStore(rootReducer, enhancer);
 */
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
   

      <div
        style={{
          margin: `0 0`,
        }}
      >
        
       <div className={styles.grid}>
        <NavBar />
        <Header title={title}/> 
        
      
        <main className={styles.main}>{children}</main>
        <Footer />
       </div>
      </div>
     
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
