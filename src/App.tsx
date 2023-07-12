import { BrowserRouter } from 'react-router-dom';
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

function App() {
	return (
		<BrowserRouter>
			<div className='app'>
				<Header />
				<Hero />
				<AboutMe />
				<Work />
				<AnotherProjects />
				<div>
					<Contacts />
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}
export default App;
