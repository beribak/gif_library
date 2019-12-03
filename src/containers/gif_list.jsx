import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchInput } from '../actions';
// import Carousell from './carousell';
import Gif from './gif';

class GifList extends Component {
	
	render() {

		if(this.props.gifList === null) {
			return(
				<h2 className="waiting"> </h2>
				// <Carousell />
			);
		} else {
			return(	
				<div className="gif_list_container" id="gif_list_id">
					<div>
						{this.props.gifList.data.map((gif, index) => {
								if (index % 2 === 0 ){
									return <Gif id={gif.id} key={gif.id} />
								}
							})
						}
					</div>
					<div className="">
						{this.props.gifList.data.map((gif, index) => {
								if (index % 2 !== 0 ){
									return <Gif id={gif.id} key={gif.id} />
								}
							})
						}
					</div>	
				</div>				
			);
		}	
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

export default connect(mapStateToProps, mapDispatchToProps)(GifList);