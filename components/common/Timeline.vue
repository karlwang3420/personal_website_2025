<script setup lang="ts">
	const props = defineProps<{
		direction?: "left" | "right" | "alternate";
		contents: {
			title: string;
			date: string;
			description: string[];
			company: string;
		}[];
	}>();
</script>

<template>
	<div class="flex justify-center">
		<div
			class="grid grid-cols-[minmax(0,_1fr),_minmax(0,50px),_minmax(0,_1fr)] w-[1000px]">
			<template v-for="(content, index) of props.contents" :key="index">
				<div
					v-if="direction == 'left' || direction == 'alternate'"
					:class="direction == 'left' ? 'col-span-2' : 'col-span-1'">
					<div
						v-if="!(direction == 'alternate' && index % 2 == 1)"
						class="border rounded-xl my-2">
						<div class="job-title">{{ content.title }}</div>
						<div class="company">{{ content.company }}</div>
						<div class="date">{{ content.date }}</div>
						<div class="description">
							<p
								v-for="(paragraph, pIndex) of content.description"
								:key="pIndex">
								{{ paragraph }}
							</p>
						</div>
					</div>
				</div>

				<div
					class="col-span-1 border-2 ml-[23px] border-red-500 h-full relative w-0">
					<div
						class="absolute top-1/2 -left-2 rounded-full border-gray-300 bg-red-500 h-4 w-4" />
				</div>
				<div
					v-if="direction == 'right' || direction == 'alternate'"
					:class="direction == 'right' ? 'col-span-2' : 'col-span-1'">
					<div
						v-if="!(direction == 'alternate' && index % 2 == 0)"
						class="border rounded-xl my-2">
						<div class="job-title">{{ content.title }}</div>
						<div class="company">{{ content.company }}</div>
						<div class="date">{{ content.date }}</div>
						<div class="description">
							<p
								v-for="(paragraph, pIndex) of content.description"
								:key="pIndex">
								{{ paragraph }}
							</p>
						</div>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>

<style scoped>
	.resume-section {
		@apply text-3xl mt-3 font-bold font-serif;
	}
	.job-title {
		@apply text-2xl mt-3 font-semibold;
	}

	.company {
		@apply text-xl ml-2;
	}

	.date {
		@apply text-base italic ml-4;
	}

	.description {
		@apply text-base max-w-[700px] indent-2 ml-4 border-2 rounded-2xl p-2 border-gray-400 bg-neutral-200;
	}

	.school {
		@apply text-xl font-bold ml-2 mt-2;
	}
</style>
