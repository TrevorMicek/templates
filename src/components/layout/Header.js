import React from 'react';


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
          <span>Websites By Trevor</span>
      </h1>
      <h2 className={firstStyles.headerText}>Small Business Web Design<br /> & Development</h2>
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
return (
  <>
 {props.title === firstTitle ? <HomeHeader /> : <SecondaryHeader />}
 </>
)
}
export default Header;