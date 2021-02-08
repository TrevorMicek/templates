import React, { useState } from 'react';
import { Link } from "gatsby"

import styles from '../styles/styles.module.css';
const hamburger = require('../images/HamburgerImg.svg')
const xImg = require('../images/X.svg')

const Nav = () => {
const [isOpen, setIsOpen] = useState(false)
  const toggleDropDown = () => setIsOpen(!isOpen)

  return (
    <nav className={styles.navWrapper}>
      <div className={styles.leftsideNav}>
        Trevor's <br />
        Web Design
      </div>
      
      
        <div className={styles.rightsideNav}>
          <div className={styles.mobileNav}>
            <div className={styles.hamburger}>
            <img src={hamburger} alt={"open drop down menu"} onClick={toggleDropDown} />
          </div>
          
          <div className={styles.dropDown}>
            <img src={xImg} alt={"close drop down menu"} onClick={toggleDropDown} />
           
          
        </div>
      </div>
      {isOpen === false ? 
          <div className={styles.mobileListItems}>
            <ul className={styles.mobileNavList}>
              <li><Link to="/index.js">Home</Link></li>
              
       
            </ul>
         
        </div> : <div className={styles.listItems}>
        <ul className={styles.navList}>
          <li><Link to="index.js">Home</Link></li>
     
        </ul>
      </div>
}
    </div>
      
    </nav>
  )
}
export default Nav;