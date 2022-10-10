document.addEventListener('DOMContentLoaded', function () {
    let countryCode = document.getElementById('country-code')
    let phoneNumber = document.getElementById('number')
    let btn = document.getElementById('button');

    btn.addEventListener('click', function(activeTab){
        let newURL = "https://wa.me/+" + countryCode.value + phoneNumber.value
        // alert(newURL)
        chrome.tabs.create({ url: newURL })
    });
});