import React from 'react';

import info from '../../../data/frontPage/benefitData';
import styles from '../../../styles/FrontPage/benefit.module.css'
import CreateComponent from '../../commonComps/createComponent';

const Benefit = (props) => (
<div className={styles.benefitWrapper}>
          <img src={props.icon} alt={props.alt} width="50px" height="50px" />
          <h3 className={styles.FirstTitle}>
            {props.title}
          </h3>
          <p className={styles.FirstText}>
          {props.text}
          </p>
        </div>
)
const BenefitSection = () => (
    <section className={styles.secondSection}>
      <CreateComponent component={Benefit} data={info} />
    </section>
)
export default BenefitSection