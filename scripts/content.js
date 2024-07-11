document.querySelector("#task-time-switcher").addEventListener(
	"click",
	(e) => {
		// * сбор данных
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
		}); // ?return arrayTimes
		console.log(arrayTimes);

		// создание приложения
		let app = document.createElement("div");
		app.id = "app";

		let calendar = document.createElement("div");
		calendar.id = "calendar";

		app.append(calendar);
		document.body.append(app);

		const options = {
			actions: {
				clickDay(event, self) {
					console.log(self.selectedDates);
					// 
					arrayTimes.filter((e) => {
						let day = dataConvert(new Date(e.start.split(" ")[0]));

					});
					// let list = document.createElement("div");
					// list.id = "list";

					// let element = document.createElement("div");
					// let name = document.createElement("span");
					// let time = document.createElement("span");
				},
			},
		};
		const calendarMain = new VanillaCalendar("#calendar", options);
		calendarMain.init();
	},
	{ once: true }
);

function dataConvert(date) {
	var d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2)
		month = '0' + month;
	if (day.length < 2)
		day = '0' + day;

	return [year, month, day].join('-');
}