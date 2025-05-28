<script setup lang="ts">
	const props = defineProps<{
		percent: number | undefined;
		radius: number;
		size: number;
	}>();

	const circumference = computed(() => props.radius * 2 * Math.PI);
</script>

<template>
	<div>
		<div
			class="inline-flex items-center justify-center overflow-hidden rounded-full">
			<svg :style="`width: ${size}px; height: ${size}px;`">
				<circle
					class="text-gray-300"
					stroke-width="5"
					stroke="currentColor"
					fill="transparent"
					:r="radius"
					:cx="size / 2"
					:cy="size / 2" />
				<circle
					class="text-orange-400"
					stroke-width="5"
					:stroke-dasharray="circumference"
					:stroke-dashoffset="
						circumference - ((percent ?? 0) / 100) * circumference
					"
					stroke-linecap="round"
					stroke="currentColor"
					fill="transparent"
					:r="radius"
					:cx="size / 2"
					:cy="size / 2" />
			</svg>
			<span class="absolute text-orange-500">{{ `${percent}%` }}</span>
		</div>
	</div>
</template>

<style></style>
