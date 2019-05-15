import React from 'react'
import { Header } from '../../components'
import classes from './styles.module.scss'

const withLayout = Page => {
	return props => (
		<div className={classes.layout}>
			<Header />
			<div className={classes.pageInner}>
				<Page {...props} />
			</div>
		</div>
	)
}

export default withLayout
