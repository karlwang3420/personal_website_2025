<script setup lang="ts">
	// import { useCounterStore } from "../../composables/storeIndex";
	import Header from "./Header.vue";
	import AboutMe from "./AboutMe.vue";
	import ResumePanel from "./ResumePanel.vue";

	import Skills from "./Skills.vue";
	import ProjectsAndRoles from "./ProjectsAndRoles.vue";
</script>

<template>
	<div class="max-h-full min-h-screen bg-orange-50">
		<Header />
		<AboutMe />
		<Skills />

		<ResumePanel />
		<ProjectsAndRoles class="mt-4" />
	</div>
</template>
