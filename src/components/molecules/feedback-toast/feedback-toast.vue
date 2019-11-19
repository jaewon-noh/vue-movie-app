<template>
	<div 
		class="feedback-toast"
		:class="{
			'show': isOpen
		}"
	>
		{{ message }}
	</div>
</template>

<script>

export default {
	name: 'FeedbackToast',
	props: {
		message: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			isOpen: false,
			lifespan: 3000,
		};
	},
	methods: {
		open() {
			this.isOpen = true;
			setTimeout(() => {
				this._close();
			}, this.lifespan);
		},
		_close() {
			this.isOpen = false;
		}
	}
};
</script>

<style lang="less" scoped>
	.feedback-toast {
		position: fixed;
		top: 50%;
		left: 50%;

		visibility: hidden;

		transform: translate(-50%);

		padding: 20px;

		font-size: 20px;
		color: white;

		background-color: rgba(0, 0, 0, 0.8);

		border-radius: 5px;

		z-index: 10;

		opacity: 0;

		transition: opacity 0.2s ease;

		&.show {
			visibility: visible;

			opacity: 1;
		}
	}
</style>
