import Vue from 'vue';
import router from './js/router/index.js';
import store from './js/store/index.js';
import App from './components/pages/movie-app.vue';

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App),
});
