import  React from 'react';

import styles from '../../styles/AboutPage/mainStyles.module.css'
const Section = (props) => (
  <div>
    <h3 className={styles.FirstTitle}>
      {props.title}
    </h3>
    <div className={styles.FirstText}>
      <p>{props.firstP}</p>
      <p>{props.secondP}</p>
      <p>{props.thirdP}</p>
    </div>
  </div>
)
export default Section;