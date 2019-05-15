import React from 'react'
import Input from '../../../Input/Input'

function BrandName({ updateStepValue }) {
	return (
		<Input
			style={{ maxWidth: '350px' }}
			placeholder="Brand Name"
			onChange={updateStepValue}
		/>
	)
}

export default BrandName
