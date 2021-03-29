<template>
	<div>
		<div class="card-container">
			<v-card
				color="#d8d8d8"
				elevation="5"
				outlined
				width="300"
				max-height="550"
				class="card"
			>
				<div class="card-button">
					<v-btn x-large icon>
						<v-icon>mdi-close-circle</v-icon>
					</v-btn>
				</div>
				<v-img
					class="ma-5 img"
					width="150"
					height="200"
					:src="book.imgUrl"
				>
				</v-img>

				<h3 class="font-weight-medium title">
					{{ book.title }}
				</h3>

				<h5 class="font-italic font-weight-regular author">
					{{ book.author }}
				</h5>
				<v-card-text class="desc">
					{{ book.desc }}
				</v-card-text>
				<v-btn
					class="mr-4 white--text font-weight-regular button"
					color="black"
					dark
					width="80%"
					>Save to Collection</v-btn
				>
			</v-card>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	name: 'Details',
	data() {
		return {
			book: null,
		};
	},
	computed: {
		...mapGetters(['getSelectedBook']),
	},
	created() {
		this.book = this.getSelectedBook;
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

.card-button {
	width: 100%;
	height: 0px;
	padding-right: 5px;
	display: flex;
	justify-content: flex-end;
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
	background-color: lightgray;
	border-radius: 10px;
	width: 90%;
	height: 100px;
	overflow: scroll;
	text-indent: 10px;
}

.button {
	margin: 20px;
}
</style>
