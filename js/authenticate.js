let inputValue = document.querySelectorAll(".form-control");
let errorContainer = document.querySelectorAll(".error_message");

inputValue.forEach((input, index) => {
    inputValue[index].addEventListener("input", isValid)
    function isValid(event) {

        const myregex = /[^a-z0-9]/ig;
        const myregex2 = /[a-z]/ig;
        const result = myregex.test(input.value);
        const result2 = myregex2.test(input.value);
        let errorMessage;
        if (result) {
            errorMessage = "<span style='color: red'>Enter a valid value</span>"
        }
        else {
            ((inputValue[index] == inputValue[2] || inputValue[index] == inputValue[3]) && result2) ?
                errorMessage = "<span style='color: red'>Enter a valid value</span>" :
                errorMessage = "<span style='color: green'>Valid</span>"


        }
        errorContainer[index].innerHTML = errorMessage
    }
})