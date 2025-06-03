<script setup lang="ts">
	type Content = {
		title: string;
		date: string;
		description: string[];
		company: string;
		barColor?: string;
		start: Date;
		end: Date;
	};

	const props = defineProps<{
		contents: Content[];
	}>();

	const beginning = new Date(2015, 11);

	function calculatePercentage(date: Date, beginning: Date) {
		const wholePeriod = Date.now() - beginning.valueOf();
		const currentPeriod = date.valueOf() - beginning.valueOf();

		const percent = Math.round((currentPeriod / wholePeriod) * 100);
		return percent;
	}

	const contentsLeft = ref<Content[]>([]);
	const contentsRight = ref<Content[]>([]);

	for (const index in props.contents) {
		if (parseInt(index) % 2 == 0) {
			contentsLeft.value.push(props.contents[index]);
			// console.log(
			// 	"start percent",
			// 	calculatePercentage(props.contents[index].start, beginning)
			// );

			// console.log(
			// 	"end percent",
			// 	calculatePercentage(props.contents[index].end, beginning)
			// );
		} else {
			contentsRight.value.push(props.contents[index]);
		}
	}
</script>

<template>
	<div class="flex flex-col items-center w-[1680px]">
		<div class="text-lg font-semibold px-1 border-gray-500 uppercase">Now</div>
		<div
			class="flex min-w-[1000px] xl:min-w-[1380px] 2xl:min-w-[1680px] h-[800px]">
			<!-- left -->
			<div class="flex-1 relative">
				<div
					v-for="content of contentsLeft"
					:key="content.start.valueOf()"
					class="mr-1 absolute border-r-8 flex items-center"
					:class="{
						'bar-orange': content.barColor === 'orange',
						'bar-blue': content.barColor === 'blue',
						'bar-default': !content.barColor,
					}"
					:style="`bottom: ${calculatePercentage(
						content.start,
						beginning
					)}%; top: ${100 - calculatePercentage(content.end, beginning)}%;`">
					<div class="flex flex-col items-center">
						<div class="text-2xl font-semibold">{{ content.title }}</div>
						<div class="text-xl">{{ content.company }}</div>
						<div class="text-base italic">{{ content.date }}</div>
						<div
							class="text-base indent-2 mx-4 border-2 rounded-2xl p-2 border-gray-400 bg-neutral-200">
							<p v-for="(paragraph, index) of content.description" :key="index">
								{{ paragraph }}
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- center -->
			<div class="border-2 border-gray-500 h-full relative w-0" />

			<!-- right -->
			<div class="flex-1 relative">
				<div
					v-for="content of contentsRight"
					:key="content.start.valueOf()"
					class="ml-1 absolute left-0 w-full border-l-8 flex items-center"
					:class="{
						'bar-orange': content.barColor === 'orange',
						'bar-blue': content.barColor === 'blue',
						'bar-default': !content.barColor,
					}"
					:style="`bottom: ${calculatePercentage(
						content.start,
						beginning
					)}%; top: ${100 - calculatePercentage(content.end, beginning)}%;`">
					<div class="flex flex-col items-center">
						<div class="text-2xl font-semibold">{{ content.title }}</div>
						<div class="text-xl">{{ content.company }}</div>
						<div class="text-base italic">{{ content.date }}</div>
						<div
							class="text-base indent-2 mx-4 border-2 rounded-2xl p-2 border-gray-400 bg-neutral-200">
							<p v-for="(paragraph, index) of content.description" :key="index">
								{{ paragraph }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="text-lg font-semibold px-1 border-gray-500 uppercase">2015</div>
	</div>
</template>

<style scoped>
	.bar-default {
		border-color: #038f5b;
	}
	.bar-orange {
		border-color: #f97316;
	}
	.bar-blue {
		border-color: #2563eb;
	}
</style>
