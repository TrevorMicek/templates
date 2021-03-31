import React, { useEffect } from "react"
import { Router } from '@reach/router'
import Products from "./Products"
import ProductView from "../../templates/Productview"
import { useShopify } from "../hooks"

export default (props) => {
	const {
		createShop,
		createCheckout,
		fetchProducts,
		// fetchCollection,
	} = useShopify()

	useEffect(() => {
		createShop()
		fetchProducts()
		createCheckout()
		// fetchCollection()
	}, [])
	
	return (
	<div id="App">
		<Router>
			<Products path='/store/' />
			<ProductView path=':productId' />
		</Router>
	</div>
	)
}
/*
<Route path="/store" component={Home} />
				<Route path="/store" component={Products} />
				<Route path="/Product/:productId" component={ProductView} />
				<Route path="/" component={Cart} />
				*/