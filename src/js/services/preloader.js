export function preloader() {
	const images = Array.from(document.images);
	let loaded = 0;
	const loader = document.getElementById("preloader");
	const loaderPercets = document.querySelector(".preloader__percents");

	const check = () => {
		loaded++;

		const percent = Math.round((loaded / images.length) * 100);
		loaderPercets.textContent = percent + "%";

		if (loaded === images.length) {
			setTimeout(() => {
				loader.style.opacity = "0";
				loader.style.transition = "opacity 1s";
			}, 1500);

			setTimeout(() => {
				loader.remove();
			}, 2800);
		}
	};

	if (images.length === 0) check();

	images.forEach((img) => {
		if (img.complete) {
			check();
		} else {
			img.addEventListener("load", check);
			img.addEventListener("error", check);
		}
	});
}
