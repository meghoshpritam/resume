import { Component } from 'preact';
import Main from './components/Main';
import Skills from './components/Skills';
import './style.scss';
import Section from './components/Section';
import Footer from './components/Footer';

export default class App extends Component {
	render() {
		return (
			<div id="App">
				<link
					href="https://cdn.materialdesignicons.com/5.3.45/css/materialdesignicons.min.css"
					rel="stylesheet"
				/>
				<Main />
				<Section id="skills" heading="Skills">
					<Skills />
				</Section>
				<Footer />
			</div>
		);
	}
}
