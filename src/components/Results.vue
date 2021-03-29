<template>
	<div>
		<Banner message="Search Results"></Banner>
		<div class="card-container">
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
					class="ma-5 img"
					width="200"
					height="250"
					:src="item.imgUrl"
				></v-img>

				<h3 class="font-weight-medium title">
					{{ item.title }}
				</h3>

				<h5 class="font-italic font-weight-regular author">
					{{ item.author }}
				</h5>
				<v-card-text class="desc">
					{{ item.desc.substr(0, 65) }}...
				</v-card-text>
				<v-btn
					class="mr-4 white--text font-weight-regular button"
					color="black"
					dark
					width="80%"
					@click="handleSelectBook(item)"
					>Select This Book</v-btn
				>
			</v-card>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Banner from './Banner.vue';

export default {
	name: 'Results',
	components: {
		Banner,
	},
	data() {
		return {
			items: [],
		};
	},
	computed: {
		...mapGetters(['getCurrentBooks']),
	},
	created() {
		this.items = this.getCurrentBooks.map((obj) => {
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
	methods: {
		...mapActions(['currentBook']),
		handleSelectBook() {
			// console.log('before', this.$store.state.books.selectedBook);
			// console.log('selected book:', book);
			// this.currentBook(book);
			// console.log('after', this.$store.state.books.selectedBook);
			console.log(this.getCurrentBooks);
		},
	},
};
</script>

<style scoped>
.card-container {
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

.title {
	color: white;
	text-align: center;
	max-width: 200px;
	text-shadow: 2px 1px 3px #000;
}

.desc {
	width: 90%;
	text-indent: 10px;
}

.button {
	margin: 20px;
}
</style>
