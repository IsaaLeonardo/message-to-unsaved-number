document.addEventListener('DOMContentLoaded', function () {
    let btn = document.getElementById('button');
    btn.addEventListener('click', function(activeTab){
        let newURL = "https://wa.me/+584141803713";
        chrome.tabs.create({ url: newURL })
    });
});