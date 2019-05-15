import React from 'react'
import { connect } from 'react-redux'
import classes from './App.module.scss'
import withLayout from './HOC/layout'
import { actions } from './store'
import BrandName from './components/steps/BrandName/BrandName'

const stepComponentMap = {
	'brand-name': <BrandName />,
	describe: 12,
	objectives: 12
}

function App({ currentStep }) {
	return <div className={classes.App}>{stepComponentMap[currentStep]}</div>
}

const mapStateToProps = state => ({
	currentStep: state.journey.currentStep
})

const mapDispatchToProps = dispatch => ({
	nextStep: actions.journey.nextStep
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withLayout(App))
