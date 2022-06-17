<template>
	<div>
		<div v-if="!select" class="flex-column v-input-container">
			<label :for="name">{{ label }}</label>
			<input 
				class="col-12"
				:id="name"
				:type="type"
				:name="name"
				:maxlength="maxlength"
				:placeholder="placeholder"
				:class="error ? 'error-input' : 'v-input'"
				:value="value"
				@input="updateValue"
			>
		</div>
		<div v-else class="flex-column v-input-container">
			<label>{{ label }}</label>
			<select 
				class="col-12"
				:id="name"
				:name="name"
				:placeholder="placeholder"
				:class="error ? 'error-input' : 'v-input'"
				:value="value"
				@input="updateValue"
			>
				<option :value="null" selected>{{ placeholder }}</option>
				<option 
					v-for="elem in listSelect"
					:key="elem.value"
					:value="elem.value"
				>{{ elem.label }}</option>
			</select>
		</div>
		<span v-if="error" class="error-label">{{ `O campo ${name} é obrigatório` }}</span>
	</div>
</template>

<script>
export default {
	name: 'v-input',
	props: {
		label: String,
		placeholder: String,
		name: String,
		maxlength: Number,
		value: [String, Number],
		select: {
			type: Boolean,
			default: false
		},
		type: {
			type: String,
			default: 'text'
		},
		listSelect: Array,
		error: String
	},
	computed: {
		listeners() {
			return {
				...this.$listeners,
				input: this.updateValue
			};
		},
	},
	methods: {
		updateValue(evt) {
			let value = evt.target.value;
			this.$emit('input', value);
		}
	}
}
</script>

<style>

</style>