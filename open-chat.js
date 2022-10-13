function openChat(countryCode, phoneNumber) {
    let newURL = "https://wa.me/+" + countryCode + phoneNumber
    chrome.tabs.create({ url: newURL })
}