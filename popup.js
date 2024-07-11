function getCurrentTab(callback) {
	let queryOptions = { active: true, lastFocusedWindow: true };
	chrome.tabs.query(queryOptions, ([tab]) => {
		if (chrome.runtime.lastError) console.error(chrome.runtime.lastError);
		// `tab` will either be a `tabs.Tab` instance or `undefined`.
		callback(tab);
	});
}

document.addEventListener("DOMContentLoaded", () => {
	const calendar = new VanillaCalendar("#calendar");
	calendar.init();
});

chrome.runtime.onMessage.addListener((mess) => {
	console.log(mess);
});
