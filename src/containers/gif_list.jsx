import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchInput } from '../actions';
import Gif from './gif';

class GifList extends Component {

	handleChange = (event) => {
		this.props.fetchInput(event.target.value)
	}

	render() {

		return(	
			<div className="gif_list_container" id="gif_list_id">
				
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

export default connect(mapStateToProps, mapDispatchToProps)(GifList);