import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"

import App from "./App"
import "./app.css"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import styles from '../styles/StorePage/wrapper.module.css'

import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import * as reducers from "../storePage/redux/ducks"



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