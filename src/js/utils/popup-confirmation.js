import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { isFormValid } from "../services/form-validation.js";

export function initPopupConfirmation() {
	const popup = document.querySelector(".pop-up");

	const sendRequest = document.querySelector(".pop-up__button");
	const popup2 = document.querySelector(".pop-up-2");

	const closePopup2 = document.querySelector(".pop-up__close-2");
	const sendAgain = document.querySelector(".pop-up-2__button");

	sendRequest.addEventListener("click", () => {
		if (isFormValid) {
			popup.classList.remove("pop-up_open");
			popup2.classList.add("pop-up-2_open");
			disableBodyScroll(document.body);
		}
	});

	closePopup2.addEventListener("click", () => {
		popup2.classList.remove("pop-up-2_open");
		enableBodyScroll(document.body);
	});

	sendAgain.addEventListener("click", () => {
		popup2.classList.remove("pop-up-2_open");
		popup.classList.remove("pop-up_open");
		enableBodyScroll(document.body);
	});
}
