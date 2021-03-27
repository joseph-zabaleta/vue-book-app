<template>
	<div>
		<Banner :message="'Search by Title or Author'"></Banner>
		<div class="form-wrapper">
			<v-form ref="form" v-model="valid" lazy-validation>
				<br />
				<v-text-field
					v-model="input"
					:rules="inputRules"
					label="Enter a Title or Author"
					solo
					required
					hide-details="auto"
					clearable
				></v-text-field>

				<br />

				<v-radio-group class="ma-0 pa-0" hide-details="auto" mandatory>
					<v-radio
						class="input-style"
						label="Title"
						value="title"
						@change="updateRadio('title')"
					></v-radio>
					<br />

					<v-radio
						class="input-style"
						label="Author"
						value="author"
						@change="updateRadio('author')"
					></v-radio>
				</v-radio-group>
				<br />
				<v-btn
					block
					:disabled="!valid"
					color="black"
					class="mr-4 white--text"
					@click="validate"
				>
					Search The Google API
				</v-btn>
			</v-form>
		</div>
	</div>
</template>

<script>
import Banner from './Banner.vue';

export default {
	name: 'Search',
	data() {
		return {
			valid: true,
			input: '',
			selectedRadio: 'title',
			inputRules: [(value) => !!value || 'Title or Author is required'],
		};
	},
	methods: {
		validate() {
			this.$refs.form.validate();

			const query = {
				input: this.input,
				type: this.selectedRadio,
			};

			console.log(query);
		},
		updateRadio(value) {
			this.selectedRadio = value;
		},
	},
	components: {
		Banner,
	},
};
</script>

<style scoped>
.input-style {
	background-color: #d8d8d8;
	padding: 10px;
	margin: 0;
	min-height: 48px;
	border-radius: 5px;
	display: flex;
	box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
		0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
}

.v-input--radio-group--column .v-radio:not(:last-child):not(:only-child) {
	margin: 0;
}

form {
	width: 75%;
}

.form-wrapper {
	display: flex;
	height: 100%;
	justify-content: center;
}
</style>
