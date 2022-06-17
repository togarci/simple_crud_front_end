<template>
	<div>
		<div class="d-flex col-12 justify-content-center">
			<div class="flex-column container col-md-6 mt-5 pt-5 pb-5">
				<div class="row justify-content-between col-12 p-0 m-0">
					<h2>Usuário</h2>
					<button 
						v-if="createUserMode" 
						@click="createUserMode = false" 
						class="button-primary"
					>Novo usuário</button>
					
					<button 
						v-else
						@click="createUserMode = true" 
						class="button-second"
					>Cancelar</button>
				</div>
				
				<div v-if="!createUserMode" class="d-flex mt-5">
					<form-user/>
				</div>

				<div class="card-container flex-column mt-5">
					<card-user
						v-for="user in listUsers"
						:key="user.id"
						:id="user.id"
						:name="`${user.first_name} ${user.last_name}`"
						:email="user.email"
						:avatarUser="user.avatar"
						@delete="deleteUser"
						@show="showUser"
					/>
				</div>
				
				<div class="row justify-content-center">
					<per-page :totalPages="2" @page="getListUsers"/>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
import PerPage from '@/components/PerPage';
import CardUser from '@/components/CardUser.vue';
import FormUser from '@/components/FormUser.vue';

import { reqUserService } from '@/services/reqUserService';
const serviceReqUser = new reqUserService();

export default {
	name: 'home-page',
	components: {
		CardUser,
		PerPage,
		FormUser
	},
	data() {
		return {
			createUserMode: true,
			listUsers: [],
			totaPages: 0
		}
	},
	methods: {
		getListUsers(page) {
			let params = { page: page };
			serviceReqUser.getListUsers(params).then(response => {
				this.listUsers = response.data;
			}).catch(() => this.$toasted.show('Erro ao carregar dados').goAway(2500))
		},
		deleteUser(idUser) {
			serviceReqUser.deleteUser(idUser).then(() => {
				this.listUsers = this.listUsers.filter(elem => elem.id != idUser);
				this.$toasted.show('Sucesso ao deletar usuário').goAway(2500);
			}).catch(() => this.$toasted.show('Erro ao deletar usuario').goAway(2500));
		},
		showUser(idUser) {
			this.$router.push({ path: `/user/${idUser}`});
		}
	},
	mounted() {
		this.getListUsers(1);
	}
}
</script>

<style>

</style>