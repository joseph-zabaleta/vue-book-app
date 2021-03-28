import Vue from 'vue';
import VueRouter from 'vue-router';
import vuetify from './plugins/vuetify.js';
import App from './App.vue';
import Search from './components/Search.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/search',
			component: Search,
		},
	],
});

new Vue({
	router,
	vuetify,
	render: (h) => h(App),
}).$mount('#app');
