import Swiper from "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs";

export function aboutSlider() {
	const slider = document.querySelector(".about-swiper");

	if (!slider) return;

	new Swiper(slider, {
		initialSlide: 0,
		spaceBetween: 12,
		slidesPerView: "auto",
		speed: 800,
		allowTouchMove: false,

		pagination: {
			el: ".about-swiper-pagination",
			type: "progressbar",
		},

		navigation: {
			nextEl: ".about-swiper-next",
			prevEl: ".about-swiper-prev",
		},
	});
}
