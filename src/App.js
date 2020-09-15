import React from "react"

const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/"
const LOGIN_URL = `${ROOT_URL}auth/api-token-auth/`

function App() {
	function login() {
		fetch(LOGIN_URL)
	}

	return (
		<div>
			<h1>The Event App</h1>
			<div>
				<label htmlFor="email">Email:</label>
				<input name="email"></input>
			</div>
			<div>
				<label htmlFor="password">Password:</label>
				<input name="password" type="password"></input>
			</div>
			<button onClick={login}>Login</button>
		</div>
	)
}

export default App
