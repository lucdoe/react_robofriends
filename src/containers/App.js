import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBundry'
import Header from '../components/Header'
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
	componentDidMount() {
		this.props.onRequestRobots()
	}

	render() {
		const { searchField, onSearchChange, robots, isPending } = this.props
		const filteredRobots = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})
		return isPending ? (
			<p className="tc ma20 code f2">Loading...</p>
		) : (
			<Fragment>
				<section className="tc code">
					<Header />
					<SearchBox searchChange={onSearchChange} />
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filteredRobots} />
						</ErrorBoundry>
					</Scroll>
				</section>
			</Fragment>
		)
	}
}

// hire order function, returns another function
// connect runs and returns app as function
export default connect(mapStateToProps, mapDispatchToProps)(App)
