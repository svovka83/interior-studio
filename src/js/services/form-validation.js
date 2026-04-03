import { isEmpty, isEmail, isLength, isAlpha } from "validator";

export function formValidation() {
	const form = document.getElementById("form");
	const firstNameInput = document.getElementById("firstName");
	const lastNameInput = document.getElementById("lastName");
	const cityInput = document.getElementById("city");
	const emailInput = document.getElementById("email");

	const isFormValid = false;

	form.addEventListener("submit", (event) => {
		event.preventDefault();

		validateImputs();
	});

	const validateImputs = () => {
		const trimmedFirstName = firstNameInput.value.trim();
		const isEmptyFirstName = !isEmpty(trimmedFirstName);
		const isLengthFirstName = isLength(trimmedFirstName, { min: 3, max: 15 });
		const isAlphaFirstName = isAlpha(trimmedFirstName);

		const trimmedLastName = lastNameInput.value.trim();
		const isEmptyLastName = !isEmpty(trimmedLastName);
		const isLengthLastName = isLength(trimmedLastName, { min: 3, max: 15 });
		const isAlphaLastName = isAlpha(trimmedLastName);

		const trimmedCity = cityInput.value.trim();
		const isEnteredCity = !isEmpty(trimmedCity);
		const isLengthEnteredCity = isLength(trimmedCity, { min: 3, max: 15 });
		const isAlphaCity = isAlpha(trimmedCity);

		const isValidEmail = isEmail(emailInput.value);

		switch (true) {
			case !isEmptyFirstName:
				displayError(firstNameInput, "Field can not be empty.");
				break;
			case !isLengthFirstName:
				displayError(firstNameInput, "Name must have 3-15 symbols.");
				break;
			case !isAlphaFirstName:
				displayError(firstNameInput, "Not any symbols and spaces.");
				break;
			default:
				setSuccess(firstNameInput, "The name is valid now.");
		}
		switch (true) {
			case !isEmptyLastName:
				displayError(lastNameInput, "Field can not be empty.");
				break;
			case !isLengthLastName:
				displayError(lastNameInput, "Surname must have 3-15 symbols.");
				break;
			case !isAlphaLastName:
				displayError(lastNameInput, "Not any symbols and spaces.");
				break;
			default:
				setSuccess(lastNameInput, "The surname is valid now.");
		}
		switch (true) {
			case !isEnteredCity:
				displayError(cityInput, "Enter you city, please.");
				break;
			case !isLengthEnteredCity:
				displayError(cityInput, "City must have 3-15 symbols.");
				break;
			case !isAlphaCity:
				displayError(cityInput, "Not any symbols and spaces.");
				break;
			default:
				setSuccess(cityInput, "The name of the city is valid now.");
		}
		if (!isValidEmail) {
			displayError(emailInput, "Email is NOT valid.");
		} else {
			setSuccess(emailInput, "Email is valid.");
		}
	};

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
}
