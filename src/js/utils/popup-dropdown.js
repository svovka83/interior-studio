export function popupDropdown() {
	const popUp = document.querySelectorAll(".popup-dropdown");

	popUp.forEach((popup) => {
		const control = popup.querySelector(".popup-dropdown__control");
		const dropdown = popup.querySelector(".popup-dropdown__list");
		const chevron = popup.querySelector(".popup-dropdown__icon");
		const value = popup.querySelector(".popup-dropdown__title");
		const options = popup.querySelectorAll(".popup-dropdown__option");

		control.addEventListener("click", () => {
			dropdown.classList.toggle("popup-dropdown__list_open");
			chevron.classList.toggle("popup-dropdown__icon_open");
		});

		options.forEach((option) => {
			option.addEventListener("click", () => {
				value.textContent = option.textContent;

				dropdown.classList.remove("popup-dropdown__list_open");
				chevron.classList.remove("popup-dropdown__icon_open");
			});
		});
	});
}
