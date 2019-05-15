import React, {useState} from 'react'
import { connect } from 'react-redux'
import { actions } from '../../../store'
import StepContainer from '../../StepContainer/StepContainer'
import Title from '../../Title/Title'
import Text from '../../Text/Text'
import Input from '../../Input/Input'
import Button from '../../Button/Button'
import Pagination from '../../Pagination/Pagination'

function BrandName({ setBrandName }) {
  const [newBrandName, setNewBrandName] = useState('')

	return (
		<StepContainer>
			<Title>brand name</Title>
			<Pagination page={2} totalPage={3} />
			<Text>What is the name of your brand?</Text>
			<Input
				placeholder="Brand Name"
				onChange={text => {
					setNewBrandName(text)
				}}
			/>
			<Button
				disabled={newBrandName === ''}
				onClick={() => {
					setBrandName(newBrandName)
				}}
			>
				Next
			</Button>
		</StepContainer>
	)
}

const mapDispatchToProps = dispatch => ({
	setBrandName: brandName => dispatch(actions.journey.setBrandName(brandName))
})

export default connect(
	null,
	mapDispatchToProps
)(BrandName)
