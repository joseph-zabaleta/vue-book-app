<template>
	<div>
		<v-footer padless dark fixed>
			<v-col class="space" cols="12">
				<v-icon color="#4a4a4a" dark>mdi-circle</v-icon>
				<v-icon color="#4a4a4a" dark>mdi-circle</v-icon>

				<v-icon color="#4a4a4a" dark>mdi-circle</v-icon>
				<v-icon color="#4a4a4a" dark>mdi-circle</v-icon>
			</v-col>
		</v-footer>
	</div>
</template>

<script>
export default {
	name: 'Footer',
};
</script>

<style scoped>
.space {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
