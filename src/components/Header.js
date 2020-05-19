import React, { Component } from 'react'
import CounterButton from './CounterButton'

class Header extends Component {
	// lifecycle hook, returns true
	shouldComponentUpdate(nextProps, nextState) {
		return false
	}
	render() {
		return (
			<div>
				<h1 className="robo-header">Robofriends</h1>
				<CounterButton />
			</div>
		)
	}
}

export default Header
