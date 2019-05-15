import React from 'react'
import StepContainer from '../../StepContainer/StepContainer'
import Title from '../../Title/Title'
import Text from '../../Text/Text'
import Input from '../../Input/Input'
import Button from '../../Button/Button'

export default function BrandName() {
	return (
		<StepContainer>
			<Title>brand name</Title>
			<Text>What is the name of your brand?</Text>
			<Input
				placeholder="Brand Name"
				onChange={text => {
					console.log(text)
				}}
			/>
      <Button disabled onClick={() => {console.log('hello world')}}>Next</Button>
		</StepContainer>
	)
}
