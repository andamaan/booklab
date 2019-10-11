import React from 'react'
import { Router } from '@reach/router'

//SCREENS
import LogIn from './Screens/LogIn'
import HomePage from './Screens/HomePage'
import Details from './Screens/Details'
import AddBook from './Screens/AddBook'
import Borrowed from './Screens/Borrowed'
import Lent from './Screens/Lent'

function App() {
	return (
		<Router className="App">
			<LogIn path="/" />
			<HomePage path="/homepage" />
			<Details path="/details/:id" />
			<AddBook path="/addbook" />
			<Borrowed path="/borrowed" />
			<Lent path="/lent" />
		</Router>
	)
}

export default App
