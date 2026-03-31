import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export function initPopupForm() {
	const openPopup = document.querySelectorAll(".button");
	const popup = document.querySelector(".pop-up");
	const closePopup = document.querySelector(".pop-up__close");

	openPopup.forEach((open) => {
		open.addEventListener("click", () => {
			popup.classList.add("pop-up_open");
			disableBodyScroll(document.body);
		});
	});

	closePopup.addEventListener("click", () => {
		popup.classList.remove("pop-up_open");
		enableBodyScroll(document.body);
	});
}
