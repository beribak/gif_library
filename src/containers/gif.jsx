import React from 'react';

const Gif = (props) => {
  
  
     // const src = "https://media.giphy.com/media/LMuSfE0WEUZXbMwZfX/giphy.gif";
    	
    	return(
	    	<div className="">
	     		<img src={`https://media.giphy.com/media/${props.id}/giphy.gif`} className="gif" />
	    	</div>
    	);

  
};

export default Gif;