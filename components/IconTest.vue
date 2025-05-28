<template>
	<div class="p-4 bg-blue-100 rounded-lg">
		<h2 class="text-2xl mb-4">Font Awesome Icons Test</h2>
		<div class="flex space-x-4">
			<font-awesome-icon
				icon="fa-solid fa-home"
				class="text-3xl text-blue-500" />
			<font-awesome-icon
				icon="fa-solid fa-user"
				class="text-3xl text-green-500" />
			<font-awesome-icon
				icon="fa-solid fa-envelope"
				class="text-3xl text-red-500" />
			<font-awesome-icon
				:icon="['fab', 'js']"
				class="text-3xl text-yellow-500" />
		</div>
	</div>
</template>

<script setup>
	// No need for additional setup as FontAwesome is registered globally through the plugin
</script>
