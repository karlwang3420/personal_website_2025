<script setup lang="ts">
	import Timeline from "../common/Timeline2.vue";
	const timelineContents = [
		{
			title: "Project Manager",
			company: "Micetek International Inc.",
			date: "September 2021 - Now",
			start: new Date(2021, 8),
			end: new Date(),
			description: [
				"During the last year of working at Micetek, I was promoted to Project	Manager and Tech Lead. My responsibilities include developing new		products and managing a team of 4 people. I also learned business				strategies, SWOT analysis, management mindset…etc.",
				"During this time. I was able to keep the project on track by				understanding my team's abilities and letting them do their best work. I also help solve problems and make key design decisions whenever they come up.",
			],
		},
		{
			title: "Software Engineer",
			company: "Micetek International Inc.",
			date: "November 2016 - Now",
			start: new Date(2016, 10),
			end: new Date(),
			description: [
				"I worked as a software engineer for 6 years. This work required me to create desktop programs to control and manage production equipment using JavaScript/Java/C++.",
				"Recently, I started using Vue.js and the Electron framework to create my programs, and I love learning new technologies and the convenience those tools bring.",
				"I designed some of those programs from scratch, and learned the				necessary language, platform, and software design on my own. I also created lessons on coding for Mobile Robots and created my own SLAM	algorithm using arduino.",
			],
		},
		{
			title: "Assistant Field Engineer",
			company: "LE & DER CO., LTD.",
			date: "December 2015 - October 2016",
			start: new Date(2015, 11),
			end: new Date(2016, 9),
			description: [
				"I worked to calibrate and maintain air quality sensing instruments during this job. Those instruments directly provide the Environmental Protection Administration data they need to facilitate policy changes.",
			],
		},
	];
</script>

<template>
	<div class="flex flex-col items-center">
		<h3 class="text-3xl mt-3 font-bold font-serif">Jobs</h3>
		<div class="flex justify-center mt-24 mb-24">
			<Timeline direction="alternate" :contents="timelineContents" />
		</div>
		<h3 class="text-3xl mt-3 font-bold font-serif grid-cols-2">Education</h3>
		<div class="mt-2">
			<h4 class="text-xl font-bold ml-2 mt-2">
				國立中興大學 (National Chung Hsin University, NCHU)
			</h4>
			<h5 class="text-base italic ml-4">2019 - 2021</h5>
			<h5
				class="text-xl max-w-[700px] indent-2 ml-4 border-2 rounded-2xl p-2 border-gray-400 bg-neutral-100 leading-8">
				Master of Science (MS)・Master's Program in Artificial Intelligence and
				Data Science
			</h5>
		</div>
		<div class="mt-2">
			<h4 class="text-xl font-bold ml-2 mt-2">University of Texas at Dallas</h4>
			<h5 class="text-base italic ml-4">2009 - 2013</h5>
			<h5
				class="text-xl max-w-[700px] indent-2 ml-4 border-2 rounded-2xl p-2 border-gray-400 bg-neutral-100 leading-8">
				Bachelor of Science (BS)・Mechanical Engineering
			</h5>
		</div>
	</div>
</template>
