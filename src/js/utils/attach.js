export function chooseFile() {
	const attach = document.getElementById("popup-attach");
	const chosenFile = document.querySelector(".pop-up__attach-title");
	const fileSize = document.querySelector(".pop-up__attach-text");

	attach.addEventListener("change", () => {
		const file = attach.files[0];

		chosenFile.textContent = file.name;
		fileSize.textContent = `Size of chosen file is ${file.size} bytes`;
	});
}
