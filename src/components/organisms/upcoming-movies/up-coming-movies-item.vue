<template>
	<li class="upcoming-movies-item">
		<div class="movie-poster">
			<img class="poster" :src="computedPosterImagePath">
			<div 
				class="add-btn"
				@click="_addMovieToMyMovies"
			>
				+
			</div>
		</div>
	</li>
</template>

<script>
import {
	mapState,
	mapMutations,
} from 'vuex';

export default {
	name: 'UpComingMoviesItem',
	props: {
		movieId: {
			type: Number,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		posterPath: {
			type: String,
			required: true,
		},
		imageConfig: {
			type: Object,
			required: true,
		}
	},
	computed: {
		...mapState('movieStore', [
			'selectedMovieIds',
		]),

		computedPosterImagePath() {
			const defaultSize = 'w185';
			const imageName = this.posterPath;
			const url = this.imageConfig.secure_base_url;
			const posterSize = this.imageConfig.poster_sizes.find(s => s === defaultSize);

			return `${url}${posterSize}/${imageName}`;
		},
	},
	methods: {
		...mapMutations('movieStore', [
			'changeSelectedMovieIds',
		]),

		_addMovieToMyMovies() {
			const duplicatedMovie = this.selectedMovieIds.find(id => Number(id) === Number(this.movieId));

			if (!duplicatedMovie) {
				const newValue = [...this.selectedMovieIds];
				newValue.push(this.movieId);
				this.changeSelectedMovieIds(newValue);
				this.$emit('open-feedback-toast', `Added ${this.title} to my list`);
			}
		},
	}
};
</script>

<style lang="less" scoped>
	.upcoming-movies-item {
		display: flex;
		flex-direction: column;
		justify-content: center;

		margin: 0px 10px 50px 10px;

		cursor: pointer;

		&:hover {
			.movie-poster {
				transform: scale(1.3);
				transition: transform 0.3s ease 0.5s;

				z-index: 1;

				.add-btn {
					transform: scale(1);

					transition: transform 0.2s ease 0.5s;
				}
			}

			.movie-desc {
				height: 200px;
			
				opacity: 1;
			}
		}
		.movie-poster {
			position: relative;

			transition: transform 0.3s ease;

			.add-btn {
				position: absolute;
				top: 0px;
				right: 0px;

				display: flex;
				align-items: center;
				justify-content: center;

				width: 30px;
				height: 30px;

				transform: scale(0);

				font-size: 30px;
				color: white;
				
				background-color: rgba(0, 0, 0, 0.7);

				transition: transform 0.2s ease;
				
				cursor: pointer;
			}
		}
		
		.movie-desc {
			position: absolute; 
			top: 0;
			left: 0;

			display: none;
			flex-direction: column;

			width: 400px;
			height: 0px;

			background-color: rgba(0, 0, 0, 0.7);
			
			opacity: 0;

			transition: opacity 0.3s ease, height 0.3s ease;

			z-index: 1;
		}
	}
</style>
