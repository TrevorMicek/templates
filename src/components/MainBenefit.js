import  React from 'react';

import styles from '../styles/FrontPage/mainStyles.module.css'
const Benefit = (props) => (
<div>
          <img src={props.icon} alt={props.alt} width="50px" />
          <h3 className={styles.FirstTitle}>
            {props.title}
          </h3>
          <p className={styles.FirstText}>
          {props.text}
          </p>
        </div>
)
export default Benefit;