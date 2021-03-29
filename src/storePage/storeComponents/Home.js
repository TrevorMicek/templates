import React, { useState } from "react"
import { useShopify } from "../hooks"
import Products from './Products';
import Cart from '../../pages/Cart';
import ProductView from '../../pages/Products';

export default (props) => {
	const { shopDetails } = useShopify()
	const [productView, setProductView] = useState(false)
	const productPage = () => setProductView(true)
	return (
		<div>
			
		</div>
	)
}
