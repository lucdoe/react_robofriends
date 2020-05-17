import React from 'react'

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<section className="pa2 mb4">
			<input
				className="pa3 ba b--green bg-lightest-blue tc"
				type="search"
				placeholder="search robots"
				onChange={searchChange}
			/>
		</section>
	)
}

export default SearchBox
