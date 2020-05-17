import React, { Fragment, Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBundry'

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchField: '',
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => {
				this.setState({ robots: users })
			})
	}

	onSearchChange = (event) => {
		this.setState({
			searchField: event.target.value,
		})
	}
	render() {
		const { robots, searchField } = this.state
		const filteredRobots = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})
		return !robots.length ? (
			<p className="tc ma20 code f2">Loading...</p>
		) : (
			<Fragment>
				<section className="tc code">
					<h1 className="f1">Robofriends</h1>
					<SearchBox searchChange={this.onSearchChange} />
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

export default App
