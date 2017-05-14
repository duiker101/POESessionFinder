if (!chrome.cookies) {
    chrome.cookies = chrome.experimental.cookies;
}

function copyToClipboard(text) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
}

function copyID() {
    chrome.cookies.get({'name': 'POESESSID', 'url': "https://pathofexile.com"}, function (a) {
        copyToClipboard(a.value)
    });
}

chrome.browserAction.onClicked.addListener(function (tab) {
    copyID();
});

chrome.contextMenus.onClicked.addListener(function (tab) {
    copyID();
});

var context = "page";
var title = "Copy Session ID";
var id = chrome.contextMenus.create({
    "id": "poe_sess_id_finder_1",
    "documentUrlPatterns": ["*://*.pathofexile.com/*"],
    "title": title,
    "contexts": [context]
});

