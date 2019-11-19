import axios from 'axios';

class BaseModel {
	constructor () {}

	async query({url, method}) {
		try {
			const data = await axios({
				method,
				url,
			});
			return data;
		} catch (error) {
			throw error;
		}
	}
}

export default BaseModel;
