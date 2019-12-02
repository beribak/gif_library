import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchInput } from '../actions';
import { fetchGifs } from '../actions';
import { fetchSportsGifs } from '../actions';

class SearchBar extends Component {

	handleChange = (event) => {
		this.props.fetchInput(event.target.value);
		this.props.fetchGifs(event.target.value);
	}

	handleClick = (event) => {
		this.props.fetchSportsGifs();	
	}

	render() {

		return(	
			<div className="search_bar_container" id="search_bar_id">
				<div className="navigation">
					<h4>GIF Library</h4>
					<div className="left">
						<div className="btn btn-sm btn-outline-primary button" onClick={this.handleClick} >Sports</div>
						<div className="btn btn-sm btn-outline-info button">Cats</div>
					</div>
				</div>
				<div className="bar_container">
					<i class="fas fa-search search"></i>
					<input type="text" className="search_bar" value={this.props.inputValue} onChange={this.handleChange} />
				</div>
			</div>				
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{ fetchInput, fetchGifs, fetchSportsGifs },
		dispatch
	);
}

function mapStateToProps(state) {
	return {
		inputValue: state.inputValue
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);