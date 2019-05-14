import React from 'react'
import { Header } from './components'
import classes from './App.module.scss'

function App() {
	console.log(classes)
	return (
		<div className={classes.App}>
			<Header />
		</div>
	)
}

export default App
