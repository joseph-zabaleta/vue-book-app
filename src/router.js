import Vue from 'vue';
import VueRouter from 'vue-router';
import Search from './components/Search.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			name: 'search',
			path: '/search',
			component: Search,
		},
		{
			name: 'home',
			path: '/',
		},
	],
});

export default router;
