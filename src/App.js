import React, { useRef, useState } from "react"
import { Route, Switch } from "react-router-dom"
import { UserContext } from "./contexts/UserContext"
import EventListPage from "./pages/EventListPage"
import LoginPage from "./pages/LoginPage"

function App() {
	const [token, setToken] = useState(null)

	return (
		<div>
			<UserContext.Provider value={{ token, setToken }}>
				<Switch>
					<Route path="/event-list">
						<EventListPage />
					</Route>
					<Route path="/">
						<LoginPage />
					</Route>
				</Switch>
			</UserContext.Provider>
		</div>
	)
}

export default App
