import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import {
	AboutMe,
	AnotherProjects,
	Contacts,
	Footer,
	Header,
	Hero,
	Work,
} from './layouts';

const App = () => {
	return (
		<BrowserRouter>
			<div className="app">
				<div className="container">
					<Header />
					<Hero />
					<AboutMe />
					<Work />
					<AnotherProjects />
					<div>
						<Contacts />
					</div>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
};
export default App;
