<template>
	<div class="col-auto d-flex" v-if="totalPages">
		<div 
			v-for="_, index in Array(totalPages).fill(0)" 
			:key="index" 
			:class="index === page ? 'per-page active' : 'per-page'"
			@click="setPage(index)"
		>{{ index + 1 }}</div>
	</div>
</template>

<script>
export default {
	name: 'per-page',
	props: {
		totalPages: Number
	},
	data() {
		return {
			page: 0
		}
	},
	methods: {
		setPage(idx) {
			let listPerPage = document.querySelectorAll('.per-page');
			listPerPage.forEach((elem, index) => {
				index == idx
				? elem.className = 'per-page active'
				: elem.className = 'per-page';
			});

			this.$emit('page', idx + 1);
		}
	}
}
</script>

<style>

</style>