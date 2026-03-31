import Swiper from "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs";

export function oneNewsSlider() {
	const slider = document.querySelector(".one-news-swiper");

	if (!slider) return;

	new Swiper(".one-news-swiper", {
		slidesPerView: "auto",
		speed: 700,
		breakpoints: {
			321: {
				spaceBetween: 26,
			},
			651: {
				spaceBetween: 20,
			},
			901: {
				spaceBetween: 40,
			},
			1101: {
				spaceBetween: 48,
			},
		},
	});
}
