import React from 'react';
import styles from '../../styles/FrontPage/mainStyles.module.css'

import info from './pageData'
import FirstSection from '../../components/commonComps/MainSectionTitle'
import SecondSection from '../../components/frontPage/Benefits'

const Main = () => {

return (
<main className={styles.mainWrapper}>
    
      <FirstSection {...info} />
      <SecondSection />
     
    </main>
)
    }
    export default Main;