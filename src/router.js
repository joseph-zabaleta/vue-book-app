import Vue from 'vue';
import VueRouter from 'vue-router';
import Search from './components/Search.vue';
import Results from './components/Results.vue';
import Details from './components/Details.vue';
import Collection from './components/Collection.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			name: 'home',
			path: '/',
			component: Collection,
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
		{
			name: 'details',
			path: '/details',
			component: Details,
		},
	],
});

export default router;
