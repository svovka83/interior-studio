export function preloader() {
	window.addEventListener("load", () => {
		const loader = document.getElementById("preloader");
		setTimeout(() => {
			loader.style.opacity = "0";
			loader.style.transition = "opacity 1s";
		}, 1500);

		setTimeout(() => {
			loader.remove();
		}, 2800);
	});
}
