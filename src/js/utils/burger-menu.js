import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export function initBurgerMenu() {
	const burgerBtn = document.querySelectorAll(".burger-menu");
	const burgerMenu = document.querySelectorAll(".burger-menu-screen");
	const burgerBottom = document.querySelectorAll(".main-top__bottom.burger-menu-bottom");
	const openIcon = document.querySelectorAll(".burger-menu__icon.burger-menu__icon-open");
	const closeIcon = document.querySelectorAll(".burger-menu__icon.burger-menu__icon-close");

	window.addEventListener("resize", () => {
		burgerMenu.forEach((menu) => {
			if (menu.classList.contains("burger-menu-screen_active")) {
				setTimeout(() => {
					menu.classList.remove("burger-menu-screen_active");
					enableBodyScroll(document.body);
				}, 950);
			}
		});
		burgerBottom.forEach((bottom) => {
			if (bottom.classList.contains("burger-menu-bottom_active")) {
				bottom.classList.remove("burger-menu-bottom_active");
			}
		});
		openIcon.forEach((icon) => {
			if (icon.classList.contains("burger-menu__icon-open_active")) {
				setTimeout(() => {
					icon.classList.remove("burger-menu__icon-open_active");
				}, 700);
			}
		});
		closeIcon.forEach((icon) => {
			if (icon.classList.contains("burger-menu__icon-close_active")) {
				icon.classList.remove("burger-menu__icon-close_active");
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
			openIcon.forEach((icon) => {
				if (!icon.classList.contains("burger-menu__icon-open_active")) {
					icon.classList.add("burger-menu__icon-open_active");
				} else {
					setTimeout(() => {
						icon.classList.remove("burger-menu__icon-open_active");
					}, 700);
				}
			});
			closeIcon.forEach((icon) => {
				if (!icon.classList.contains("burger-menu__icon-close_active")) {
					setTimeout(() => {
						icon.classList.add("burger-menu__icon-close_active");
					}, 700);
				} else {
					icon.classList.remove("burger-menu__icon-close_active");
				}
			});
		});
	});
}
