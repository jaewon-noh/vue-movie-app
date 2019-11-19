const movieStore = {
	namespaced: true,

	state: {
		selectedMovieIds: sessionStorage.getItem('selectedMovieIds') ? sessionStorage.getItem('selectedMovieIds').split(',').map(v => Number(v)) : [],
	},

	mutations: {
		changeSelectedMovieIds (state, newValue) {
			state.selectedMovieIds = newValue;
			sessionStorage.setItem('selectedMovieIds', newValue);
		}
	},
};

export default movieStore;
