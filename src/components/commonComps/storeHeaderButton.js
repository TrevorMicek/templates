import React, { useState } from 'react'
import { Link } from 'gatsby'
import '../../styles/StorePage/app.css'
const cartImg = require('../../images/cartButton.png')
const Button = (props) => {
   
    return (
        <div className="storeNavWrapper">
        
            <Link className="linkColor" to={props.linkUrl}  geturl={props.getUrl}>
                <div className="homeButton">{props.title}</div>
            </Link>
            
        
       
        </div>
    )
}
export default Button;