import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "../contexts/UserContext"

const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/"
const EVENT_LIST_URL = `${ROOT_URL}events/events/`

export default function EventListPage() {
	//Hämta {token} från useContext
	const { token } = useContext(UserContext)
	const [eventList, setEventList] = useState(null)

	useEffect(() => {
		fetchEventList()
	}, [])

	function fetchEventList() {
		fetch(EVENT_LIST_URL, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		})
			//Sätt responsen till state-variabeln eventList med hjälp av setEventList
			.then((res) => res.json())
			.then((data) => {
				setEventList(data.results)
			})
	}

	return (
		<div>
			<h1>Event List Page</h1>
			{/* Om det finns något i eventList - mappa igenom och rendera ut varje event */}
			{eventList &&
				eventList.map((eventItem) => {
					return (
						<div key={eventItem.id}>
							<p>{eventItem.title}</p>
						</div>
					)
				})}
		</div>
	)
}
