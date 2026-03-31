import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export function initPopupConfirmation() {
	const popup = document.querySelector(".pop-up");

	const openPopup2 = document.querySelector(".pop-up__button");
	const popup2 = document.querySelector(".pop-up-2");

	const closePopup2 = document.querySelector(".pop-up__close-2");
	const submit = document.querySelector(".pop-up-2__button");

	openPopup2.addEventListener("click", () => {
		popup.classList.remove("pop-up_open");
		popup2.classList.add("pop-up-2_open");
		disableBodyScroll(document.body);
	});

	closePopup2.addEventListener("click", () => {
		popup2.classList.remove("pop-up-2_open");
		enableBodyScroll(document.body);
	});
	submit.addEventListener("click", () => {
		popup.classList.remove("pop-up_open");
		popup2.classList.remove("pop-up-2_open");
		enableBodyScroll(document.body);
	});
}
