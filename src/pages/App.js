import React, { useEffect } from "react"
import { Router } from '@reach/router'
import Link from 'gatsby'
import Products from "../storePage/storeComponents/Products"
import Cart from "./Cart"
import Home from "../storePage/storeComponents/Home"
import ProductView from "./Products"
import { useShopify } from "../storePage/hooks"
import Product from "../storePage/storeComponents/Product"

import ScrollToTop from '../components/commonComps/ScrollToTop'

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
			
				<Cart default />
				<Home default />
				<Products path='/store' />
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