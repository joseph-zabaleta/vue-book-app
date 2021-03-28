import Vue from 'vue';
import VueRouter from 'vue-router';
import Search from './components/Search.vue';
import Results from './components/Results.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			name: 'home',
			path: '/',
		},
		{
			name: 'search',
			path: '/search',
			component: Search,
		},
		{
			name: 'results',
			path: '/results',
			component: Results,
		},
	],
});

export default router;
