function getCurrentTab(callback) {
	let queryOptions = { active: true, lastFocusedWindow: true };
	chrome.tabs.query(queryOptions, ([tab]) => {
		if (chrome.runtime.lastError) console.error(chrome.runtime.lastError);
		// `tab` will either be a `tabs.Tab` instance or `undefined`.
		callback(tab);
	});
}
const upflyb24 = "https://upfly.bitrix24.ru/";

chrome.runtime.onInstalled.addListener(() => {
	chrome.action.setBadgeText({
		text: "OFF",
	});
	getCurrentTab((tab) => {
		if (tab.url.startsWith(upflyb24)) {
			chrome.action.setBadgeText({
				tabId: tab.id,
				text: "ON",
			});
			chrome.action.enable();
			chrome.action.setPopup({
				popup: "popup.html",
			});
		} else {
			chrome.action.disable();
		}
	});
});

chrome.tabs.onActivated.addListener(() => {
	getCurrentTab((tab) => {
		if (tab.url.startsWith(upflyb24)) {
			chrome.action.enable();
			chrome.action.setBadgeText({
				tabId: tab.id,
				text: "ON",
			});
			chrome.action.setPopup({
				popup: "popup.html",
			});
		} else {
			chrome.action.disable();
		}
	});
});
