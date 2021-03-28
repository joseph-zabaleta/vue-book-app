<template>
	<div>
		<v-app-bar dark color="black">
			<v-toolbar-title>The Famous Book App</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-menu left bottom>
				<template v-slot:activator="{ on, attrs }">
					<v-btn icon v-bind="attrs" v-on="on">
						<v-app-bar-nav-icon></v-app-bar-nav-icon>
					</v-btn>
				</template>

				<v-list>
					<v-list-item
						v-for="(option, idx) in this.navOptions"
						:key="idx"
						@click="handleClick(option.path)"
					>
						<v-list-item-title>{{ option.name }}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
		</v-app-bar>
	</div>
</template>

<script>
export default {
	name: 'NavBar',
	data() {
		return {
			navOptions: [
				{ name: 'Search', path: '/search' },
				{ name: 'My Collection', path: '/' },
			],
		};
	},
	methods: {
		handleClick(path) {
			this.$router.push(path);
		},
	},
};
</script>

<style scoped></style>
