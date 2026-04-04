import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export function initPopupForm() {
	const openPopupBtn = document.querySelectorAll(".button");
	const popup = document.querySelector(".pop-up");
	const closePopupBtn = document.querySelector(".pop-up__close");

	openPopupBtn.forEach((open) => {
		open.addEventListener("click", (e) => {
			popup.classList.add("pop-up_open");
			disableBodyScroll(document.body);
		});
	});

	popup.addEventListener("click", (e) => {
		if (!e.target.closest(".pop-up__form")) {
			popup.classList.remove("pop-up_open");
			enableBodyScroll(document.body);
		}
	});

	closePopupBtn.addEventListener("click", () => {
		popup.classList.remove("pop-up_open");
		enableBodyScroll(document.body);
	});
}
