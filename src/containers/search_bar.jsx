import React, { Component } from 'react';

class SearchBar extends Component {

	render() {

		return(	
			<div className="search_bar_container" id="search_bar_id">
				<input type="text" className="search_bar" />
			</div>				
		);
	}
}

export default SearchBar;