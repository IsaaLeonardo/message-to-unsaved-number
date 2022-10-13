document.addEventListener('DOMContentLoaded', function () {
    let countryCode = document.getElementById('country-code')
    let phoneNumber = document.getElementById('number')
    let btn = document.getElementById('button');

    // When submit button is pressed:
    btn.addEventListener('click', function(activeTab){
        openChat(countryCode.value, phoneNumber.value)
    });

    // When enter key is pressed:
    document.getElementById("myForm").onkeypress = function(e) {
        var key = e.charCode || e.keyCode || 0;     
        if (key == 13) {
            e.preventDefault();
            openChat(countryCode.value, phoneNumber.value)
        }
      }
});