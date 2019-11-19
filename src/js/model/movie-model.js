import BaseModel from './base-model.js';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = '9b73a71a362adf76daa580f964ab254e';

class MovieModel extends BaseModel {
	constructor () {
		super();
	}

	getUpcomingMovies() {
		const apiName = 'movie/upcoming';
		const method = 'GET';
		const url = this._getUrl(apiName);
		
		return this.query({url, method});
	}

	getAllMovieGenres() {
		const apiName = 'genre/movie/list';
		const method = 'GET';
		const url = this._getUrl(apiName);
		
		return this.query({url, method});
	}

	getImageConfig() {
		const apiName = 'configuration';
		const method = 'GET';
		const url = this._getUrl(apiName);

		return this.query({url, method});
	}

	_getUrl(apiName) {
		return `${apiUrl}/${apiName}?api_key=${apiKey}`;
	}
}

export default new MovieModel();
