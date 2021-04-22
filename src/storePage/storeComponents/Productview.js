import React, { useEffect, useState } from "react"

import { navigate, useMatch } from "@reach/router"
import Header from './Header'
import Layout from '../../components/layout/layout'
import { useShopify } from "../hooks"
import { create } from "lodash"
import styles from '../../styles/StorePage/wrapper.module.css'

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
	const [refreshQuantity, setRefreshQuantity] = useState(0)
	const description = product.description && product.description.split(".")

	const [curImg, setCurImg] = useState(0)
	const leftImg = () => {
		if (curImg > 0) {
		setCurImg(curImg - 1)
		} else {
			setCurImg(curImg)
		}
	}
	const rightImg = () => {
		if (curImg < 3) {
		setCurImg(curImg + 1)
		} else {
			setCurImg(curImg)
		}
	}

	function changeSize(sizeId, quantity) {
		window.scrollTo(0,0)
		if (sizeId === "") {
			sizeId = defaultSize
			const lineItemsToAdd = [
				{ variantId: sizeId, quantity: parseInt(quantity, 10) },
			]
			const lineItemsOnRefresh = [
				{ variantId: sizeId, quantity: parseInt(refreshQuantity, 10) },
			]
			const storage = {
				id: checkoutState.id,
				add: lineItemsToAdd,
				onRefresh: lineItemsOnRefresh
			}
			addVariant(storage.id, storage.add)	
			const oldItems = JSON.parse(window.localStorage.getItem('cart')) || []
			oldItems.push(storage)	
			window.localStorage.setItem('cart', JSON.stringify(oldItems))
			navigate('../')
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
		props.button('../../')
		
		// fetchCollection()
	}, [])
	
	useEffect(() => {
		fetchProduct(id)
		window.scrollTo(0,0)
	}, [id])
	const leftArrow = '<'
	const rightArrow = '>'
	const downArrow = '^'
	return (
		<Layout title={product.title}>
			{props.cart()}
		<div className={styles.app}>
		<div id="individualProduct">
			
	
			<div className="Product-wrapper2">
				<div className="Images">
				<button className="leftButton" onClick={leftImg}>{leftArrow}</button>
					{product.images &&
								<img
									className="Image"
									key={product.images[curImg].src}
									src={product.images[curImg].src}
									alt={`${product.title} product shot`}
									width="250px"
									height="250px"
								/>
						}
						<button className="rightButton" onClick={rightImg}>{rightArrow}</button>
				</div>
				<div className="optionsWrapper">
					<div>
				<h3 className="Product__price">
						${product.variants && product.variants[0].price}
					</h3>
					
						<label htmlFor={"prodOptions"}>Size</label><br />
						
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
						<label className="qtyLabel">Quantity</label><br />
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
					
				
					<button
						className="prodBuy button"
						onClick={(e) => changeSize(size, quantity)}
					>
						Add To Cart
					</button>
					</div>
				<div className="Product__info">
					
					<ul className="Product__description">
						{description &&
							description.map((each, i) => {
								return <li key={`line-description +${i}`}>{each}</li>
							})}
					</ul>
					
				</div>
			</div>
		</div>
		</div>
		</Layout>
		)
	
	
}
