import React from 'react'
import Header from '../Components/Header'
import BookList from '../Components/BookList'

function HomePage(props) {
	return (
		<div id="homepage">
			<Header />
			<BookList />
		</div>
	)
}

export default HomePage
