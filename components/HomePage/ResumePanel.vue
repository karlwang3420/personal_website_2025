<script setup lang="ts">
	import Timeline from "../common/Timeline2.vue";
	const timelineContents = [
		{
			title: "Full Stack Developer",
			company: "FintechLife Technology LTD.",
			date: "June 2023 - Now",
			start: new Date(2023, 6),
			end: new Date(),
			barColor: "orange",
			description: [
				"Initially engaged as a Frontend Developer, my role expanded to include significant backend responsibilities due to demonstrated capability and evolving project requirements. In this capacity, I not only continued to advance my expertise in frontend technologies like Vue and Tailwind but also acquired proficiency in backend development, including Spring Boot, JPA, database design, SQL, and microservices architecture. Furthermore, working on a financial transaction/payment application provided valuable insights into financial transactions, KYC processes, and customer service operations.",
				"On top of my technical skills, I'm pretty good at communication, especially when it comes to figuring out what clients really need, whether they're internal or external. I've noticed people often talk past each other, but I can usually pinpoint what each person's trying to say and help everyone get on the same page. My personal process? I focus on listening to the client first, then sketch out UI ideas to make sure they see what I'm thinking, and then I start coding. This approach has been really effective.",
			],
		},
		{
			title: "Project Manager",
			company: "Micetek International Inc.",
			date: "September 2021 - June 2023",
			start: new Date(2021, 8),
			end: new Date(2023, 6),
			description: [
				"During the last year of working at Micetek, I was promoted to Project	Manager and Tech Lead. My responsibilities include developing new		products and managing a team of 4 people. I also learned business				strategies, SWOT analysis, management mindset…etc.",
				"During this time. I was able to keep the project on track by				understanding my team's abilities and letting them do their best work. I also help solve problems and make key design decisions whenever they come up.",
			],
		},
		{
			title: "Software Engineer",
			company: "Micetek International Inc.",
			date: "November 2016 - June 2023",
			start: new Date(2016, 10),
			end: new Date(2023, 6),
			description: [
				"I worked as a software engineer for 6 years. This work required me to create desktop programs to control and manage production equipment, using Java/JavaScript/C++. I designed some of those programs from scratch, and learned the necessary language, platform, and software design on my own. I also created lessons on coding for Mobile Robots and created my own SLAM algorithm.",
			],
		},
		{
			title: "Assistant Field Engineer",
			company: "LE & DER CO., LTD.",
			date: "December 2015 - October 2016",
			start: new Date(2015, 11),
			end: new Date(2016, 9),
			barColor: "blue",
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
