// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-05-15",
	devtools: { enabled: true },

	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxt/eslint",
		"@nuxt/fonts",
		"@nuxt/icon",
		"@nuxt/image",
		"@nuxt/ui",
		"@nuxt/content",
	],

	// Configure Tailwind CSS
	tailwindcss: {
		cssPath: "~/assets/css/tailwind.css",
		configPath: "tailwind.config.ts",
		exposeConfig: true,
		viewer: true,
	},

	// Import FontAwesome CSS
	css: ["@fortawesome/fontawesome-svg-core/styles.css"],

	build: {
		transpile: [
			"@fortawesome/fontawesome-svg-core",
			"@fortawesome/free-solid-svg-icons",
			"@fortawesome/free-brands-svg-icons",
			"@fortawesome/vue-fontawesome",
		],
	},
});
