<template>
	<li 
		class="my-movies-item" 
		:style="{
			'background-image': `url(${computedBackDropPath})`
		}"
	>
		<div class="movie-desc">
			<div class="desc-header">
				<h2 class="movie-title">
					{{ title }}
				</h2>
				<span class="movie-release-date">
					{{ computedReleaseDate }}
				</span>
			</div>
			<div class="desc-body">
				<h3 class="body-title">
					Overview
				</h3>
				<p className="movie-overview">
					{{ overview }}
				</p>
			</div>
			<div class="desc-footer">
				<div class="footer-item">
					<h3 class="footer-title">
						Genres
					</h3>
					<span class="movie-genres">
						{{ genreNames.join(', ') }}
					</span>
				</div>
				<div class="footer-item">
					<h3 class="footer-title">
						Vote Avarage
					</h3>
					<span class="movie-vote-avarage">
						{{ voteAvarage }}
					</span>
				</div>
			</div>
			<div 
				class="remove-btn"
				@click="_removeMovieFromMyMovies"
			>
				X
			</div>
		</div>
	</li>
</template>

<script>
import {
	mapState,
	mapMutations,
} from 'vuex';
import { getReleaseDate } from '../../../js/helper/index.js';

export default {
	name: 'MyMoviesItem',
	props: {
		movieId: {
			type: Number,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		overview: {
			type: String,
			required: true,
		},
		voteAvarage: {
			type: Number,
			required: true,
		},
		releaseDate: {
			type: String,
			required: true,
		},
		genreNames: {
			type: Array,
			required: true,
		},
		backdropPath: {
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
		computedReleaseDate() {
			const [year, month, day] = this.releaseDate.split('-');
			return getReleaseDate({year, month, day});
		},
		computedBackDropPath() {
			const defaultSize = 'w780';
			const imageName = this.backdropPath;
			const url = this.imageConfig.secure_base_url;
			const backdropSize = this.imageConfig.backdrop_sizes.find(s => s === defaultSize);

			return `${url}${backdropSize}/${imageName}`;
		}
	},
	methods: {
		...mapMutations('movieStore', [
			'changeSelectedMovieIds',
		]),
		_removeMovieFromMyMovies() {
			const newSelectedMovieIds = this.selectedMovieIds.reduce((prev, curr) => {
				if (Number(curr) !== Number(this.movieId)) {
					prev.push(curr);
				}
				return prev;
			}, []);
			this.changeSelectedMovieIds(newSelectedMovieIds);
			this.$emit('open-feedback-toast', `Removed ${this.title} from my list`);
		},
	}
};
</script>

<style lang="less" scoped>
	.my-movies-item {
		display: flex;

		width: 780px;
		height: 439px;

		margin-bottom: 50px;

		.movie-desc {
			position: relative;

			display: flex;
			flex-direction: column;

			width: 100%;
			box-sizing: border-box;

			padding: 20px 100px 20px 20px;

			background-color: rgba(0, 0, 0, 0.5);

			color: white;

			.desc-header {
				height: 100px;

				.movie-title {
					font-size: 30px;

					margin-bottom: 5px;
				}
			}
			.desc-body {
				display: flex;
				flex-flow: column;

				height: 289px;

				.body-title {
					font-size: 20px;

					margin-bottom: 20px;
				}

				.movie-overview {
					font-size: 14px;
				}
			}
			.desc-footer {
				display: flex;

				height: 50px;
				
				.footer-item {
					display: flex;
					flex-flow: column;
					justify-content: flex-end;

					margin-right: 30px;

					.footer-title {
						font-size: 16px;
		
						margin-bottom: 5px;
					}
		
					.movie-vote-avarage {
						font-size: 12px;
					}
					
					.movie-genres {
						font-size: 12px;
					}
				}
			}

			.remove-btn {
				position: absolute;
				top: 0px;
				right: 0px;

				display: flex;
				align-items: center;
				justify-content: center;

				width: 30px;
				height: 30px;

				font-size: 30px;
				color: white;
				
				background-color: rgba(0, 0, 0, 0.7);
				
				cursor: pointer;
			}
		}
	}
</style>
