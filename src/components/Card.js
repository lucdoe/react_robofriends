import React from 'react'

const Card = ({ id, name, email }) => {
	return (
		<article className="bg-light-green dib br4 pa3 ma3 grow bw5 shadow-5 tc">
			<img alt="Robot Card" src={`https://robohash.org/${id}?100x100`} />
			<div>
				<h2 className="f3 b">{name}</h2>
				<p>{email}</p>
			</div>
		</article>
	)
}

export default Card
