import Vue from 'vue';
import Vuex, {Store} from 'vuex';
import movieStore from './movie-store.js';

Vue.use(Vuex);

export default new Store({
	modules: {
		movieStore,
	}
});
