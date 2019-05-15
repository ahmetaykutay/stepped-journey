import React from 'react'
import TextArea from '../../../TextArea/TextArea'

function BrandName({ updateStepValue }) {
	return <TextArea wordCount={500} onChange={updateStepValue} />
}

export default BrandName
