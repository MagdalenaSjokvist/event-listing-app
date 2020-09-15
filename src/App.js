import React, { useRef } from "react"

const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/"
const LOGIN_URL = `${ROOT_URL}auth/api-token-auth/`

function App() {
	const emailInput = useRef(null)
	const passwordInput = useRef(null)

	function login() {
		const email = emailInput.current.value
		const password = passwordInput.current.value
		console.log(email, password)
		fetch(LOGIN_URL)
	}

	return (
		<div>
			<h1>The Event App</h1>
			<div>
				<label htmlFor="email">Email:</label>
				<input ref={emailInput} name="email"></input>
			</div>
			<div>
				<label htmlFor="password">Password:</label>
				<input ref={passwordInput} name="password" type="password"></input>
			</div>
			<button onClick={login}>Login</button>
		</div>
	)
}

export default App
