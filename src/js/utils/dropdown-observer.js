export function dropdownObserver() {
	const selects = document.querySelectorAll(".select");

	selects.forEach((select) => {
		const control = select.querySelector(".select__control");
		const dropdown = select.querySelector(".select__dropdown");
		const chevron = select.querySelector(".select__chevron");
		const value = select.querySelector(".select__value");
		const options = select.querySelectorAll(".select__option");

		control.addEventListener("click", () => {
			dropdown.classList.toggle("select__dropdown_open");
			chevron.classList.toggle("select__chevron_open");
		});

		options.forEach((option) => {
			option.addEventListener("click", () => {
				value.textContent = option.textContent;

				dropdown.classList.remove("select__dropdown_open");
				chevron.classList.remove("select__chevron_open");
			});
		});

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) {
						entry.target.classList.toggle("select__dropdown_show-above");
					}
				});
			},
			{
				threshold: 1,
			}
		);

		observer.observe(dropdown);
	});
}
