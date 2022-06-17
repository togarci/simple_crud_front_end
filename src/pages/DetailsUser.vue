<template>
	<div class="d-flex details-user col-12 justify-content-center">
		<div v-if="usuario.id" class="flex-column container col-md-6 mt-5 pt-5 pb-5">
			<div class="row justify-content-between col-12 p-0 m-0">
				<h2>{{ `#${usuario.id}` }}</h2>
				<button
					@click="backRoute"
					class="button-second"
				>Voltar</button>
			</div>

			<div class="d-flex align-items-center mt-5">
				<img :src="usuario.avatar">
				<div class="m-4">
					<p>Primeiro nome</p>
					<b>{{ usuario.first_name }}</b>
				</div>
				<div class="m-4">
					<p>Último nome</p>
					<b>{{ usuario.last_name }}</b>
				</div>
			</div>

			<div class="flex-column mt-4">
				<div>
					<p>Endereço de e-mail</p>
					<b>{{ usuario.email }}</b>
				</div>
				<div class="mt-3">
					<p>Link do avatar</p>
					<b>{{ usuario.avatar }}</b>
				</div>
				<div class="mt-3">
					<p>Link de suporte</p>
					<b>{{ usuario.url }}</b>
				</div>
				<div class="mt-3">
					<p>Descrição do usuário</p>
					<b>{{ usuario.text }}</b>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
import { reqUserService } from '@/services/reqUserService';

const serviceReqUser = new reqUserService();
export default {
	data() {
		return {
			usuario: {
				id: null,
				first_name: null,
				last_name: null,
				email: null,
				avatar: null,
				url: null,
				text: null
			}
		}
	},
	methods: {
		getUser() {
			let idUser = this.$route.params.idUser;
			serviceReqUser.getUser(idUser).then(response => {
				this.usuario.id = response.data.id
				this.usuario.first_name = response.data.first_name
				this.usuario.last_name = response.data.last_name
				this.usuario.email = response.data.email
				this.usuario.avatar = response.data.avatar
				this.usuario.url = response.support.url
				this.usuario.text = response.support.text
			});
		},
		backRoute() {
			this.$router.push({ name: 'Home' });
		}
	},
	mounted() {
		this.getUser();
	}
}
</script>

<style>

</style>