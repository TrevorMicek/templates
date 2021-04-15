import React, { useState } from 'react'
import { Link } from 'gatsby'

const Button = (props) => {
   
    return (
        <div className="homeButton">
            <Link className="linkColor" to={props.linkUrl}  geturl={props.getUrl}>{props.title}</Link>
        </div>
    )
}
export default Button;