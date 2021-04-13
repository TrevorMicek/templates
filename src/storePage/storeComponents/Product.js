import React, { useEffect } from "react"
import { useShopify } from "../hooks"
import { navigate, Link } from '@reach/router'
import Client from 'shopify-buy'

export default (props) => {
	const { products, fetchProduct, fetchProducts } = useShopify()

	useEffect(() => {
	
		fetchProducts()
	
		// fetchCollection()
	}, [])
	function handleClick(e, product_id, productTitle) {
		e.preventDefault()
		props.title(productTitle)
		
		const id = product_id
		fetchProduct(id).then((res) => {
			navigate(`/store/products/${res.id}`)
		})
		
	}
	useEffect(() => {
		window.scrollTo(0,0)
	}, [products])

	return (
		<div className="Product-wrapper">
			{products &&
				products.map((product, i) => {
					const image = product.images[0]
					return (
						<div className="Product" key={product.id + i}>
							{image ? (
								<img src={image.src} alt={`${product.title} product shot`} width="300px" height="175px" />
							) : null}
							<div>
								<h4 className="Product__title">{product.title}</h4>
								<p className="Product__price">${product.variants[0].price}</p>
							</div>
							
							<button
								className="Product__buy button"
								onClick={(e) => handleClick(e, product.id, product.title)}
							>
								View Details
							</button>
							
						</div>
					)
				})}
		</div>
	)
}
