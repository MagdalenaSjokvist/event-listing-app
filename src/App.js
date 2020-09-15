import React from "react"

function App() {
	function login() {
		console.log("login-funktionen körs")
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
