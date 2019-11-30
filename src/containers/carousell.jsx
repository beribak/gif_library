import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';

import { fetchInput } from '../actions';
import { fetchTrendingGifs } from '../actions';
// import Gif from './gif';

class Carousell extends Component {
	
	componentWillMount() {
		this.props.fetchTrendingGifs();
	}

	render() {

			return(
				<Carousel className="carousel">
					{ this.props.trendingGifs.data.map( gif => 
				  	<Carousel.Item>
			    		<img
				      	className="gifImg"
				      	src={`https://media.giphy.com/media/${gif.id}/giphy.gif`}
				      	alt="First slide"
				    	/>    
				  	</Carousel.Item>
				  	)
				  	}
				</Carousel>
			);	
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{ fetchInput, fetchTrendingGifs },
		dispatch
	);
}

function mapStateToProps(state) {
	return {
		inputValue: state.inputValue,
		gifList: state.gifList,
		trendingGifs: state.trendingGifs
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousell);