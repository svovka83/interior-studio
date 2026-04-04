export function chooseSubmenuItem() {
	const submenu = document.querySelectorAll(".submenu");

	submenu.forEach((menu) => {
		const items = menu.querySelectorAll(".submenu__item");

		items.forEach((item) => {
			item.addEventListener("click", () => {
				items.forEach((item) => {
					item.classList.remove("submenu__item_active");
				});

				item.classList.add("submenu__item_active");
			});
		});
	});
}
