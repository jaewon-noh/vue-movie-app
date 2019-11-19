<template>
	<div id="app" class="movie-app">
		<common-header />
		<router-view class="movie-page-view" />
	</div>
</template>

<script>
import CommonHeader from '../templates/common/common-header.vue';

export default {
	name: 'MovieApp',
	components: {
		CommonHeader,
	},
};
</script>
