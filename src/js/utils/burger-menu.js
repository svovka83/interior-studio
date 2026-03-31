import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export function initBurgerMenu() {
	const burgerBtn = document.querySelectorAll(".burger-menu");
	const burgerMenu = document.querySelectorAll(".burger-menu-screen");
	const burgerBottom = document.querySelectorAll(".main-top__bottom.burger-menu-bottom");

	window.addEventListener("resize", () => {
		burgerMenu.forEach((menu) => {
			if (menu.classList.contains("burger-menu-screen_active")) {
				setTimeout(() => {
					menu.classList.remove("burger-menu-screen_active");
					enableBodyScroll(document.body);
				}, 950);
			}
		});
	});
	window.addEventListener("resize", () => {
		burgerBottom.forEach((bottom) => {
			if (bottom.classList.contains("burger-menu-bottom_active")) {
				bottom.classList.remove("burger-menu-bottom_active");
			}
		});
	});

	burgerBtn.forEach((btn) => {
		btn.addEventListener("click", () => {
			burgerMenu.forEach((menu) => {
				if (!menu.classList.contains("burger-menu-screen_active")) {
					menu.classList.add("burger-menu-screen_active");
					disableBodyScroll(document.body);
				} else {
					setTimeout(() => {
						menu.classList.remove("burger-menu-screen_active");
						enableBodyScroll(document.body);
					}, 950);
				}
			});
			burgerBottom.forEach((bottom) => {
				if (!bottom.classList.contains("burger-menu-bottom_active")) {
					bottom.classList.add("burger-menu-bottom_active");
				} else {
					bottom.classList.remove("burger-menu-bottom_active");
				}
			});
		});
	});
}
