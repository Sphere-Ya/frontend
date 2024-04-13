import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { EventPage } from '../EventPage/EventPage';
import { UpcomingEvent } from '../UpcomingEvent/UpcomingEvent';
import Main from '../Main/Main';

function App() {

	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path='/event' element={<EventPage />} />
			<Route path='/upcomingevent' element={< UpcomingEvent />} />
		</Routes>
	);
}

export default App;
