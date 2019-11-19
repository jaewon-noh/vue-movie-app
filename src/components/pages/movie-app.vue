<template>
	<div id="app" class="movie-app">
		<common-header />
		<router-view 
			class="movie-page-view" 
			name="UpcomingMovies"
			:movies="movies"
			:genres="genres"
			:image-config="imageConfig"
		/>
		<router-view 
			class="movie-page-view" 
			name="MyMovies" 
			:movies="movies"
			:genres="genres"
			:image-config="imageConfig"
		/>
	</div>
</template>

<script>
import {
	mapMutations,
} from 'vuex';
import CommonHeader from '../templates/common/common-header.vue';
import MovieModel from '../../js/model/movie-model.js';

export default {
	name: 'MovieApp',
	components: {
		CommonHeader,
	},
	data() {
		return {
			movies: [],
			genres: [],
			imageConfig: {},
		};
	},
	mounted() {
		this._getAllDatas();
	},
	methods: {
		...mapMutations('movieStore', [
			'changeIsDataLoaded',
		]),
		async _getAllDatas() {
			const [movies, genres, imageConfig] = await Promise.all([
				this._getUpcomingMovies(),
				this._getAllMovieGenres(),
				this._getImageConfig(),
			]);
			
			this.movies = movies;
			this.genres = genres;
			this.imageConfig = imageConfig;
			this.changeIsDataLoaded(true);
		},

		async _getUpcomingMovies() {
			const { 
				data: {
					results
				}
			} = await MovieModel.getUpcomingMovies();

			return results;
		},

		async _getAllMovieGenres() {
			const { 
				data: { 
					genres 
				} 
			} = await MovieModel.getAllMovieGenres();
			
			return genres;
		},

		async _getImageConfig() {
			const { 
				data: {
					images
				}
			} = await MovieModel.getImageConfig();
			
			return images;
		}
	},
};
</script>
