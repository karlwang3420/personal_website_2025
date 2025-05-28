<script setup lang="ts">
	const counter = ref(0);

	onBeforeMount(() => {
		counter.value = parseInt(localStorage.getItem("counter") ?? "0");
	});

	const increaseCounter = async () => {
		counter.value++;
		localStorage.setItem("counter", counter.value.toString());
	};
</script>

<template>
	<div class="my-2">
		<button class="w-30 btn-primary ml-2" @click="increaseCounter">
			{{ `Counter ${counter.toString().padStart(8, "0")}` }}
		</button>
	</div>
</template>
