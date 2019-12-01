import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';

import { fetchInput } from '../actions';
import { fetchTrendingGifs } from '../actions';
// import Gif from './gif';

class Carousell extends Component {
	
	componentDidMount() {
		this.props.fetchTrendingGifs();
	}

	render() {
			if(this.props.trendingGifs) {
				const trendingGifs = this.props.trendingGifs.data; 
				return(
				<Carousel className="carousel">
				 {trendingGifs.map( gif => 
					  	<Carousel.Item>
				    		<img
					      	className="gifImg"
					      	src={`https://media.giphy.com/media/${gif.id}/giphy.gif`}
					      	alt="First slide"
					    	/>    
					  	</Carousel.Item>
					  	
					)}
				</Carousel>
				);
			} else {
				return(
					<h2>Loading</h2>
				);
			}	
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