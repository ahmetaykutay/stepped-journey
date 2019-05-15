import React from 'react'
import { connect } from 'react-redux'
import classes from './App.module.scss'
import withLayout from './HOC/layout'
import { actions } from './store'
import BrandName from './components/steps/BrandName/BrandName'
import Describe from './components/steps/Describe/Describe'

const stepComponentMap = {
	'brand-name': <BrandName />,
	describe: <Describe />,
	objectives: <p>objectives</p>
}

function App({ currentStep }) {
	return <div className={classes.App}>{stepComponentMap[currentStep]}</div>
}

const mapStateToProps = state => ({
	currentStep: state.journey.steps[state.journey.currentStepIndex]
})

const mapDispatchToProps = dispatch => ({
	nextStep: actions.journey.nextStep
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withLayout(App))
