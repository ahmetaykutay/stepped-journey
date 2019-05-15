import React from 'react'

export default function StepContainer({ children }) {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>{children}</div>
	)
}
