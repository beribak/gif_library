export default function(state="", action) {

	switch(action.type) {
		case 'FETCH_INPUT':
			return action.payload;
		default:
			return state;
	}
}