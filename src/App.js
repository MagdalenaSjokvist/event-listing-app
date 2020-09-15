import React, { useRef, useState } from "react"
import { Route, Switch } from "react-router-dom"
import EventListPage from "./components/EventListPage"
import LoginPage from "./pages/LoginPage"

function App() {
	return (
		<div>
			<Switch>
				<Route path="/event-list">
					<EventListPage />
				</Route>
				<Route path="/">
					<LoginPage />
				</Route>
			</Switch>
		</div>
	)
}

export default App
