import Vue from 'vue';
import VueRouter from 'vue-router';
import UpcomingMovies from '../../components/templates/upcoming-movies/upcoming-movies.vue';
import MyMovies from '../../components/templates/my-movies/my-movies.vue';

const routes = [
	{
		path: '/',
		component: UpcomingMovies
	},
	{
		path: '/my',
		component: MyMovies
	},
	{
		path: '*',
		component: { template: '<div>404 Not Found</div>'}
	},
];
const router = new VueRouter({
	mode: 'history',
	routes
});

Vue.use(VueRouter);
	
export default router;
