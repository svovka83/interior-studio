import Swiper from "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs";

export function mainSlider() {
	const sliderText = document.querySelector(".main-top__swiper-text");
	const sliderImages = document.querySelector(".main-top__swiper-img");

	if (!sliderText || !sliderImages) return;

	const mainTextSlider = new Swiper(sliderText, {
		slidesPerView: 1,
		speed: 1200,
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		allowTouchMove: false,
	});

	new Swiper(sliderImages, {
		initialSlide: 0,
		speed: 800,
		allowTouchMove: false,

		thumbs: {
			swiper: mainTextSlider,
		},

		pagination: {
			el: ".main-top-swiper-pagination",
			type: "progressbar",
		},

		navigation: {
			nextEl: ".main-top-swiper-next",
			prevEl: ".main-top-swiper-prev",
		},
		breakpoints: {
			321: {
				slidesPerView: 1.195,
			},
			378: {
				slidesPerView: 1.17,
			},
			769: {
				slidesPerView: 1.185,
			},
			1025: {
				slidesPerView: 1.175,
			},
		},
	});
}
