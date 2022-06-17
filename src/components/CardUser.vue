<template>
	<div>
		<div class="card-user d-flex justify-content-between align-items-center col-12 pr-3 pl-3 pt-3 pb-2 mb-3">
			<div class="d-flex">
				<img class="img-user mr-4 ml-3" :src="avatarUser">
				<div class="flex-column">
					<h6>{{ `#${id}` }}</h6>
					<b>{{ name }}</b>
					<p>{{ email }}</p>
				</div>
			</div>
			<div class="d-flex">
				<img class="icon m-1" src="@/assets/icons/i-edit.svg" alt="Editar">
				<img @click="handleDelete(id)" class="icon m-1" src="@/assets/icons/i-trash.svg" alt="Excluir">
				<img @click="handleShow(id)" class="icon m-1" src="@/assets/icons/i-show.svg" alt="Visualizar">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'card-user',
	props: {
		id: Number,
		name: String,
		email: String,
		avatarUser: String
	},
	methods: {
		handleDelete(id) {
			this.$emit('delete', id);
		},
		handleShow(id) {
			this.$emit('show', id);
		}
	}
}
</script>

<style>

</style>