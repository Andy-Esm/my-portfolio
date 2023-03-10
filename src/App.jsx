import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {AboutMe, AnotherProjects, Contacts, Header, Hero, Work} from './layouts';

const App = () => {
	return (
		<BrowserRouter>
			<div className="container">
				<Header />
				<Hero />
				<AboutMe />
				<Work />
				<AnotherProjects />
				<div className="relative z-0">
					<Contacts />
				</div>
			</div>
		</BrowserRouter>
	);
};
export default App;
