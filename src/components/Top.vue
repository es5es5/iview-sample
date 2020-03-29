<template>
	<div id="top">
		<div class="top_inner">
			<router-link tag="h1" to="/">FCWorld ERP Web Preview</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Top'
}
</script>

<style lang="scss" scoped>
#top {
	min-height: 1rem;
	padding: 1rem 0;
	background-color: #505f78;
}
.top_inner {
	width: 90%;
	max-width: 1440px;
	margin: 0 auto;

	h1 {
		cursor: pointer;
		color: #fef;
	}
}
</style>
