<template>
	<v-app>
		<NavBar />
		<router-view></router-view>
		<Footer />
	</v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
	name: 'App',
	components: {
		NavBar,
		Footer,
	},
};
</script>

<style>
body {
	background-color: #9b9b9b;
}
#app {
	background-color: #9b9b9b;
	color: white;
	margin-bottom: 50px;
}
</style>
