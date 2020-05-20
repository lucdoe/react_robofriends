import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import MainPage from './MainPage'

let snapWrapper
let wrapper
let wrapper2

beforeEach(() => {
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		isPending: false,
	}
	snapWrapper = renderer.create(<MainPage {...mockProps} />).toJSON()
})

it('renders mainpager without crashing', () => {
	expect(snapWrapper).toMatchSnapshot()
})

it('filter robots correctly', () => {
	const mockProps2 = {
		onRequestRobots: jest.fn(),
		robots: [
			{
				id: '4',
				name: 'Johny Monny',
				email: 'test@test.com',
			},
		],
		searchField: 'Johny',
		isPending: false,
	}
	wrapper = shallow(<MainPage {...mockProps2} />)
	expect(wrapper.instance().filterRobots([])).toEqual([
		{
			email: 'test@test.com',
			id: '4',
			name: 'Johny Monny',
		},
	])
})

it('filter robots correctly if empty pending true', () => {
	const mockProps3 = {
		onRequestRobots: jest.fn(),
		robots: [
			{
				id: '4',
				name: 'Johny Monny',
				email: 'test@test.com',
			},
		],
		searchField: 'a',
		isPending: true,
	}
	wrapper2 = shallow(<MainPage {...mockProps3} />)
	expect(wrapper2.instance().filterRobots([])).toEqual([])
})
