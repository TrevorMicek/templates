import React from 'react';

import storeStyles from '../../styles/StorePage/storeStyles.module.css'

  const Header = (props) => (
    <section className={storeStyles.headerPictureWrapper}> 
   <div className={storeStyles.headerBorder}>
   <h1 className={storeStyles.headerTitle}>
   {props.title}
   </h1>
   </div>
   </section>
  )
export default Header;