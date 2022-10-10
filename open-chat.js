document.addEventListener('DOMContentLoaded', function () {
    let phoneNumber = document.getElementById('number')
    let btn = document.getElementById('button');

    btn.addEventListener('click', function(activeTab){
        let numberToChat = phoneNumber.value

        let newURL = "https://wa.me/+58" + numberToChat
        // alert(newURL)
        chrome.tabs.create({ url: newURL })
    });
});