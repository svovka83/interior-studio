import "./scss/styles.scss";

import Swiper from "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

// page not found

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

// burger-menu

const burgerBtn = document.querySelectorAll(".burger-menu");
const burgerMenu = document.querySelectorAll(".burger-menu-screen");

burgerBtn.forEach((btn) => {
	btn.addEventListener("click", () => {
		burgerMenu.forEach((menu) => {
			// menu.classList.toggle("burger-menu-screen_active");
			if (!menu.classList.contains("burger-menu-screen_active")) {
				menu.classList.add("burger-menu-screen_active");
				disableBodyScroll(document.body);
			} else {
				menu.classList.remove("burger-menu-screen_active");
				enableBodyScroll(document.body);
			}
		});
	});
});

// drop-down

const selects = document.querySelectorAll(".select");

selects.forEach((select) => {
	const control = select.querySelector(".select__control");
	const dropdown = select.querySelector(".select__dropdown");
	const chevron = select.querySelector(".select__chevron");
	const value = select.querySelector(".select__value");
	const options = select.querySelectorAll(".select__option");

	control.addEventListener("click", () => {
		dropdown.classList.toggle("select__dropdown_open");
		chevron.classList.toggle("select__chevron_open");
	});

	options.forEach((option) => {
		option.addEventListener("click", () => {
			value.textContent = option.textContent;

			dropdown.classList.remove("select__dropdown_open");
			chevron.classList.remove("select__chevron_open");
		});
	});

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					entry.target.classList.toggle("select__dropdown_show-above");
				}
			});
		},
		{
			threshold: 1,
		}
	);

	observer.observe(dropdown);
});

// one news slider

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
