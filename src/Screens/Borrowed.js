import React from 'react'
import Header from '../Components/Header'
import BorrowedList from '../Components/BorrowedList'

function Borrowed(props) {
	return (
		<div id="borrowed">
			<Header />
			<BorrowedList />
		</div>
	)
}

export default Borrowed
