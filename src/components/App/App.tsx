import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { EventPage } from '../EventPage/EventPage';

import Main from '../Main/Main';
import Header from '../Header/Header';

function App() {

	return (
		<Routes>
			<Route
				index
				element={
					<Main>
						<Header></Header>
					</Main>
				}
			/>
			<Route path='/event' element={<EventPage />} />
		</Routes>
	);
}

export default App;
