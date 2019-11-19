<template>
	<div class="upcoming-movies">
		<h1 class="title">
			Upcoming movies
		</h1>
		<ol class="list">
			<up-coming-movie-item 
				v-for="movie in movies"
				:key="movie.id"
				:movie-id="movie.id"
				:title="movie.title"
				:poster-path="movie.poster_path"
				:image-config="imageConfig"
			/>
		</ol>
	</div>
</template>

<script>
import UpComingMovieItem from '../../organisms/upcoming-movies/up-coming-movie-item.vue';

export default {
	name: 'UpcomingMovies',
	components: {
		UpComingMovieItem,
	},
	props: {
		movies: {
			type: Array,
			default() {
				return [];
			}
		},
		genres: {
			type: Array,
			default() {
				return [];
			}
		},
		imageConfig: {
			type: Object,
			default() {
				return {};
			}
		},
	},
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
