document.querySelector("#task-time-switcher").addEventListener(
	"click",
	(e) => {
		// сбор данных
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
		}); // *return arrayTimes
		console.log(arrayTimes);

		// функциональные кнопки
		const listBtns = document.createElement("div");
		listBtns.classList.add("listBtns");

		// выбор календаря
		const button = document.createElement("div");
		button.classList.add("button");
		button.classList.add("r");
		button.id = "button-1";
		listBtns.append(button);

		// заголовок
		const logoMain = document.createElement("div");
		logoMain.classList.add("logoMain");
		logoMain.innerHTML = `🐸`;
		listBtns.append(logoMain);

		// скрытие
		const btnHide = document.createElement("div");
		btnHide.classList.add("btnHide");
		btnHide.id = "btnHide";
		btnHide.innerHTML = `
		<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M6.8874 5.17157C7.46546 4.59351 7.75449 4.30448 8.12203 4.15224C8.48957 4 8.89832 4 9.71582 4H14.326C15.1517 4 15.5646 4 15.9351 4.15505C16.3056 4.31011 16.5954 4.60419 17.175 5.19234L18.849 6.89105C19.4171 7.46745 19.7011 7.75566 19.8505 8.12024C20 8.48482 20 8.88945 20 9.69871V14.3431C20 15.1606 20 15.5694 19.8478 15.9369C19.6955 16.3045 19.4065 16.5935 18.8284 17.1716L17.1716 18.8284C16.5935 19.4065 16.3045 19.6955 15.9369 19.8478C15.5694 20 15.1606 20 14.3431 20H9.69871C8.88945 20 8.48482 20 8.12024 19.8505C7.75566 19.7011 7.46745 19.4171 6.89105 18.849L5.19235 17.175C4.60419 16.5954 4.31011 16.3056 4.15505 15.9351C4 15.5646 4 15.1517 4 14.326V9.71583C4 8.89832 4 8.48957 4.15224 8.12203C4.30448 7.75449 4.59351 7.46546 5.17157 6.8874L6.8874 5.17157Z" fill="#2A4157" fill-opacity="0.24" stroke="#222222" stroke-width="1.2"/>
		<path d="M8 11L8.42229 11.2111C10.6745 12.3373 13.3255 12.3373 15.5777 11.2111L16 11" stroke="#222222" stroke-width="1.2" stroke-linecap="round"/>
		<path d="M12 12.5V14" stroke="#222222" stroke-width="1.2" stroke-linecap="round"/>
		<path d="M9 12L8.5 13" stroke="#222222" stroke-width="1.2" stroke-linecap="round"/>
		<path d="M15 12L15.5 13" stroke="#222222" stroke-width="1.2" stroke-linecap="round"/>
		</svg>`;
		btnHide.addEventListener("click", (e) => {
			if (document.querySelector("#app").classList.contains("hiddenPlus")) {
				document.querySelector("#app").classList.remove("hiddenPlus");
			} else {
				document.querySelector("#app").classList.add("hiddenPlus");
			}
		});
		listBtns.append(btnHide);

		const input = document.createElement("input");
		input.type = "checkbox";
		input.classList.add("checkbox");
		input.addEventListener("click", (e) => {
			if (e.target.checked) {
				console.log("multy");
				calendarOneDay.classList.add("d-none");
				calendarInterval.classList.remove("d-none");
			} else {
				console.log("day");
				calendarOneDay.classList.remove("d-none");
				calendarInterval.classList.add("d-none");
			}
		});
		button.append(input);

		const knobs = document.createElement("div");
		knobs.classList.add("knobs");
		button.append(knobs);

		const layer = document.createElement("div");
		layer.classList.add("layer");
		button.append(layer);

		// список вывода
		let list = document.createElement("ul");
		list.id = "list";

		// календарь с выбором одного дня
		let calendarOneDay = document.createElement("div");
		calendarOneDay.id = "calendarOneDay";

		// календарь с выбором промежутка
		let calendarInterval = document.createElement("div");
		calendarInterval.id = "calendarInterval";
		calendarInterval.classList.add("d-none");

		// создание приложения
		let app = document.createElement("div");
		app.id = "app";
		app.append(listBtns);
		app.append(calendarOneDay);
		app.append(calendarInterval);
		app.append(list);
		document.body.append(app);

		// инициализация календаря с выбором одного дня
		const optionsOneDay = {
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
					let finalArr = [];
					for (const key in preFinalArr) {
						const val = preFinalArr[key];

						let sec = val % 60;
						let min = parseInt(val / 60) % 60;
						let hour = parseInt(parseInt(val / 60) / 60);

						finalArr.push({
							name: key,
							time: `${String(hour).padStart(2, "0")}:${String(min).padStart(
								2,
								"0"
							)}:${String(sec).padStart(2, "0")}`,
						});
					} //? return finalArr

					let newList = document.createElement("ul");

					finalArr.forEach((el) => {
						let element = document.createElement("li");

						let name = document.createElement("span");
						name.innerText = el.name;
						let time = document.createElement("span");
						time.innerText = el.time;
						time.classList.add("time");

						element.append(name);
						element.append(time);

						newList.append(element);
					});

					list.innerHTML = newList.innerHTML;
				},
			},
			settings: {
				lang: "ru-RU",
				visibility: {
					daysOutside: false,
				},
			},
		};
		const calendarOneDayIo = new VanillaCalendar(
			"#calendarOneDay",
			optionsOneDay
		);
		calendarOneDayIo.init();

		// инициализация календаря с выбором промежутка
		const optionsInterval = {
			settings: {
				lang: "ru-RU",
				selection: {
					day: "multiple-ranged",
				},
				visibility: {
					daysOutside: false,
				},
			},
			actions: {
				clickDay(event, self) {
					if (
						self.selectedDates[0] != undefined &&
						self.selectedDates.length > 1
					) {
						//фильтр по дням
						let filterDateArr = [];
						self.selectedDates.forEach((e) => {
							filterDateArr.push(
								Math.trunc(Date.parse(e) / 1000 / 60 / 60 / 24)
							);
						});
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
								filterDateArr.indexOf(
									Math.trunc(newDateFormatStart.getTime() / 1000 / 60 / 60 / 24)
								) !== -1
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
						let finalArr = [];
						for (const key in preFinalArr) {
							const val = preFinalArr[key];

							let sec = val % 60;
							let min = parseInt(val / 60) % 60;
							let hour = parseInt(parseInt(val / 60) / 60);

							finalArr.push({
								name: key,
								time: `${String(hour).padStart(2, "0")}:${String(min).padStart(
									2,
									"0"
								)}:${String(sec).padStart(2, "0")}`,
							});
						} //? return finalArr

						let newList = document.createElement("ul");

						finalArr.forEach((el) => {
							let element = document.createElement("li");

							let name = document.createElement("span");
							name.innerText = el.name;
							let time = document.createElement("span");
							time.classList.add("time");
							time.innerText = el.time;

							element.append(name);
							element.append(time);

							newList.append(element);
						});

						list.innerHTML = newList.innerHTML;
					}
				},
			},
		};
		const calendarIntervalIo = new VanillaCalendar(
			"#calendarInterval",
			optionsInterval
		);
		calendarIntervalIo.init();
	},
	{ once: true }
);
