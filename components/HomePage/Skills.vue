<script setup lang="ts">
	import Skill from "../common/Skill.vue";
</script>

<template>
	<div class="flex flex-col items-center">
		<div class="text-3xl font-bold">Skills</div>
		<div
			class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 max-w-[1100px] min-h-[600px] gap-x-5 gap-y-1 align-top">
			<Skill :percentage="80" title="JavaScript/TypeScript">
				<template #description>
					<p class="indent-2 text-sm">
						JS: Pretty familiar with modern ES6 and later writing styles
					</p>
					<p class="indent-2 text-sm">
						TS: I use Typescript with all my projects (Vue2, Vue3, Nuxt3)
					</p>
				</template>
			</Skill>
			<Skill :percentage="80" title="Software Design">
				<template #description>
					<p class="indent-2 text-sm">
						I am used to designing desktop softwares with multiple interfaces
						and modules, and working in a team.
					</p>
				</template>
			</Skill>
			<Skill :percentage="60" title="Html5">
				<template #description>
					<p class="indent-2">
						I am familiar with most html element, and knows how to do layout
						design. I mostly use Html with Vue.
					</p>
				</template>
			</Skill>
			<Skill :percentage="60" title="CSS/Tailwind">
				<template #description>
					<p>
						I am OK with layout and element designs, but I am not as familiar
						with animations. I like to use the Tailwind classes instead of
						vanilla CSS.
					</p>
				</template>
			</Skill>

			<Skill :percentage="80" title="Communication">
				<template #description>
					<p>
						I am usually the one who can effectively communicate between
						engineers and the sales and customers.
					</p>
					<p>
						When I have to manage, I would delegate tasks to people who can
						actually complete it by knowing their skills well. I don't keep
						unrealistic expectations.
					</p>
				</template>
			</Skill>
			<Skill :percentage="30" title="UI/UX">
				<template #description>
					<p>
						I have only designed UIs for other engineers or production line
						operators. I try to make the UI easy to understand and use, but I
						don't have experience designing a UI for the general public.
					</p>
				</template>
			</Skill>
			<Skill :percentage="80" title="Vue2/Vue3">
				<template #description>
					<p>
						I started learning Vue2 last year, and I like the framework a lot. I
						started using Vue3 this year, and already completed 2 projects. I am
						now learning to use Nuxt3 (similar to Next), so I can make my own
						Server Side Rendering website.
					</p>
				</template>
			</Skill>
			<Skill :percentage="80" title="Electron">
				<template #description>
					<p>
						I use electron to package a Vue app to a desktop app. I use context
						separation and only use server side libraries on the main process.
					</p>
				</template>
			</Skill>
			<Skill :percentage="80" title="Logic/Algorithms">
				<template #description>
					<p>
						I have always liked to think about logic problems. When writing
						programs, I always find myself being able to solve problems quickly.
					</p>
				</template>
			</Skill>
			<Skill :percentage="50" title="Java">
				<template #description>
					<p>
						I learned writing programming and designed my own UI using Java. I
						use Eclipse and Maven, and still maintain older UIs written in Java.
					</p>
				</template>
			</Skill>
			<Skill :percentage="60" title="Dart">
				<template #description>
					<p>
						I learned writing programming and designed my own UI using Java. I
						use Eclipse and Maven, and still maintain older UIs written in Java.
					</p>
				</template>
			</Skill>
			<Skill :percentage="90" title="Neatness">
				<template #description>
					<p>
						Because I am deeply affected from people who wrote programs messily,
						I try to write as neat as possible, and follow the conventions with
						plenty of comments. I also try to design the program so it's easier
						to understand.
					</p>
				</template>
			</Skill>
		</div>
	</div>
</template>
