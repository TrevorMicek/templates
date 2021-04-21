import React, { useState } from 'react'
import { Link } from 'gatsby'
import '../../pages/app.css'
const cartImg = require('../../images/cartButton.png')
const Button = (props) => {
   
    return (
        <div className="storeNavWrapper">
        <div className="homeButton">
            <Link className="linkColor" to={props.linkUrl}  geturl={props.getUrl}>{props.title}</Link>
            
        </div>
       
        </div>
    )
}
export default Button;