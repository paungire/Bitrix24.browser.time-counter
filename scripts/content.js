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
					//фильтр по дням
					let filterDate = Date.parse(self.selectedDates[0]);
					let filtredArray = arrayTimes.filter((e) => {
						let dateArr = e.start.split(" ")[0].split(".");
						let newDateFormatStart = new Date(
							dateArr[2] +
								"-" +
								dateArr[1] +
								"-" +
								dateArr[0] +
								" " +
								e.start.split(" ")[1]
						);
						if (
							Math.trunc(newDateFormatStart.getTime() / 1000 / 60 / 60 / 24) ===
							Math.trunc(filterDate / 1000 / 60 / 60 / 24)
						) {
							return e;
						}
					});

					let preFinalArr = [];
					filtredArray.forEach((el) => {
						let timeArr = el.time.split(":");
						preFinalArr[el.author] =
							(preFinalArr[el.author] ?? 0) +
							parseInt(timeArr[0]) * 60 * 60 +
							parseInt(timeArr[1]) * 60 +
							parseInt(timeArr[2]);
					});

					console.log(preFinalArr);

					let finalArr = [];
					for (const key in preFinalArr) {
						if (Object.hasOwnProperty.call(object, key)) {
							const val = preFinalArr[key];

							let sec = (val % 60).padStart(2, "0");
							let min = (parseInt(val / 60) % 60).padStart(2, "0");
							let hour = parseInt(parseInt(val / 60) / 60).padStart(2, "0");

							finalArr[key] = `${hour}:${min}:${sec}`;
						}
					}

					console.log(finalArr);
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
