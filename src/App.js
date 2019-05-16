import React from 'react'
import { connect } from 'react-redux'
import classes from './App.module.scss'
import withLayout from './HOC/layout'
import { StepContainer, Done } from './components'

function App({ done, steps }) {
	return (
		<div className={classes.App}>{done ? <Done steps={steps} /> : <StepContainer />}</div>
	)
}

const mapStateToProps = state => ({
	done: state.journey.done,
	steps: state.journey.steps
})

export default connect(mapStateToProps)(withLayout(App))
