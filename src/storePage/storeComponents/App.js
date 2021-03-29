import React, { useEffect } from "react"
import { Router } from '@reach/router'
import Link from 'gatsby'
import Products from "./Products"
import Cart from "./Cart"
import Home from "./Home"
import ProductView from "./Productview"
import { useShopify } from "../hooks"
import Product from "./Product"

import ScrollToTop from '../../components/commonComps/ScrollToTop'

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
			
				
				<Products default />
				<ProductView path='Products/:productId' />
				
			
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