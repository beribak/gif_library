export default function(state="Danko", action) {

	switch(action.type) {
		case 'FETCH_INPUT':
			return action.payload;
		default:
			return state;
	}
}