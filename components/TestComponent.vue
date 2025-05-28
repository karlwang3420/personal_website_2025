<template>
	<div class="p-4 bg-gray-100 rounded-lg shadow-md">
		<h2 class="text-2xl font-bold mb-4">Test Component</h2>
		<p class="text-lg mb-2">This is a test paragraph with text-lg class.</p>
		<p class="text-3xl mb-2">This is a test paragraph with text-3xl class.</p>
		<div class="flex space-x-4 mt-4">
			<button
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
				Button 1
			</button>
			<button
				class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
				Button 2
			</button>
		</div>
	</div>
</template>

<style scoped>
	/* Using classes directly instead of @apply */
</style>
