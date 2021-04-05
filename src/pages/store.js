import React, { useCallback, useEffect, useState } from "react"
import { Router, Redirect } from '@reach/router'
import Products from "../storePage/storeComponents/Products"
import ProductView from "../storePage/storeComponents/Productview"
import Cart from '../storePage/storeComponents/Cart'
import createComponent from '../components/commonComps/createCart'

import { useShopify } from "../storePage/hooks"

import { Provider } from "react-redux"

import "./app.css"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import styles from '../styles/StorePage/wrapper.module.css'

import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import * as reducers from "../storePage/redux/ducks"

const App = () => {
    const Pages = () => {
     const {
		createShop,
		createCheckout,
		fetchProducts,
        addVariant
		// fetchCollection,
	} = useShopify()
    const [cart, setCart] = useState([])
   const [isCartOpen, setIsCartOpen] = useState(false)
   const cartIsOpen = () => setIsCartOpen(true)
   
	const addToCart = (cartItem) =>{
        console.log('added!')
         setCart([...cart, cartItem])
    }
    const createCart = () => {
        createComponent(cart, addVariant)
    } 
    /*
    const addItems = useCallback(() => {
        createCart()
    }, [cart])
    */
    
	useEffect(() => {
		createShop()
		fetchProducts()
		createCheckout()
        const storage = JSON.parse(window.localStorage.getItem('cart'))
        addToCart(storage)
		// fetchCollection()
	}, [])
    return (
        <>
      <Cart create={createCart} isOpen={isCartOpen} setIsOpen={cartIsOpen} />
        <Router>
            
            
			<Products path="/store" />
			<ProductView path='/store/products/:productId' add={addToCart} item={cart} create={createCart} />
		
        </Router>
        </>
    )
}

const Store = () => {
   //const composeEnhancers = window.__REDUX__DEVTOOLS__EXTENSION__COMPOSE__ || compose;

    const rootReducer = combineReducers(reducers);

    const enhancer = compose(applyMiddleware(thunk));
    
    const store = createStore(rootReducer, enhancer);
   

    
return (
    
    <Layout title="Custom Ecommerce">
    <SEO title="Online Store" />
    <div className={styles.app}>
	<Provider store={store}>
      
        <Pages /> 
	</Provider>
    </div>
    </Layout>
)
}
return <Store />
}
export default App;