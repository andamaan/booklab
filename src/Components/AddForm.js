import React, { useContext, useState } from 'react'

import '../css/addForm.css'

import { Context } from '../context'

const AddForm = () => {
	const [state, dispatch] = useContext(Context)
	const [title, set_title] = useState('')
	const [author, set_author] = useState('')
	const [description, set_description] = useState('')
	const [situation, set_situation] = useState('Mine')
	const [person, set_person] = useState('')
	const [image, set_Image] = useState('')
	const [index, set_index] = useState(0)


	//IMAGES
	const fetchImage = async () => {
		const data = await fetch(
			'https://pixabay.com/api/?key=11374530-ffbd01d764270cd2223dc5bd3&q=mountain&image_type=photo'
		)

		const items = await data.json()
		const images = items.hits

		set_Image(images[index].largeImageURL)
		if (index < images.length - 1) {
			set_index(index + 1)
		} else {
			set_index(0)
		}
	}

	//FORM
	const handle_title = (e) => set_title(e.target.value)
	const handle_author = (e) => set_author(e.target.value)
	const handle_description = (e) => set_description(e.target.value)
	const handle_situation = (e) => set_situation(e.target.value)
	const handle_person = (e) => set_person(e.target.value)

	const handle_submit = (e) => {
		e.preventDefault()
		dispatch({
			type: 'ADD',
			payload: { title, author, description, situation, person, image },
		})
		set_title('')
		set_author('')
		set_description('')
		set_situation('')
		set_person('')
		set_Image('')
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
						<textarea name="title" value={title} onChange={handle_title} />
					</div>
					<div id="author-input" className="flex-elements">
						<p>Author :</p>
						<textarea name="author" value={author} onChange={handle_author} />
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
							<select value={situation} onChange={handle_situation}>
								<option value="Mine">Mine</option>
								<option value="Borrowed from">Borrowed from</option>
								<option value="Lent to">Lent to</option>
							</select>
							<input
								value={person}
								type="text"
								placeholder="Type here..."
								onChange={handle_person}
							/>
						</div>
					</div>
					<button
						type="submit"
						disabled={!title || !author || !description || !situation}
					>
						ADD
					</button>
				</form>
			</div>
		</div>
	)
}

export default AddForm
