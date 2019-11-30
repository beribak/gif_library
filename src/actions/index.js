// TODO: add and export your own actions
export function fetchInput(input) {
	return{
		type: 'FETCH_INPUT',
		payload: input
	};
}