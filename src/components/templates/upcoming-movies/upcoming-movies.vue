<template>
	<div class="upcoming-movies">
		<h1 class="title">
			Upcoming movies
		</h1>
		<ol class="list">
			<template v-if="isDataLoaded">
				<up-coming-movies-item 
					v-for="movie in movies"
					:key="movie.id"
					:movie-id="movie.id"
					:title="movie.title"
					:poster-path="movie.poster_path"
					:image-config="imageConfig"
					@open-feedback-toast="_openFeedbackToast"
				/>
			</template>
		</ol>
		<feedback-toast 
			ref="feedbackToast"
			:message="feedbackMessage"
		/>
	</div>
</template>

<script>
import {
	mapState,
	mapMutations,
} from 'vuex';
import UpComingMoviesItem from '../../organisms/upcoming-movies/up-coming-movies-item.vue';
import FeedbackToast from '../../molecules/feedback-toast/feedback-toast.vue';

export default {
	name: 'UpcomingMovies',
	components: {
		UpComingMoviesItem,
		FeedbackToast,
	},
	props: {
		movies: {
			type: Array,
			required: true,
		},
		genres: {
			type: Array,
			required: true,
		},
		imageConfig: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			feedbackMessage: ''
		};
	},
	computed: {
		...mapState('movieStore', [
			'isDataLoaded',
		]),
	},
	watch: {
		isDataLoaded() {
			this.changeIsDataLoaded(true);
		},
	},
	methods: {
		...mapMutations('movieStore', [
			'changeIsDataLoaded'
		]),
		
		_openFeedbackToast(e) {
			this.feedbackMessage = e;
			this.$refs.feedbackToast.open();
		}
	}
};
</script>

<style lang="less" scoped>
	.upcoming-movies {
		padding: 20px;

		.title {
			font-size: 30px;
			color: white;
		}
		
		.list {
			position: relative;
			display: flex;
			flex-flow: row wrap;
			
			width: 100%;
			
			margin-top: 20px;
		}
	}
</style>
