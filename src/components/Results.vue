<template>
	<div>
		<v-card
			v-for="item in items"
			:key="item.id"
			color="#d8d8d8"
			elevation="5"
			outlined
			width="300"
			class="card"
		>
			<v-img
				class="ma-3 img"
				width="200"
				height="250"
				:src="item.imgUrl"
			></v-img>

			{{ item.title }}
			<v-spacer></v-spacer>
			{{ item.author }}
		</v-card>
	</div>
</template>

<script>
export default {
	name: 'Results',
	data() {
		return {
			items: [],
		};
	},
	created() {
		this.items = this.$store.state.books.dummyData.map((obj) => {
			const book = {};

			book.id = obj.id;
			book.title = obj.volumeInfo.title || 'No Title Found.';
			book.author = obj.volumeInfo.authors[0] || 'No Author Found.';
			book.desc = obj.volumeInfo.description || 'No Description Found.';
			book.imgUrl = obj.volumeInfo.imageLinks
				? obj.volumeInfo.imageLinks.thumbnail
				: '../../public/error.png';
			book.isbn =
				obj.volumeInfo.industryIdentifiers[0].identifier ||
				'No ISBN Found.';
			book.bookshelf = 'No Bookshelf Set';

			return book;
		});
	},
};
</script>

<style scoped>
div {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}

.card {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 25px 25px;
}

.img {
	border: 5px solid white;
	box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
		0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%) !important;
}
</style>
