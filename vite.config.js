// vite.config.js
import { defineConfig } from "vite";
import Inspect from "vite-plugin-inspect";
import nunjucks from "vite-plugin-nunjucks";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { resolve } from "path";

export default defineConfig({
	plugins: [
		Inspect(),
		nunjucks(),
		ViteImageOptimizer({
			png: {
				quality: 40,
			},
			jpg: {
				quality: 40,
			},
		}),
	],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				news: resolve(__dirname, "src/pages/news/index.html"),
				oneNews: resolve(__dirname, "src/pages/one-news/index.html"),
				projects: resolve(__dirname, "src/pages/projects/index.html"),
				oneProject: resolve(__dirname, "src/pages/one-project/index.html"),
				about: resolve(__dirname, "src/pages/about/index.html"),
				contact: resolve(__dirname, "src/pages/contact/index.html"),
				notFound: resolve(__dirname, "404.html"),
			},
		},
	},
	base: "/interior-studio/",
});
