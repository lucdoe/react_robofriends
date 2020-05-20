import React, { Component } from 'react'
import { connect } from 'react-redux'
import MainPage from '../components/MainPage'
import './app.css'

import { setSearchField, requestRobots } from '../actions'

const mapStateToProps = (state) => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		// higher order function, returns function
		onRequestRobots: () => dispatch(requestRobots()), // requestRobots(dispatch)
	}
}

class App extends Component {
	render() {
		return <MainPage {...this.props} />
	}
}

// hire order function, returns another function
// connect runs and returns app as function
export default connect(mapStateToProps, mapDispatchToProps)(App)
