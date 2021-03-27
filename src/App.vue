<template>
	<v-app>
		<NavBar />
		<Search />
		<Footer />
	</v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Search from './components/Search.vue';
import Footer from './components/Footer.vue';

export default {
	name: 'App',
	components: {
		NavBar,
		Search,
		Footer,
	},
};
</script>

<style>
#app {
	background-color: #9b9b9b;
	color: white;
}
</style>
