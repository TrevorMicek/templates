import React from 'react';
import { Link } from 'gatsby';

import styles from './footerStyles.module.css'
const Footer = () => (


<footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.wave}></div>
      </div>
      <div className={styles.footerContainer}>
      
        <div className={styles.footerTop}>
   <section className={styles.leftSideFooter}>
        
        <div>
          <h4>
            Follow Me!
          </h4>
        
        </div>
      </section>
      <section className={styles.rightSideFooter}>
        <h4>
        hand coded demo site
        </h4>
        <div className={styles.flaticon}>
        <div>Icons made by <a href={'www.flaticon.com/authors/flat-icons'} title={'Flat Icons'}>Flat Icons</a> from <a href={'www.flaticon.com/'} title={'Flaticon'}>www.flaticon.com</a></div>
        </div>
      </section>
      </div>
      <section className={styles.footerBottom}>
 
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Contact</Link></li>
          
        </ul>
     
      </section>
     
    </div>
    </footer>
    )
    export default Footer;