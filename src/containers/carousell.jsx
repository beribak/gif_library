import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';

import { fetchInput } from '../actions';
// import Gif from './gif';

class Carousell extends Component {

	// handleChange = (event) => {
	// 	this.props.fetchInput(event.target.value)
	// }

	render() {

			return(
				<Carousel>
				  <Carousel.Item>
				    <img
				      className="d-block w-100"
				      src="https://media.giphy.com/media/LMuSfE0WEUZXbMwZfX/giphy.gif"
				      alt="First slide"
				    />
				    <Carousel.Caption>
				      <h3>First slide label</h3>
				      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				    </Carousel.Caption>
				  </Carousel.Item>
				</Carousel>
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
		inputValue: state.inputValue,
		gifList: state.gifList
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousell);