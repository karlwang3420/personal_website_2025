<script setup lang="ts">
	import PercentageCircle from "./PercentageCircle.vue";
	const props = defineProps<{
		// icon: string;
		// alt: string;
		title?: string;
		description?: string;
		percentage?: number;
		color?: string;
	}>();
</script>

<template>
	<div class="flex flex-col justify-start items-center">
		<PercentageCircle
			class="font-bold text-2xl"
			:percent="props.percentage"
			:size="120"
			:radius="50" />
		<div v-if="title" class="text-xl ml-0">{{ title }}</div>
		<slot name="description" />
	</div>
</template>
