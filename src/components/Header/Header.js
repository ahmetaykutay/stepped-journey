import React from 'react'
import { connect } from 'react-redux'
import HeaderItem from '../HeaderItem/HeaderItem'
import classes from './styles.module.scss'

function Header({ steps, currentStepIndex }) {
	return (
		<div className={classes.header}>
			<HeaderItem.Button
				showExit={currentStepIndex !== 0}
				onExit={() => {
					console.log('exit')
				}}
				onBack={() => {
					console.log('back')
				}}
			/>
			{steps.map((s, i) => {
				let status
				if (i === currentStepIndex) {
					status = HeaderItem.status.ACTIVE
				} else if (i < currentStepIndex && (s.value !== null || s.length)) {
					status = HeaderItem.status.DONE
				}
				return <HeaderItem key={s.name} status={status} title={s.title} />
			})}
		</div>
	)
}

const mapStateToProps = state => ({
	steps: state.journey.steps,
	currentStepIndex: state.journey.currentStepIndex
})

export default connect(mapStateToProps)(Header)
