import React, { createContext, useReducer } from 'react'

const Context = createContext(null)

const initialState = { books: [] }

const init = () => {
	if (localStorage.getItem('DATA'))
		return JSON.parse(localStorage.getItem('DATA'))
	else return initialState
}

const reducer = (state, action) => {
	const { books } = state
	const { type, payload } = action
	const { id, title, author, situation, person, description, image } = payload

	const update_data = (data) =>
		localStorage.setItem('DATA', JSON.stringify(data))

	switch (type) {
		case 'ADD':
			update_data({
				books: [
					...books,
					{ id: new Date(), title, author, situation, person, description, image },
				],
			})
			return {
				books: [
					...books,
					{ id: new Date(), title, author, situation, person, description, image },
				],
			}
		case 'DEL':
			update_data({ books: [...books.filter(({ id: _id }) => _id !== id)] })
			return { books: [...books.filter(({ id: _id }) => _id !== id)] }
		case 'UPDATE':
			const current = books.filter(({ id: _id }) => _id === id)[0]
			const filtered = [...books.filter(({ id: _id }) => _id !== id)]
			const updated = [
				...filtered,
				{ ...current, id, title, author, situation, person, description, image},
			].sort(({ id }, { id: _id }) => +new Date(id) - +new Date(_id))

			update_data({ books: updated })
			return { books: updated }
		default:
			return state
	}
}

const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState, init)

	return (
		<Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
	)
}

export { Context, Provider }
