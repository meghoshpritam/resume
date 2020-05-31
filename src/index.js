import { Component } from 'preact';
import Main from './components/Main';
import Skills from './components/Skills';
import './style.scss';
import Section from './components/Section';

export default class App extends Component {
	render() {
		return (
			<div id="App">
				<link
					href="https://fonts.googleapis.com/icon?family=Material+Icons"
					rel="stylesheet"
				/>
				<Main />
				<Section id="skills" heading="Skills">
					<Skills />
				</Section>
			</div>
		);
	}
}
