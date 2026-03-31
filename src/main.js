import "./scss/styles.scss";

import Swiper from "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs";

// utils
import { initBurgerMenu } from "./js/utils/burger-menu.js";
import { initPopupForm } from "./js/utils/popup-form.js";
import { initPopupConfirmation } from "./js/utils/popup-confirmation.js";
import { popupDropdown } from "./js/utils/popup-dropdown.js";
import { dropdownObserver } from "./js/utils/dropdown-observer.js";

// sliders
import { oneNewsSlider } from "./js/sliders/one-news.js";

// preloader

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
// utils
initBurgerMenu();
initPopupForm();
initPopupConfirmation();
popupDropdown();
dropdownObserver();

// sliders
oneNewsSlider();

// main-swiper

const mainTextSlider = new Swiper(".main-top__swiper-text", {
	slidesPerView: 1,
	speed: 1200,
	effect: "fade",
	fadeEffect: {
		crossFade: true,
	},
	allowTouchMove: false,
});

const mainImageSlider = new Swiper(".main-top__swiper-img", {
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

// about-swiper

const aboutSlider = new Swiper(".about-swiper", {
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
	// breakpoints: {
	// 	321: {
	// 		slidesPerView: 1.195,
	// 	},
	// 	378: {
	// 		slidesPerView: 1.17,
	// 	},
	// 	769: {
	// 		slidesPerView: 1.185,
	// 	},
	// 	1025: {
	// 		slidesPerView: 1.175,
	// 	},
	// },
});

// counter buttons
const prevBtn = document.getElementById("progress-prev");
const nextBtn = document.getElementById("progress-next");
const nextText = document.getElementById("progress-num-next");
let counterProgress = 1;

// interrupts running code
prevBtn.addEventListener("click", () => {
	if (counterProgress > 1) {
		counterProgress--;
		nextText.innerHTML = `${counterProgress}`;
	}
});
nextBtn.addEventListener("click", () => {
	if (counterProgress < 4) {
		counterProgress++;
		nextText.innerHTML = `${counterProgress}`;
	}
});
