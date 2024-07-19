document.querySelector("#task-time-switcher").addEventListener(
	"click",
	(e) => {
		const table = document.querySelector("#task-time-table");
		const trs = table.querySelectorAll("tr");
		const arrayElementTimes = [...trs].splice(1, [...trs].length - 3);

		let arrayTimes = [];
		let manualTimes = [];

		arrayElementTimes.forEach((el) => {
			let start = el.querySelector(
				".task-time-date-column .task-time-date"
			).innerHTML;
			let author = el.querySelector(
				".task-time-author-column .task-log-author"
			).innerHTML;
			let time = el.querySelector(".task-time-spent-column").innerText;
			if (el.classList.contains("task-time-table-manually")) {
				manualTimes.push({ start: start, author: author, time: time });
			}
			else {
				arrayTimes.push({ start: start, author: author, time: time });
			}
		});

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
		listBtns.append(logoMain);

		// скрытие
		const btnHide = document.createElement("div");
		btnHide.classList.add("btnHide");
		btnHide.id = "btnHide";
		btnHide.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9202 12.7988C15.9725 12.5407 16 12.2736 16 12C16 9.79086 14.2091 8 12 8C11.7264 8 11.4593 8.02746 11.2012 8.07977L15.9202 12.7988ZM8.66676 9.78799C8.24547 10.4216 8 11.1821 8 12C8 14.2091 9.79086 16 12 16C12.8179 16 13.5784 15.7545 14.212 15.3332L8.66676 9.78799Z" fill="#222222"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7872 16.9085L6.85842 7.97974C5.54385 8.96489 4.48541 10.1167 3.81198 10.9343C3.42382 11.4056 3.22974 11.6412 3.22974 12C3.22974 12.3588 3.42382 12.5944 3.81198 13.0657C5.23207 14.7899 8.36428 18 12 18C13.3529 18 14.636 17.5555 15.7872 16.9085ZM9.57695 6.45563C10.3479 6.17115 11.1605 6 12 6C15.6357 6 18.768 9.21014 20.188 10.9343C20.5762 11.4056 20.7703 11.6412 20.7703 12C20.7703 12.3588 20.5762 12.5944 20.188 13.0657C19.7137 13.6416 19.0484 14.3833 18.2371 15.1157L9.57695 6.45563Z" fill="#2A4157" fill-opacity="0.24"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9202 12.7988C15.9725 12.5407 16 12.2736 16 12C16 9.79086 14.2091 8 12 8C11.7264 8 11.4593 8.02746 11.2012 8.07977L15.9202 12.7988ZM8.66676 9.78799C8.24547 10.4216 8 11.1821 8 12C8 14.2091 9.79086 16 12 16C12.8179 16 13.5784 15.7545 14.212 15.3332L8.66676 9.78799Z" fill="#222222"></path> <path d="M8 5L20 17" stroke="#222222" stroke-width="1.2"></path> </g></svg>`;
		btnHide.addEventListener("click", (e) => {
			if (document.querySelector("#app").classList.contains("hiddenPlus")) {
				btnHide.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9202 12.7988C15.9725 12.5407 16 12.2736 16 12C16 9.79086 14.2091 8 12 8C11.7264 8 11.4593 8.02746 11.2012 8.07977L15.9202 12.7988ZM8.66676 9.78799C8.24547 10.4216 8 11.1821 8 12C8 14.2091 9.79086 16 12 16C12.8179 16 13.5784 15.7545 14.212 15.3332L8.66676 9.78799Z" fill="#222222"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7872 16.9085L6.85842 7.97974C5.54385 8.96489 4.48541 10.1167 3.81198 10.9343C3.42382 11.4056 3.22974 11.6412 3.22974 12C3.22974 12.3588 3.42382 12.5944 3.81198 13.0657C5.23207 14.7899 8.36428 18 12 18C13.3529 18 14.636 17.5555 15.7872 16.9085ZM9.57695 6.45563C10.3479 6.17115 11.1605 6 12 6C15.6357 6 18.768 9.21014 20.188 10.9343C20.5762 11.4056 20.7703 11.6412 20.7703 12C20.7703 12.3588 20.5762 12.5944 20.188 13.0657C19.7137 13.6416 19.0484 14.3833 18.2371 15.1157L9.57695 6.45563Z" fill="#2A4157" fill-opacity="0.24"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9202 12.7988C15.9725 12.5407 16 12.2736 16 12C16 9.79086 14.2091 8 12 8C11.7264 8 11.4593 8.02746 11.2012 8.07977L15.9202 12.7988ZM8.66676 9.78799C8.24547 10.4216 8 11.1821 8 12C8 14.2091 9.79086 16 12 16C12.8179 16 13.5784 15.7545 14.212 15.3332L8.66676 9.78799Z" fill="#222222"></path> <path d="M8 5L20 17" stroke="#222222" stroke-width="1.2"></path> </g></svg>`;
				document.querySelector("#app").classList.remove("hiddenPlus");
			} else {
				btnHide.innerHTML = `
				<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.188 10.9343C20.5762 11.4056 20.7703 11.6412 20.7703 12C20.7703 12.3588 20.5762 12.5944 20.188 13.0657C18.7679 14.7899 15.6357 18 12 18C8.36427 18 5.23206 14.7899 3.81197 13.0657C3.42381 12.5944 3.22973 12.3588 3.22973 12C3.22973 11.6412 3.42381 11.4056 3.81197 10.9343C5.23206 9.21014 8.36427 6 12 6C15.6357 6 18.7679 9.21014 20.188 10.9343Z" fill="#2A4157" fill-opacity="0.24"></path> <circle cx="12" cy="12" r="3" fill="#222222"></circle> </g></svg>`;
				document.querySelector("#app").classList.add("hiddenPlus");
			}
		});
		listBtns.append(btnHide);

		const input = document.createElement("input");
		input.type = "checkbox";
		input.classList.add("checkbox");
		input.addEventListener("click", (e) => {
			if (e.target.checked) {
				calendarOneDay.classList.add("d-none");
				calendarInterval.classList.remove("d-none");
			} else {
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
		const list = document.createElement("ul");
		list.id = "list";

		// календарь с выбором одного дня
		const calendarOneDay = document.createElement("div");
		calendarOneDay.id = "calendarOneDay";

		// календарь с выбором промежутка
		const calendarInterval = document.createElement("div");
		calendarInterval.id = "calendarInterval";
		calendarInterval.classList.add("d-none");

		// создание приложения
		const app = document.createElement("div");
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
					let filtredArray = filterArrayByDay(arrayTimes, filterDate);
					let filtredManualArray = filterArrayByDay(manualTimes, filterDate);

					const objUser = {};
					let totalTime = 0;
					let totalManualTime = 0
					if (filtredArray.length) {
						let timeCount = 0;
						filtredArray.forEach((el) => {
							let time = el.time.split(":").map(el => Number(el));
							if (!Object.hasOwn(objUser, [el.author])) {
								objUser[el.author] = { time: 0 };
							}
							// objUser[el.author] = {};
							let step = ((Number(time[0]) * 60 * 60) + Number(time[1] * 60) + time[2]);
							timeCount += step
							objUser[el.author]["time"] = timeCount;
							totalTime += step;
						});
					}

					if (filtredManualArray.length) {
						let timeCount = 0;
						filtredManualArray.forEach((el) => {
							let time = el.time.split(":").map(el => Number(el));
							if (!Object.hasOwn(objUser, [el.author])) {
								objUser[el.author] = {};
							}
							let step = ((Number(time[0]) * 60 * 60) + Number(time[1] * 60) + time[2]);
							timeCount += step;
							objUser[el.author]["manual"] = timeCount;
							totalManualTime += step;
						});
					}

					let renderArr = [];
					for (const key in objUser) {
						const val = objUser[key];
						const [sec, min, hour] = getSecMinHour(val.time);
						const [secManual, minManual, hourManual] = getSecMinHour(val.manual)

						let strTime = "0";
						if (hour || min || sec) strTime = convertToString(sec, min, hour);

						let strManualTime = "";
						if (hourManual || minManual || secManual) strManualTime = '(+' + convertToString(secManual, minManual, hourManual) + ')';

						renderArr.push({
							name: key,
							time: strTime,
							manualTime: strManualTime,
						});
					}

					const listDOM = document.createElement("ul");
					renderArr.forEach((el) => {
						const item = document.createElement("li");
						const name = document.createElement("span");
						name.innerText = el.name;
						const time = document.createElement("span");
						if (el.manualTime) {
							time.innerText = el.time + " " + el.manualTime;
						}
						else {
							time.innerText = el.time;
						}
						time.classList.add("time");
						item.append(name);
						item.append(time);
						listDOM.append(item);
					});

					if (filtredManualArray.length || filtredArray.length) {
						const item = document.createElement("li");
						const name = document.createElement("span");
						name.innerText = "Всего:";
						const time = document.createElement("span");
						if (totalManualTime) {
							time.innerText = convertToString(...getSecMinHour(totalTime)) + " (+" + convertToString(...getSecMinHour(totalManualTime)) + ")";
						}
						else {
							time.innerText = convertToString(...getSecMinHour(totalTime));
						}
						time.classList.add("time");
						item.append(name);
						item.append(time);
						listDOM.append(item);
					}
					list.innerHTML = listDOM.innerHTML;
				},
			},
			settings: {
				lang: "ru-RU",
				visibility: {
					daysOutside: false,
				},
			},
		};
		const calendarOneDayIo = new VanillaCalendar("#calendarOneDay", optionsOneDay);
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
					if (self.selectedDates[0] != undefined && self.selectedDates.length > 1) {
						//фильтр по дням
						let filterDateArr = [];
						self.selectedDates.forEach((e) => {
							filterDateArr.push(Math.trunc(Date.parse(e) / 1000 / 60 / 60 / 24));
						});

						let filtredArray = arrayTimes.filter((e) => {
							let dateArr = e.start.split(" ")[0].split(".");
							let newDateFormatStart = new Date(dateArr[2] + "-" + dateArr[1] + "-" + dateArr[0] + " " + e.start.split(" ")[1]);
							if (filterDateArr.indexOf(Math.trunc(newDateFormatStart.getTime() / 1000 / 60 / 60 / 24)) !== -1) return e;
						});

						let filtredManualArray = manualTimes.filter((e) => {
							let dateArr = e.start.split(" ")[0].split(".");
							let newDateFormatStart = new Date(dateArr[2] + "-" + dateArr[1] + "-" + dateArr[0] + " " + e.start.split(" ")[1]);
							if (filterDateArr.indexOf(Math.trunc(newDateFormatStart.getTime() / 1000 / 60 / 60 / 24)) !== -1) return e;
						});

						const objUser = {};
						let totalTime = 0;
						let totalManualTime = 0
						if (filtredArray.length) {
							let timeCount = 0;
							filtredArray.forEach((el) => {
								let time = el.time.split(":").map(el => Number(el));
								if (!Object.hasOwn(objUser, [el.author])) {
									objUser[el.author] = { time: 0 };
								}
								timeCount += ((Number(time[0]) * 60 * 60) + Number(time[1] * 60) + time[2]);
								objUser[el.author]["time"] += ((Number(time[0]) * 60 * 60) + Number(time[1] * 60) + time[2]);
								totalTime += ((Number(time[0]) * 60 * 60) + Number(time[1] * 60) + time[2]);
							});
						}

						if (filtredManualArray.length) {
							let timeCount = 0;
							filtredManualArray.forEach((el) => {
								let time = el.time.split(":").map(el => Number(el));
								if (!Object.hasOwn(objUser, [el.author])) {
									objUser[el.author] = {};
								}
								let step = ((Number(time[0]) * 60 * 60) + Number(time[1] * 60) + time[2]);
								timeCount += step;
								objUser[el.author]["manual"] = timeCount;
								totalManualTime += step;
							});
						}

						let renderArr = [];
						for (const key in objUser) {
							const val = objUser[key];
							const [sec, min, hour] = getSecMinHour(val.time);
							const [secManual, minManual, hourManual] = getSecMinHour(val.manual)

							let strTime = "0";
							if (hour || min || sec) strTime = convertToString(sec, min, hour);

							let strManualTime = "";
							if (hourManual || minManual || secManual) strManualTime = '(+' + convertToString(secManual, minManual, hourManual) + ')';

							renderArr.push({
								name: key,
								time: strTime,
								manualTime: strManualTime,
							});
						}

						const listDOM = document.createElement("ul");
						renderArr.forEach((el) => {
							const item = document.createElement("li");
							const name = document.createElement("span");
							name.innerText = el.name;
							const time = document.createElement("span");
							if (el.manualTime) {
								time.innerText = el.time + " " + el.manualTime;
							}
							else {
								time.innerText = el.time;
							}
							time.classList.add("time");
							item.append(name);
							item.append(time);
							listDOM.append(item);
						});
						if (filtredManualArray.length || filtredArray.length) {
							const item = document.createElement("li");
							const name = document.createElement("span");
							name.innerText = "Всего:";
							const time = document.createElement("span");
							if (totalManualTime) {
								time.innerText = convertToString(...getSecMinHour(totalTime)) + " (+" + convertToString(...getSecMinHour(totalManualTime)) + ")";
							}
							else {
								time.innerText = convertToString(...getSecMinHour(totalTime));
							}
							time.classList.add("time");
							item.append(name);
							item.append(time);
							listDOM.append(item);
						}
						list.innerHTML = listDOM.innerHTML;
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

function getSecMinHour(time) {
	return [time % 60, parseInt(time / 60) % 60, parseInt(parseInt(time / 60) / 60)];
}

function filterArrayByDay(arr, date) {
	return arr.filter((e) => {
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
			Math.trunc(date / 1000 / 60 / 60 / 24)
		) {
			return e;
		}
	});
}

function convertToString(sec, min, hour) {
	return `${String(hour).padStart(2, "0")}:${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`
}