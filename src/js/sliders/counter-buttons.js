export function counterButtons() {
	const prevBtn = document.getElementById("progress-prev");
	const nextBtn = document.getElementById("progress-next");
	const nextText = document.getElementById("progress-num-next");

	if (!prevBtn || !nextBtn || !nextText) return;

	let counterProgress = 1;

	prevBtn.addEventListener("click", () => {
		if (counterProgress > 1) {
			counterProgress--;
			nextText.innerHTML = `${counterProgress}`;
		}
	});
	nextBtn.addEventListener("click", () => {
		if (counterProgress < 4) {
			counterProgress++;
			nextText.innerHTML = `${counterProgress}`;
		}
	});
}
