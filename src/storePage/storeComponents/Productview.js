import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { navigate, useMatch } from "@reach/router"


import { useShopify } from "../hooks"
import { create } from "lodash"


export default (props) => {
	const {
		product,
		fetchProduct,
		openCart,
		createCheckout,
		checkoutState,
		addVariant,
	} = useShopify()
	
	const id = useMatch("/store/products/:productId").productId
	const defaultSize = product.variants && product.variants[0].id.toString()
	const [size, setSize] = useState("")
	const [quantity, setQuantity] = useState(1)

	const description = product.description && product.description.split(".")

	function changeSize(sizeId, quantity) {
		window.scrollTo(0,90)
		if (sizeId === "") {
			sizeId = defaultSize
		
			const lineItemsToAdd = [
				{ variantId: sizeId, quantity: parseInt(quantity, 10) },
			]
			
			const checkoutId = checkoutState.id
			const answer = {
				id: checkoutId,
				add: lineItemsToAdd
			}
			props.add(answer)
			
			props.create()
			
		} else {
		
			const lineItemsToAdd = [
				{ variantId: sizeId, quantity: parseInt(quantity, 10) },
			]
			
			const checkoutId = checkoutState.id
			addVariant(checkoutId, lineItemsToAdd)
		}
	}
	useEffect(() => {
	
		createCheckout()
		// fetchCollection()
	}, [])
	
	useEffect(() => {
		fetchProduct(id)
		window.scrollTo(0,400)
	}, [id])
	
	return (
		<div id="individualProduct">
			<Link className="homeButton button" to="../../">
				Home
			</Link>
	
			<div className="Product-wrapper2">
				<div className="Images">
					{product.images &&
						product.images.map((image, i) => {
							return (
								<img
									className="Image"
									key={image.id + i}
									src={image.src}
									alt={`${product.title} product shot`}
									width="150px"
									height="150px"
								/>
							)
						})}
				</div>
				<div className="Product__info">
					<h2 className="Product__title2">{product.title}</h2>
					<ul className="Product__description">
						{description &&
							description.map((each, i) => {
								return <li key={`line-description +${i}`}>{each}</li>
							})}
					</ul>
					<div>
						<label htmlFor={"prodOptions"}>Size</label>
						<select
							id="prodOptions"
							name={size}
							onChange={(e) => {
								setSize(e.target.value)
							}}
						>
							{product.variants &&
								product.variants.map((item, i) => {
									return (
										<option
											value={item.id.toString()}
											key={item.title + i}
										>{`${item.title}`}</option>
									)
								})}
						</select>
					</div>
					<div>
						<label>Quantity</label>
						<input
							className="quantity"
							type="number"
							min={1}
							value={quantity}
							onChange={(e) => {
								setQuantity(e.target.value)
							}}
						></input>
					</div>
					<h3 className="Product__price">
						${product.variants && product.variants[0].price}
					</h3>
				
					<button
						className="prodBuy button"
						onClick={(e) => changeSize(size, quantity)}
					>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
		)
	
	
}
