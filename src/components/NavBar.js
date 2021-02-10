import React, { useState } from 'react';
import { Link } from "gatsby"


import styles from './navBarStyles.module.css';
const hamburger = require('../images/HamburgerImg.svg')
const xImg = require('../images/X.svg')

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDropDown = () => setIsOpen(!isOpen)

    const closeMenu = window.matchMedia('only screen and (min-width: 769px)');
    closeMenu.addEventListener("change", (e) => {
        if (e.matches) {
          setIsOpen(false)
        } else {
            setIsOpen(false)
        }
    })
  return (
    <nav className={styles.navWrapper}>
      <div className={styles.leftsideNav}>
        Trevor's <br />
        Web Design
      </div>
      
      
        <div className={styles.rightsideNav}>
          {isOpen ?
    <>
      <div className={styles.mobileNav}>
        <div className={styles.dropDown}>
          <img src={xImg} alt={"close drop down menu"} onClick={toggleDropDown} />
         
        </div>
      </div>
        <div className={styles.mobileListItems}>
          <ul className={styles.mobileNavList}>
            <li onClick={toggleDropDown}><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/page-2">About</Link></li>
            <li><Link to="/index.js">Blog</Link></li>
            <li><Link to="/index.js">Contact</Link></li>
            
     
          </ul>
       
      </div> 
      </> :
      
     
      <>
       <div className={styles.mobileNav}>
       <div className={styles.hamburger}>
       <img src={hamburger} alt={"open drop down menu"} onClick={toggleDropDown} />
       {console.log(isOpen)}
     </div>
     </div>
      <div className={styles.listItems}>
      <ul className={styles.navList}>
        <li><Link to="index.js">Home</Link></li>
   
      </ul>
    </div>
    </>}
      </div>
  
      
    </nav>
  )
}
export default Nav;