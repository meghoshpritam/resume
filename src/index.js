import { Component } from 'preact';
import Main from './components/Main';
import './style.scss';

export default class App extends Component {
	render() {
		return (
			<div id="App">
				<link
					href="https://fonts.googleapis.com/icon?family=Material+Icons"
					rel="stylesheet"
				></link>
				<Main />
			</div>
		);
	}
}