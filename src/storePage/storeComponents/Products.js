import React from "react"
import { Link } from 'gatsby'
import Product from "./Product"
import Header from './Header'
import Layout from '../../components/layout/layout'
import styles from '../../styles/StorePage/wrapper.module.css'
export default (props) => {
	return (
		<Layout title='Custom Ecommerce'>
				<div className={styles.app}>
		<div className="Products-wrapper">	
			
			
			
			<Product 
				history={props.history} 
				title={props.title} 
				getTitle={props.getTitle} 
			/>
		
		</div>
		</div>
		</Layout>
	)
}
