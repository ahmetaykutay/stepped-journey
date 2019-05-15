import React from 'react'
import classes from './App.module.scss'
import withLayout from './HOC/layout'
import { StepContainer } from './components'

function App({ currentStep }) {
	return (
		<div className={classes.App}>
			<StepContainer />
		</div>
	)
}

export default withLayout(App)
