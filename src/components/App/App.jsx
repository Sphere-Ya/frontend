import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { EventPage } from '../EventPage/EventPage';
import { UpcomingEvent } from '../UpcomingEvent/UpcomingEvent';
import { UserPage } from '../UserPage/UserPage'
import Main from '../Main/Main';

function App() {

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path='/event' element={<EventPage />} />
				<Route path='/upcomingevent' element={<UpcomingEvent />} />
				<Route path='/user' element={<UserPage />} />
			</Routes>
		</div>
	);
}

export default App;
