import React from 'react';
import {BrowserRouter} from 'react-router-dom';
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
		</BrowserRouter>
	);
};
export default App;
