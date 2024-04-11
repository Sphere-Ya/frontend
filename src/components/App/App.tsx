import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { EventPage } from '../EventPage/EventPage';
import Main from '../Main/Main';

function App() {

	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path='/event' element={<EventPage />} />
		</Routes>
	);
}

export default App;