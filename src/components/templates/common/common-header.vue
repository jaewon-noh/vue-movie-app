<template>
	<header class="common-header">
		<nav class="header-nav">
			<ul class="page-list">
				<li class="list-item">
					<router-link class="link" to="/">
						Upcoming Movies
					</router-link>
				</li>
				<li class="list-item">
					<router-link class="link" to="/my">
						My Movies
					</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>

export default {
	name: 'CommonHeader',
};
</script>

<style lang="less" scoped>
	.common-header {
		height: 50px;

		.header-nav {
			height: 100%;

			.page-list {
				display: flex;
				align-items: center;

				height: 100%;
				
				.list-item {
					display: flex;
					align-items: center;

					width: 120px;

					margin-left: 20px;

					.link {
						color: white;
						font-size: 14px;
						text-decoration: none;

						transition: color 0.3s ease;

						cursor: pointer;

						&:hover {
							color: #999;
						}
					}
				}
			}
		}
	}
</style>
