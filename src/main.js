import Vue from 'vue';
import VueRouter from 'vue-router';
import vuetify from './plugins/vuetify.js';
import App from './App.vue';
import Search from './components/Search.vue';
import store from './store';

Vue.config.productionTip = false;
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

new Vue({
	router,
	store,
	vuetify,
	render: (h) => h(App),
}).$mount('#app');
