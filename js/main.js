let fname = document.querySelector("#fname").value;
let lname = document.querySelector("#lname").value;
let p_num = document.querySelector("#phone_number").value;
let bvn = document.querySelector("#bvn").value;
let result = document.querySelector("#result");
let submit = document.querySelector("#submit");
let form = document.querySelector("#form_container");
let control = document.querySelector("#control");

console.log(fname, lname, p_num, bvn, result, form);

submit.addEventListener("click", function () {
    if (form.style.display == "none") {
        form.style.display = "block";
        console.log(result.style.marginTop = "400px")

    } else {
        form.style.display = "none";
        control.style.display = "block"
        console.log(result.style.marginTop = "50px")
    }


    let tokenKey = 'FLWSECK-af1ff421c70907112ba55815f89710ea-X'
    let request = new XMLHttpRequest();
    let api = "https://ravesandboxapi.flutterwave.com/v2/kyc/bvn/" + bvn + "?seckey=" + tokenKey;
    request.open("GET", api, true);
    request.onload = function () {
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            let matchAll = fname == data.data.first_name && lname == data.data.last_name && p_num == data.data.phone_number;
            if (matchAll != true) {
                result.innerHTML = "<h3 class='head'>RESULT </h3>"
                result.innerHTML += "<p>Details Not Found</p>"
                result.innerHTML += "<p>Your BVN is <span id='red'>Invalid</span>";
            }
            else {
                result.innerHTML = "<h3 class='head'>RESULT </h3>"
                result.innerHTML += "<p>Details Found</p>"
                result.innerHTML += "<p>Your name : &nbsp;" + fname + " " + lname + "</p>";
                result.innerHTML += "<p>Your Number: &nbsp;" + p_num + "</p>";
                result.innerHTML += "<p>Your D.O.B: &nbsp;" + 34 + "</p>";
                result.innerHTML += "<p>Your BVN is <span id='status'>Valid</span>";
            }

        }
        else {
            alert("Something is Wrong with the server!, TRY AGAIN.")
        }
    }


    request.send();

})
document.querySelector("#close").addEventListener("click", () => {
    if (form.style.display == "none") {
        control.style.display = "none"
        form.style.display = "block";
        console.log(result.style.marginTop = "400px")

    } else {
        control.style.display = "block"
        form.style.display = "none";
        console.log(result.style.marginTop = "50px")
    }
})

// let api ="https://ravesandboxapi.flutterwave.com/v2/kyc/bvn/12345678901?seckey=FLWSECK-af1ff421c70907112ba55815f89710ea-X";
