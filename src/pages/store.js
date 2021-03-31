import React, { useEffect } from "react"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import Products from "../storePage/storeComponents/Products"
import ProductView from "../templates/Productview"
import { useShopify } from "../storePage/hooks"

import { Provider } from "react-redux"

import "./app.css"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import styles from '../styles/StorePage/wrapper.module.css'
import Cart from '../storePage/storeComponents/Cart'
import Home from '../storePage/storeComponents/Home'

import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import * as reducers from "../storePage/redux/ducks"

const App = () => {
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
        
        <Router>
			<div id="App">
				
				<Route path="/store" component={Home} />
				<Route path="/store" component={Products} />
				<Route path="/products/:productId" component={ProductView} />
				<Route path="/store" component={Cart} />
			</div>
		</Router>
        
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
        <App /> 
	</Provider>
    </div>
    </Layout>
)
}
export default Store;