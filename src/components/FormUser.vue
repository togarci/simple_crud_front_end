<template>
	<div class="flex-column p-0 col-12">
		<div>
			<v-input
				:label="'Nome de usuário'"
				:name="lblNameInput.name"
				:placeholder="'Entre com o nome'"
				:maxlength="50"
				:error="getError(errors, lblNameInput.name)"
                v-validate="{ required: true }"
				v-model="name"
			/>
		</div>
		<div class="mt-4">
			<v-input
				:label="'Função do usuário'"
				:name="lblNameInput.job"
				:placeholder="'Selecione a função'"
				:select="true"
				:listSelect="listFuncoes"
				:error="getError(errors, lblNameInput.job)"
                v-validate="{ required: true }"
				v-model="job"
			/>
		</div>
		<div class="mt-4">
			<button @click="saveUser" class="button-primary col-12">
				Salvar dados do usuário
			</button>
		</div>
	</div>
</template>

<script>
import vInput from './vInput.vue';
import { reqUserService } from '@/services/reqUserService';

const serviceReqUser = new reqUserService();
export default {
	name: 'form-user',
	components: {
		vInput
	},
	computed: {
		id: {
			get() {
				return this.$store.state.formUserData.id;
			},
			set(value) {
				this.$store.commit('setFormUserData', { key: 'id', value: value });
			}
		},
		name: {
			get() {
				return this.$store.state.formUserData.name;
			},
			set(value) {
				this.$store.commit('setFormUserData', { key: 'name', value: value });
			}
		},
		job: {
			get() {
				return this.$store.state.formUserData.job;
			},
			set(value) {
				this.$store.commit('setFormUserData', { key: 'job', value: value });
			}
		}
	},
	data() {
		return {
			listFuncoes: [
				{
					label: 'Desenvolvedor',
					value: 'Desenvolvedor'
				},
				{
					label: 'Gerente de Projetos',
					value: 'Gerente de Projetos'
				},
				{
					label: 'Tech Lead',
					value: 'Tech Lead'
				},
				{
					label: 'UI/UX Designer',
					value: 'UI/UX Designer'
				},
			],
			lblNameInput: {
				name: 'nome',
				job: 'funcao'
			}
		}
	},
	methods: {
		saveUser() {
			this.$validator.validateAll().then(isValid => {
				if (isValid) {
					let data = {
						'name': this.name,
						'job': this.job
					}

					if (this.id) {
						serviceReqUser.putUser(this.id, data).then(() => {
							this.successRequest();
						})
					} else {
						serviceReqUser.postUser(data).then(() => {
							this.successRequest();
						}).catch(() => this.$toasted.show('Erro ao carregar dados').goAway(2500));
					}
				}
			});
		},
		getError(error, fieldName) {
			return error.first(fieldName);
		},
		successRequest() {
			this.id = null;
			this.name = null;
			this.job = null;
			this.$validator.reset();
			this.$toasted.show('Sucesso ao salvar usuário').goAway(2500);
		}
	}
}
</script>

<style>

</style>