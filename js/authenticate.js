let inputValue = document.querySelectorAll(".form-control");
let errorContainer = document.querySelectorAll(".error_message");

inputValue.forEach((input, index) => {
    inputValue[index].addEventListener("input", isValid)
    function isValid() {

        const myregex = /[^a-z0-9]/ig;
        const myregex2 = /[a-z]/ig;
        const result = myregex.test(input.value);
        const result2 = myregex2.test(input.value);
        let errorMessage;
        if (result) {
            errorMessage = "Enter a valid value"
        }
        else {
            if ((inputValue[index] == inputValue[2] || inputValue[index] == inputValue[3]) && result2) {
                errorMessage = "Enter a valid value"
            }
            else {
                errorMessage = "Valid";
                errorContainer[index].style.color = "green";
            }

        }
        errorContainer[index].innerHTML = errorMessage
    }
})

let submitbtn = document.querySelector("#submit");
document.querySelector("#submit").addEventListener("click", function (event) {
    let status = []
    for (let i = 0; i < errorContainer.length; i++) {
        status.push(errorContainer[i].innerHTML);
    }
    let final_status = status.indexOf("Enter a valid value");
    if (final_status > 0) {
        event.preventDefault();
        alert("Please fill all forms accordingly!")
    }
    else {
        true;
    }

})