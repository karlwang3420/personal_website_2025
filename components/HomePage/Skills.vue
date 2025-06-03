<script setup lang="ts">
	import Skill from "../common/Skill.vue";
</script>

<template>
	<div class="flex flex-col items-center">
		<div class="text-3xl font-bold">Skills</div>
		<div
			class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 max-w-[1100px] min-h-[600px] gap-x-5 gap-y-1 align-top">
			<Skill :percentage="80" title="Frontend (Vue)">
				<template #description>
					<p>
						I have working as a frontend developer for 4 years, and I am really
						comfortable with the Vue framework. From using a UI library like
						element plus to hand rolling components with Tailwind, I can do it
						all.
					</p>
				</template>
			</Skill>

			<Skill :percentage="60" title="Backend (Spring Boot)">
				<template #description>
					<p>
						I have been working with Spring Boot for a year now. From creating
						REST APIs to setting configurations and working with micro-services,
						I know the basics and some advanced features of Spring Boot. My
						tech-lead is comfortable with letting me design some parts of the
						backend (error handling, logging,) and I am learning more about it
						every day. However, I know there are much more to learn such as
						architecture design, deployment, and so on.
					</p>
				</template>
			</Skill>

			<Skill :percentage="80" title="Software Design">
				<template #description>
					<p>
						In software design, I follow the philosophy of writing something
						that works and then refactoring to make it more performant more
						maintainable later. I am not a fan of over-engineering, as
						requirements are always changing especially in startups. It's not to
						say I write code sloppyly, but I don't make layers of abstraction
						that are not needed, or make common libraries before I actually need
						them.
					</p>
				</template>
			</Skill>

			<Skill :percentage="90" title="Communication">
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
			<Skill :percentage="50" title="UI/UX">
				<template #description>
					<p>
						I can do practical UI/UX design, but I am not a designer. I can
						either make my design that is used by the team or other engineers,
						or I can follow the design given to me if it's inteaded to be used
						by the customers.
					</p>
				</template>
			</Skill>
			<Skill :percentage="50" title="Database (SQL)">
				<template #description>
					<p>
						I have some experience with designing tables and their relationships
						in relational databases, and with the help of AI, I can write
						complex queries with joins and subqueries.
					</p>
				</template>
			</Skill>
			<Skill :percentage="70" title="Data Structure/ Algorithms">
				<template #description>
					<p>
						My job doesn't require me to use the advance data structures often,
						but I know about most of them and can use them correcly when needed.
						And as for relational databases, I know the basics one to one, one
						to many and many to many relationships, and know when to use one or
						the other.
					</p>
					<p>
						Algorithms is the same for me in sense that I don't need to apply
						the more advacned ones often, but I know about them and can use them
						when needed.
					</p>
				</template>
			</Skill>
			<Skill :percentage="60" title="Java">
				<template #description>
					<p>
						I started programming with Java. Making control programs for usb
						connected devices. And now that I started working on the backend
						with Spring Boot, I am learning another whole new side of Java.
					</p>
				</template>
			</Skill>
			<Skill :percentage="90" title="Neatness">
				<template #description>
					<p>
						I always use autofomaters and linters to keep my code neat and
						readable, and I try to write code that is easy to understand and
						maintain. Also, I respect and follow the conventions of the project
						if there are established rules.
					</p>
				</template>
			</Skill>
		</div>
	</div>
</template>
