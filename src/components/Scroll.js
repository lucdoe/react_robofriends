import React from 'react'

const Scroll = (props) => {
	return (
		<section className="ma1 ba b--dashed bw3" style={{ overflowY: 'scroll', height: '105vw' }}>
			{props.children}
		</section>
	)
}

export default Scroll
