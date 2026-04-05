import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { isEmpty, isEmail } from "validator";
import { isValidPhoneNumber, AsYouType } from "libphonenumber-js";

export function formValidation() {
	const popup = document.querySelector(".pop-up");
	const popup2 = document.querySelector(".pop-up-2");
	const submitBtn = document.querySelector(".pop-up__button");

	const form = document.getElementById("form");
	const firstNameInput = document.getElementById("firstName");
	const lastNameInput = document.getElementById("lastName");
	const cityInput = document.getElementById("city");
	const emailInput = document.getElementById("email");
	const commentInput = document.getElementById("comment");
	const phoneInput = document.getElementById("phone");

	firstNameInput.addEventListener("input", () => {
		const isEmptyFirstName = !isEmpty(firstNameInput.value.trim());

		if (!isEmptyFirstName) {
			displayError(firstNameInput, "Field can NOT be empty.");
		} else {
			setSuccess(firstNameInput, "Field is not empty.");
		}
	});

	lastNameInput.addEventListener("input", () => {
		const isEmptyLastName = !isEmpty(lastNameInput.value.trim());

		if (!isEmptyLastName) {
			displayError(lastNameInput, "Field can NOT be empty.");
		} else {
			setSuccess(lastNameInput, "Field is not empty.");
		}
	});

	cityInput.addEventListener("input", () => {
		const isEnteredCity = !isEmpty(cityInput.value.trim());

		if (!isEnteredCity) {
			displayError(cityInput, "Field can NOT be empty.");
		} else {
			setSuccess(cityInput, "Field is not empty.");
		}
	});

	emailInput.addEventListener("input", () => {
		const isValidEmail = isEmail(emailInput.value);

		if (!isValidEmail) {
			displayError(emailInput, "Email is NOT valid.");
		} else {
			setSuccess(emailInput, "Email is valid.");
		}
	});

	let formatter = new AsYouType();

	phoneInput.addEventListener("input", (e) => {
		if (!phoneInput.value.startsWith("+")) {
			phoneInput.value = "+" + phoneInput.value.replace(/\+/g, "");
		}

		const raw = e.target.value;

		formatter.reset();
		const formatted = formatter.input(raw);

		e.target.value = formatted;

		const isValidPhone = isValidPhoneNumber(phoneInput.value);

		if (!isValidPhone) {
			displayError(phoneInput, "Phone number is NOT valid.");
		} else {
			setSuccess(phoneInput, "Phone number is valid.");
		}
	});

	form.addEventListener("input", () => {
		const isEmptyFirstName = !isEmpty(firstNameInput.value.trim());
		const isEmptyLastName = !isEmpty(lastNameInput.value.trim());
		const isEnteredCity = !isEmpty(cityInput.value.trim());
		const isValidEmail = isEmail(emailInput.value);
		const isValidPhone = isValidPhoneNumber(phoneInput.value);

		console.log(isEmptyFirstName, isEmptyLastName, isEnteredCity, isValidEmail, isValidPhone);

		if (isEmptyFirstName && isEmptyLastName && isEnteredCity && isValidEmail && isValidPhone) {
			submitBtn.classList.remove("pop-up__button_disable");
		} else {
			submitBtn.classList.add("pop-up__button_disable");
		}
	});

	form.addEventListener("submit", (event) => {
		event.preventDefault();

		clearErrorText(firstNameInput, "");
		clearErrorText(lastNameInput, "");
		clearErrorText(phoneInput, "");
		clearErrorText(cityInput, "");
		clearErrorText(emailInput, "");
		clearErrorText(commentInput, "");

		submitBtn.classList.add("pop-up__button_disable");
		popup.classList.remove("pop-up_open");
		popup2.classList.add("pop-up-2_open");
		disableBodyScroll(document.body);
	});

	const displayError = (element, message) => {
		const imputControl = element.parentElement;
		const errorDisplay = imputControl.querySelector(".validation");
		errorDisplay.innerText = message;
		errorDisplay.classList.remove("validation_success");
		element.classList.remove("input_success");
		errorDisplay.classList.add("validation_error");
		element.classList.add("input_error");
	};
	const setSuccess = (element, message) => {
		const imputControl = element.parentElement;
		const errorDisplay = imputControl.querySelector(".validation");
		errorDisplay.innerText = message;
		errorDisplay.classList.remove("validation_error");
		element.classList.remove("input_error");
		errorDisplay.classList.add("validation_success");
		element.classList.add("input_success");
	};
	const clearErrorText = (element, message) => {
		const imputControl = element.parentElement;
		const errorDisplay = imputControl.querySelector(".validation");
		errorDisplay.innerText = message;
		errorDisplay.classList.remove("validation_success");
		element.value = message;
		element.classList.remove("input_success");
	};
}
