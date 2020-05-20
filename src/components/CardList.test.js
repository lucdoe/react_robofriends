import { shallow } from 'enzyme'
import React from 'react'
import CardList from './CardList'
import renderer from 'react-test-renderer'

// Updated test case with a Link to a different address
it('renders correctly', () => {
	const mockRobots = [
		{
			id: 1,
			name: 'John Sun',
			username: 'johnymonny',
			email: 'johnymonny@gmail.de',
		},
	]
	const tree = renderer.create(<CardList robots={mockRobots} />).toJSON()
	expect(tree).toMatchSnapshot()
})
