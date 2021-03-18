import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

import styles from '../styles/ServicesPage/mainStyles.module.css';
import info from '../data/servicesPage/pageData';
import SecondSectionTitle from '../components/commonComps/MainSectionTitle'
import standard from '../data/servicesPage/standard';
import ecom from '../data/servicesPage/ecom';
import Package from './servicesPage/package';
import pricing from '../data/servicesPage/starter';
import ecomPricing from '../data/servicesPage/ecomPricing'
import Benefit from './servicesPage/TopBenefits';
import BenefitData from '../data/servicesPage/BenefitData';
import CreateComponent from '../components/commonComps/createComponent'

const ServicePage = () => (
  <Layout>
    <SEO title="Home" />
      <section className={styles.firstSection}>
        <section className={styles.firstSectionWrapper}>
        <div className={styles.firstSectionTitle}>
          <h3>
          Focused On Quality<br /> &  Ease-of-use
          </h3>
        </div>
        <div>
          <article className={styles.firstSectionText}>
           <ul className={styles.firstSectionList}>
            <span>
              <li>
            <span>Speed: </span> <span> 2x-4x Faster Than WordPress</span>
             </li>
             <li>
               <span className={styles.cost}>
              Cost: 
               </span> <span> Low or No Setup Fee, W/ Affordable Monthly Subscription</span>
             </li>
             <li>
                 <span>Growth: 
                 </span>
                <span> Quality Websites Lead To More Organic Growth</span>
             </li>
             </span>
           </ul>
          </article>
        </div> 
        </section>
      </section>
      <section className={styles.secondSection}>
       <CreateComponent component={Benefit} data={BenefitData} />
        </section>
        <section className={styles.thirdSection}>
      <SecondSectionTitle {...info} />
      </section>
      <section className={styles.fourthSection}> 
      <SecondSectionTitle {...ecom} />
      <CreateComponent component={Package} data={ecomPricing} />   
      <SecondSectionTitle {...standard} />
        <CreateComponent component={Package} data={pricing} />
        
      </section>
  </Layout>
)
export default ServicePage