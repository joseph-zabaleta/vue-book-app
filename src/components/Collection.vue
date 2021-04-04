<template>
	<div>
		<div class="banner">
			<span>{{ collectionCount }} </span> Saved Books!
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'Collection',
	computed: {
		collectionCount() {
			return this.getCollection().length;
		},
	},
	methods: {
		...mapGetters(['getCollection']),
	},
};
</script>

<style scoped>
.banner {
	background-color: #4a4a4a;
	height: 48px;
	display: flex;
	justify-content: center;
	align-items: center;
}

span {
	background-color: #d8d8d8;
	text-align: center;
	border: 1px solid #8a8a8a;
	border-radius: 50%;
	width: 25px;
	height: 25px;
	margin: 5px;
	color: #4a4a4a;
}
</style>
