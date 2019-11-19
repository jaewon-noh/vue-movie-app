<template>
	<div class="my-movies">
		<h1 class="title">
			My Movies
		</h1>
		<ol class="list">
			<template v-if="isDataLoaded">
				<my-movies-item
					v-for="movie in sortedMyMovies"
					:key="movie.id"
					:movie-id="movie.id"
					:title="movie.title"
					:poster-path="movie.poster_path"
					:backdrop-path="movie.backdrop_path"
					:vote-avarage="movie.vote_average"
					:release-date="movie.release_date"
					:overview="movie.overview"
					:genre-names="movie.genreNames"
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
import MyMoviesItem from '../../organisms/my-movies/my-movies-item.vue';
import FeedbackToast from '../../molecules/feedback-toast/feedback-toast.vue';

export default {
	name: 'MyMovies',
	components: {
		MyMoviesItem,
		FeedbackToast
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
			'selectedMovieIds',
		]),
		sortedMyMovies() {
			const movieDatas = this.selectedMovieIds.map(id => {
				const selectedMovie = this.movies.find(movie => Number(movie.id) === Number(id));
				const genreNames = selectedMovie.genre_ids.map(genreId => {
					const { name } = this.genres.find(genre => genre.id === genreId);
					return name;
				});
				return {
					...selectedMovie,
					genreNames,
				};
			});
			movieDatas.sort((a, b) => {
				const dateA = new Date(a.release_date);
				const dateB = new Date(b.release_date);
				if (dateA < dateB) return -1;
				if (dateA > dateB) return 1;
			});
			return movieDatas;
		}
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
	.my-movies {
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
