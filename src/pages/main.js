import  React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'

import background from '../styles/mainPage/background.module.css'
import header from '../styles/mainPage/header.module.css'
import main from '../styles/mainPage/main.module.css'

const bgImg = require('../templates/images/bg.jpg')
const FrontPage = () => {
    const [bg, setBg] = useState('bg')
    const changeBg = (stage) => {
        setBg(stage)
    }
   
    const Bg = (props) => (
        <div className={props.bg} />
    )
    const Header = () => (
        <div className={header.header}>
            <div className={header.icon}>
                icon
            </div>
            <div className={header.title}>
                <h1>DIMENSION</h1>
                <p>Lorem Ipsum</p>
            </div>
        </div>
    )
    const SwitchBg = () => {
        switch(bg) {
            case 'bgBefore':
                return <Bg bg={background.bgBefore} />
            case 'bg':
                return <Bg bg={background.bg} />
        }
    }
  
    return (
       <div id="wrapper">
           <SwitchBg />
           <Header />
           
       </div>
    )
}
export default FrontPage;