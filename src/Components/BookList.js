import React, { useContext, useState } from 'react'
import {navigate } from '@reach/router'

import { Context } from '../context'

import '../css/bookList.css'


function BookList() {
	const [state, dispatch] = useContext(Context)

	const { books } = state

	//TO DELETE A BOOK
	const handle_delete = (id) => {
		dispatch({ type: 'DEL', payload: { id } })
	}

	//TO SEE THE DETAILS OF A SPECIFIC BOOK AND MODIFY THEM	
	const go_to_details = (id, state) => navigate(`/details/${id}`, { state })

	//TO LOOK FOR A BOOK THANKS TO A KEY WORD
	const [search, setSearch] = React.useState([])
	
	const search_function = (e) => {
		let val = e.target.value
			.split(' ')
			.map((word) =>
				word.toLowerCase()
			)
			.filter(
				(word) => word !== ''
			)
		setSearch(val)
	}



	return (
		<div id="book-list">
			<div id="search">
				  <input type="text" name="search" placeholder="Hover here to look for a book..." 
				  			id="search-bar" onChange={search_function}></input>
      		</div>
			<div id="list-title">
				<h1 className="one hide">IMAGE</h1>
				<h1 className="two">TITLE</h1>
				<h1 className="three">AUTHOR</h1>
				<h1 className="four">STATE</h1>
				<h1 className="six hide">DELETE</h1>
			</div>
			<li>
				{books.length > 0 &&
					books.filter(
							({ title, author, description }) =>
								title.toLowerCase().includes(search) ||
								author.toLowerCase().includes(search) ||
								description.toLowerCase().includes(search)).map(
						({ id, title, author, description, situation, person, image }) => (
							
							<ul key={id} className="list-content">
								
								<div className="one">
									<img src={image} className="book-img" alt="book" />
								</div>
								<a	id="book-select"  className="two"
								style={{ textDecoration: 'none', color: 'black' }}
								onClick={() =>
									go_to_details(id, { id, title, author, description, situation, person, image })
								}
								>
									<div >
										<p className="book-title">{title}</p>
									</div>
									</a>
								<div className="three">
									<p className="author-title">{author}</p>
								</div>
								<div className="four situation">
									<p>{situation}</p>
									<p style={{opacity:0}}>a</p>
									<p id="emphasis">{person}</p>
								</div>
								<div className="six">
									<button onClick={() => handle_delete(id)}>Delete</button>
								</div>
								
							</ul>
							
						)
					)}
			</li>
		</div>
	)
}

export default BookList
