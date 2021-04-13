import React from 'react';

import storeStyles from '../../styles/StorePage/storeStyles.module.css'
import secondStyles from './secondaryHeader.module.css';
import firstStyles from '../../styles/FrontPage/headerStyles.module.css';
const Header = (props) => {

  const firstTitle = 'Small Business Web Design & Development'
  

  const HomeHeader = () => (
    <section className={firstStyles.headerPictureWrapper}>

    <section className={firstStyles.firstSectionOverlay}></section>
    <div className={firstStyles.firstTransition}></div>
      <div className={firstStyles.headerBorder}>
      <h1 className={firstStyles.headerTitle}>
          <span>{props.title}</span>
      </h1>
      <h2 className={firstStyles.headerText}>Websites By Trevor</h2>
      </div>
      
    </section>
  )
  const SecondaryHeader = () => (
    <section className={secondStyles.headerPictureWrapper}> 
   <div className={secondStyles.headerBorder}>
   <h1 className={secondStyles.headerTitle}>
   {props.title}
   </h1>
   
   </div>
   </section>
  )
  const StoreHeader = () => (
    <section className={storeStyles.headerPictureWrapper}> 
   <div className={storeStyles.headerBorder}>
   <h1 className={storeStyles.headerTitle}>
   {props.title}
   </h1>
   
   </div>
   </section>
  )
  const SwitchHeader = () => {
    switch(props.title) {
        case firstTitle:
          return <HomeHeader />
        default:
          return <SecondaryHeader />
    }
  }
return (
 <SwitchHeader />
)
}
export default Header;