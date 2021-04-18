import React from "react"
import { Link } from 'gatsby'
import Product from "./Product"
import Header from './Header'
export default (props) => {
	return (
		<div className="Products-wrapper">
			<Header title="Custom Ecommerce" />
			
			<props.homeButton />
			
			<Product history={props.history} title={props.title} />
		</div>
	)
}
