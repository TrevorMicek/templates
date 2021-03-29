import React from "react"
import Product from "./Product"
import Cart from '../../pages/Cart'
export default (props) => {
	return (
		<div className="Products-wrapper">
			<Cart />
			<Product history={props.history} />
		</div>
	)
}
