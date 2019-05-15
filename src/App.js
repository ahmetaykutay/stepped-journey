import React from 'react'
import { connect } from 'react-redux'
import classes from './App.module.scss'
import withLayout from './HOC/layout'
import { StepContainer } from './components'

function App({ currentStep, done }) {
	return (
		<div className={classes.App}>{done ? <p>done</p> : <StepContainer />}</div>
	)
}

const mapStateToProps = state => ({
	done: state.journey.done
})

export default connect(mapStateToProps)(withLayout(App))
