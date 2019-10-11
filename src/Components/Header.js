import React from 'react'
import { Link } from '@reach/router'

import logo from '../img/logo.svg'
import exit from '../img/exit.svg'
import '../css/header.css'

function Header() {
	return (
		<div>
			<div id="header">
				<div id="logo">
					<img src={logo} alt="logo" />
				</div>
				<div id="header-links">
					<Link to="/homepage">HOMEPAGE</Link>
					<Link to="/addbook">ADD BOOK</Link>
					<Link to="/borrowed">BORROWED</Link>
					<Link to="/lent" id="a-right">
						LENT
					</Link>
				</div>
				<a href="/" id="exit">
					<img src={exit} alt="Exit" />
				</a>
			</div>
			<div id="header-bar" />
		</div>
	)
}

export default Header
