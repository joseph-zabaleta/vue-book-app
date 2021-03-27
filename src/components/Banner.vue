<template>
	<div>{{ message }}</div>
</template>

<script>
export default {
	name: 'Banner',
	props: {
		message: String,
	},
};
</script>

<style scoped>
div {
	background-color: #4a4a4a;
	height: 48px;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
