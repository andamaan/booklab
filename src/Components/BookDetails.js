import React, { useContext, useState } from 'react'
import { globalHistory, navigate } from '@reach/router'

import '../css/addForm.css'

import { Context } from '../context'

function BookDetails() {
	const {
		id,
		title: _title,
		author: _author,
		description: _description,
		situation: _situation,
		person: _person,
		image: _image,
	} = globalHistory.location.state

	const [state, dispatch] = useContext(Context)
	const [title, set_title] = useState(_title)
	const [author, set_author] = useState(_author)
	const [description, set_description] = useState(_description)
	const [situation, set_situation] = useState(_situation)
	const [person, set_person] = useState(_person)
	const [image, set_Image] = useState(_image)
	const [index, set_index] = useState(0)


	//IMAGES
	const fetchImage = async () => {
		const data = await fetch("https://pixabay.com/api/?key=11374530-ffbd01d764270cd2223dc5bd3&q=mountain&image_type=photo")
		
		const items = await data.json()
		const images = items.hits
	
		set_Image(images[index].largeImageURL)
		if(index< images.length-1){
		  set_index(index + 1)
		}
		else{
		  set_index(0)
		}
		console.log(id)
	}

	//FORM
	const handle_title = (e) => {set_title(e.target.value)}
	const handle_author = (e) => set_author(e.target.value)
	const handle_description = (e) => set_description(e.target.value)
	const handle_situation = (e) => set_situation(e.target.value)
	const handle_person = (e) => set_person(e.target.value)

	const handle_submit = (e) => {
		e.preventDefault()
		dispatch({
			type: 'UPDATE',
			payload: { id, title, author, description, situation, person, image },
		})

		navigate(`/homepage`, { state })
	}


	return (
		<div id="add-form">
			<div id="img-download">
				<div id="img-placeholder">
					<img src={image} alt="Book" />
				</div>
				<button onClick={fetchImage}>CHANGE IMAGE</button>
			</div>
			<div id="ligne" />
			<div id="form">
				<form onSubmit={handle_submit}>
					<div id="title-input" className="flex-elements">
						<p>Title :</p>
						<textarea
							name="title"
							value={title}
							onChange={handle_title}
							placeholder={title}
						>
							{title} hello
						</textarea>
					</div>
					<div id="author-input" className="flex-elements">
						<p>Author :</p>
						<textarea
							name="author"
							value={author}
							onChange={handle_author}
						/>
					</div>
					<div id="description-input" className="flex-elements">
						<p>Description :</p>
						<textarea
							name="description"
							value={description}
							onChange={handle_description}
						/>
					</div>
					<div id="situation" className="flex-elements">
						<p>State :</p>
						<div id="select">
							<select value={situation} onChange={handle_situation} >
								<option value="Mine">Mine</option>
								<option value="Borrowed from">Borrowed from</option>
								<option value="Lent to">Lent to</option>
							</select>
							<input value={person} type="text" placeholder="Type here..." onChange={handle_person}/>
						</div>
					</div>
					<button type="submit" disabled={!title || !author || !description || !situation}>
						SAVE
					</button>
				</form>
			</div>
		</div>
	)
}

export default BookDetails
