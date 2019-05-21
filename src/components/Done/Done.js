import React from 'react'

export default function Done({ steps }) {
	return (
		<div>
			<h3>Your journey ends here</h3>
			<hr />
			{steps.map(s => (
				<div key={s.name}>
					<h4 style={{ marginTop: '30px' }}>{s.title}</h4>
					{Array.isArray(s.value) ? (
						s.value.map(v => <p key={v}>{v}</p>)
					) : (
						<p>{s.value}</p>
					)}
				</div>
			))}
		</div>
	)
}
