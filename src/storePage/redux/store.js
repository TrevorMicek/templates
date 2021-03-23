import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import * as reducers from "./ducks"
import { window, extend } from 'ssr-window'

extend(window, {
    compose: __REDUX_DEVTOOLS_EXTENSION_COMPOSE__
})
const composeEnhancers = window.compose || compose
const rootReducer = combineReducers(reducers)
const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(rootReducer, enhancer)

export default store
