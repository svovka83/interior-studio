import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export function initPopupConfirmation() {
	const popup = document.querySelector(".pop-up");
	const popup2 = document.querySelector(".pop-up-2");

	const closePopup2 = document.querySelector(".pop-up__close-2");
	const sendAgain = document.querySelector(".pop-up-2__button");

	sendAgain.addEventListener("click", () => {
		popup2.classList.remove("pop-up-2_open");
		popup.classList.add("pop-up_open");
	});

	popup2.addEventListener("click", (e) => {
		if (!e.target.closest(".pop-up-2__inner")) {
			popup2.classList.remove("pop-up-2_open");
			enableBodyScroll(document.body);
		}
	});

	closePopup2.addEventListener("click", () => {
		popup2.classList.remove("pop-up-2_open");
		enableBodyScroll(document.body);
	});
}
