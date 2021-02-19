import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"


import styles from '../../styles/TemplatesPage/navBar.module.css';
const hamburger = require('../../images/HamburgerImg.svg')
const xImg = require('../../images/X.svg')

const Nav = () => {

  return (
    <nav className={styles.navWrapper}>
     
      
      
        <div className={styles.rightsideNav}>
         
      
         <div className={styles.listItems}>
      <ul className={styles.navList}>
            <li><Link to="/">Template Home</Link></li>
            <li><Link to="/services">Layout 1</Link></li>
            <li><Link to="/page-2">Layout 2</Link></li>
            <li><Link to="/index.js">Layout 3</Link></li>
           
   
      </ul>
    </div>
   
      </div>
  
      
    </nav>
  )
}
export default Nav;