import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import './index.css'
import App from './containers/App'
import * as serviceWorker from './serviceWorker'
import 'tachyons'
import { searchRobots, requestRobots } from './reducers'

const logger = createLogger()

const rootReducer = combineReducers({ searchRobots, requestRobots })
// to create the store/ object tree of state
// thunk waits if one of the actions returns a function
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

// props value
// provider component which passes down the store
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
