<template>
	<div id="app">
		<zoom-center-transition :duration="200" mode="out-in">
			<router-view/>
		</zoom-center-transition>
	</div>
</template>

<script>
import { ZoomCenterTransition } from 'vue2-transitions';

export default {
	name: 'App',
	components: {
		ZoomCenterTransition
	}
}
</script>

<style>
</style>
