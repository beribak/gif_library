import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchInput } from '../actions';

class SearchBar extends Component {

	handleChange = (event) => {
		this.props.fetchInput(event.target.value)
	}

	render() {

		return(	
			<div className="search_bar_container" id="search_bar_id">
				<input type="text" className="search_bar" value={this.props.inputValue} onChange={this.handleChange} />
			</div>				
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{ fetchInput },
		dispatch
	);
}

function mapStateToProps(state) {
	return {
		inputValue: state.inputValue
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);