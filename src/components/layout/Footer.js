import React from 'react';
import { Link } from 'gatsby';

import styles from './footerStyles.module.css'
const Footer = () => {
  var year = new Date()


return (
<footer className={styles.footer}>      
        <div className={styles.waveContainer}>
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
        
        <div className={styles.flaticon}>
        <div>Icons made by <a href={'www.flaticon.com/authors/flat-icons'} title={'Flat Icons'}>Flat Icons</a> from <a href={'www.flaticon.com/'} title={'Flaticon'}>www.flaticon.com</a></div>
        </div>
      </section>
      </div>
      <section className={styles.footerBottom}>
 
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/store/">Store</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          
          
        </ul>
        <div className={styles.copyright}>
        <h4>
        © {
          year.getFullYear()
        }, Websites By Trevor LLC
        </h4>
        </div>
      </section>
     
    
    </div>
    </footer>
    )
      }
    export default Footer;