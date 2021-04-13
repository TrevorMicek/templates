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
    const Pages = (props) => {
     const {
		createShop,
		createCheckout,
		fetchProducts,
        addVariant
		// fetchCollection,
	} = useShopify()
  
    const [cart, setCart] = useState([])
    const [cartAmount, setCartAmount] = useState(0)
    
	const addToCart = (cartItem) => setCart([...cart, cartItem])
    const getCart = () => setCartAmount(cart.length)
   
    const storage = () => JSON.parse(window.localStorage.getItem('cart')) || {}
    const createCart = () => {
       
        addToCart(storage())
    
        return createComponent(cart, addVariant)
    } 
	useEffect(() => {
		createShop()
		fetchProducts()
		createCheckout()
		// fetchCollection()
	}, [])
    return (
        <>
      <Cart create={createCart} />
        <Router>
			<Products path="/store" title={props.title} />
			<ProductView path='/store/products/:productId' title={props.title} />
        </Router>
        </>
    )
}
const Store = () => {
    const initialTitle = 'Custom Ecommerce'
    const [pageTitle, setPageTitle] = useState(initialTitle)
    const getTitle = (title) => setPageTitle(title)
   //const composeEnhancers = window.__REDUX__DEVTOOLS__EXTENSION__COMPOSE__ || compose;
    const rootReducer = combineReducers(reducers);
    const enhancer = compose(applyMiddleware(thunk));
    const store = createStore(rootReducer, enhancer);
return (
    <Layout title={undefined}>
    <SEO title="Online Store" />
    <div className={styles.app}>
	<Provider store={store}>
        <Pages title={getTitle} /> 
	</Provider>
    </div>
    </Layout>
)
}
return <Store />
}
export default App;