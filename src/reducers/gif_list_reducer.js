export default function(state=null, action) {
	switch(action.type) {
		case 'FETCH_GIFS':
			return action.payload;
		case 'FETCH_SPORTS_GIFS':
			return action.payload;
		default:
			return state;
	}
}