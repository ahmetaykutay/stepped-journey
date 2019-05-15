import React, {useState} from 'react'
import { connect } from 'react-redux'
import { actions } from '../../../store'
import StepContainer from '../../StepContainer/StepContainer'
import Title from '../../Title/Title'
import Text from '../../Text/Text'
import Input from '../../Input/Input'
import Button from '../../Button/Button'
import Pagination from '../../Pagination/Pagination'

function BrandName({ setBrandName, currentStepIndex, totalSteps }) {
  const [newBrandName, setNewBrandName] = useState('')

	return (
		<StepContainer>
			<Title>brand name</Title>
			<Pagination page={currentStepIndex + 1} totalPage={totalSteps} />
			<Text>What is the name of your brand?</Text>
			<Input
				placeholder="Brand Name"
				onChange={setNewBrandName}
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

const mapStateToProps = state => ({
  currentStepIndex: state.journey.currentStepIndex,
  totalSteps: state.journey.steps.length
})

const mapDispatchToProps = dispatch => ({
	setBrandName: brandName => dispatch(actions.journey.setBrandName(brandName))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BrandName)
