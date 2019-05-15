import React from 'react'
import { Header } from '../../components'
import classes from './styles.module.scss'

const withLayout = (Component, options = { step: false }) => {
	if (options.step)
		return props => (
			<div className={classes.step}>
				<Component {...props} />
			</div>
		)

	// default layout (Page)
	return props => (
		<div className={classes.layout}>
			<Header />
			<div className={classes.pageInner}>
				<Component {...props} />
			</div>
		</div>
	)
}

export default withLayout
