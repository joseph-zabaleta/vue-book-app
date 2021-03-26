<template>
	<div>
		<v-app-bar dense dark color="black">
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
						@click="() => {}"
					>
						<v-list-item-title>{{ option }}</v-list-item-title>
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
			navOptions: ['Search', 'My Collection'],
		};
	},
};
</script>

<style scoped></style>
