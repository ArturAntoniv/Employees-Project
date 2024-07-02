import { Component } from 'react';

import './search-panel.css';


class SearchPanel extends Component {

	constructor(props) {
		super(props);
			this.state = {
				term: ''  //! Цей TERM піднімаю в APP.JS для пошуку
			}
		}

	onUpdateSearch = (e) => {
		const term = e.target.value; //! суди записуватимуться данні від користувача
		this.setState({term});
		this.props.onUpdateSearch(term) //! Передаю данні  вверх до APP.js
	}


	render() {
		return (
			<input 
				type="text" 
				className="form-control search-input"
				placeholder="Знайти співробітника"
				value={this.state.term}
				onChange={this.onUpdateSearch}
			/>
		);
	}
}


// const SearchPanel = () => {
// 	return (
// 		<input 
// 			type="text" 
// 			className="form-control search-input"
// 			placeholder="Знайти співробітника"/>
// 	);
// }

export default SearchPanel;