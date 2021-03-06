// TODO: add and export your own actions
export function fetchInput(input) {
	return{
		type: 'FETCH_INPUT',
		payload: input
	};
}

export function fetchGifs(input) {
	const promise = fetch(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=CuBjwgU0RjWbsxzewisHRPN0YA3PU0bL&limit=25&rating=G`)
	.then(response => response.json());
	
	return{
		type: 'FETCH_GIFS',
		payload: promise
	};
}

export function fetchTrendingGifs() {
	const promise = fetch("https://api.giphy.com/v1/gifs/trending?api_key=CuBjwgU0RjWbsxzewisHRPN0YA3PU0bL&limit=40&rating=G")
	.then(response => response.json());
	
	return{
		type: 'FETCH_TRENDING_GIFS',
		payload: promise
	};
}

export function fetchSportsGifs() {
	const promise = fetch("https://api.giphy.com/v1/gifs/search?q=trending&api_key=CuBjwgU0RjWbsxzewisHRPN0YA3PU0bL&limit=25&rating=G")
	.then(response => response.json());
	
	return{
		type: 'FETCH_SPORTS_GIFS',
		payload: promise
	};
}