import React from 'react'
import Footer from "./Footer"
import NavBar from "./NavBar"
import styles from './layoutGrid.module.css';

const GridLayout = (props) => (
    <div>
        <NavBar />
        {props.child}
        <Footer />
    </div>
)
export default GridLayout;