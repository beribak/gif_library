export default function(state=null, action) {
	switch(action.type) {
		case 'FETCH_TRENDING_GIFS':
			return action.payload;
		default:
			return state;
	}
}