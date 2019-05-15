import React from 'react'
import classes from './styles.module.scss'

export default function Pagination({ page, totalPage }) {
	return (
		<div>
			<span
				className={[
					classes.pagination,
					page > 1 && page !== totalPage ? classes.back : null
				].join(' ')}
			>{`${page}/${totalPage}`}</span>
		</div>
	)
}
