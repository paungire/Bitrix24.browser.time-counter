document.querySelector("#task-time-switcher").addEventListener("click", (e) => {
	let table = document.querySelector("#task-time-table");
	let trs = table.querySelectorAll("tr");
	let arrayElementTimes = [...trs].splice(1, [...trs].length - 3);
	let arrayTimes = [];

	arrayElementTimes.forEach((el) => {
		let start = el.querySelector(
			".task-time-date-column .task-time-date"
		).innerHTML;
		let author = el.querySelector(
			".task-time-author-column .task-log-author"
		).innerHTML;
		let time = el.querySelector(".task-time-spent-column").innerText;
		arrayTimes.push({ start: start, author: author, time: time });
	}); // return arrayTimes
});
