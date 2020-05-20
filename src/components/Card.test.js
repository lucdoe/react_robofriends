import { shallow } from 'enzyme'
import React from 'react'
import Card from './Card'
import renderer from 'react-test-renderer'

// Updated test case with a Link to a different address
it('renders correctly', () => {
	const tree = renderer.create(<Card />).toJSON()
	expect(tree).toMatchSnapshot()
})
