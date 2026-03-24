// vite.config.js
import { defineConfig } from "vite";
import Inspect from "vite-plugin-inspect";
import nunjucks from "vite-plugin-nunjucks";
import { resolve } from "path";

export default defineConfig({
	plugins: [Inspect(), nunjucks()],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				news: resolve(__dirname, "src/pages/news/index.html"),
				oneNews: resolve(__dirname, "src/pages/one-news/index.html"),
			},
		},
	},
	base: "/interior-studio/",
});
