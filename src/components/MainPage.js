import React, { Fragment, Component } from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import Scroll from './Scroll'
import ErrorBoundry from './ErrorBundry'
import Header from './Header'
import './MainPage.css'

class MainPage extends Component {
	componentDidMount() {
		this.props.onRequestRobots()
	}
	filterRobots = () => {
		return this.props.robots.filter((robot) => {
			return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
		})
	}
	render() {
		const { onSearchChange, isPending } = this.props

		return isPending ? (
			<p className="tc ma20 code f2">Loading...</p>
		) : (
			<Fragment>
				<section className="tc code">
					<Header />
					<SearchBox searchChange={onSearchChange} />
					<Scroll>
						<ErrorBoundry>
							<CardList robots={this.filterRobots()} />
						</ErrorBoundry>
					</Scroll>
				</section>
			</Fragment>
		)
	}
}

export default MainPage
