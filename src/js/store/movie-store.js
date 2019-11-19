const movieStore = {
	namespaced: true,

	state: {
		isDataLoaded: false,
		selectedMovieIds: sessionStorage.getItem('selectedMovieIds') ? sessionStorage.getItem('selectedMovieIds').split(',').map(v => Number(v)) : [],
	},

	mutations: {
		changeIsDataLoaded(state, newValue) {
			state.isDataLoaded = newValue;
		},
		changeSelectedMovieIds(state, newValue) {
			state.selectedMovieIds = newValue;
			sessionStorage.setItem('selectedMovieIds', newValue);
		}
	},
};

export default movieStore;
