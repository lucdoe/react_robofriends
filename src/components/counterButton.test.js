import { shallow } from 'enzyme'
import React from 'react'
import CounterButton from './CounterButton'
import renderer from 'react-test-renderer'

// Updated test case with a Link to a different address
it('counter button test', () => {
	const mockColor = 'red'
	const tree = renderer.create(<CounterButton color={mockColor} />).toJSON()
	expect(tree).toMatchSnapshot()
})

it('correctly incre,ment counter', () => {
	const mockColor = 'red'
	const wrapper = shallow(<CounterButton color={mockColor} />)

	expect(wrapper.state()).toEqual({ count: 0 })
	wrapper.find('[id="counter"]').simulate('click')
	expect(wrapper.state()).toEqual({ count: 1 })
	wrapper.find('[id="counter"]').simulate('click')
	expect(wrapper.state()).toEqual({ count: 2 })
	expect(wrapper.props().color).toEqual('red')
})
