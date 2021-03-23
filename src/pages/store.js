import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import store from "../storePage/redux/store"
import App from "../storePage/storeComponents/App"
import "./app.css"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"


const Store = () => (
    <Layout title="Custom Ecommerce Example">
    <SEO title="Home" />
	<Provider store={store}>
		<App />
	</Provider>
    </Layout>
    
)
export default Store;