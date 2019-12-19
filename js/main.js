let fname = document.querySelector("#fname").value;
let lname = document.querySelector("#lname").value;
let p_num = document.querySelector("#p_num").value;
let bvn = document.querySelector("#bvn").value;

console.log(fname, lname,p_num,bvn);

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
                result.innerHTML += "<p>The names and details submitted <span id='red'>Does Not Match</span>";
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
            result.innerHTML = " <h4>ERROR 500 <br> Something went wrong with the Server</h4>"
            result.innerHTML += "<h5>Return<a href='index.php'><i class='fa fa-arrow-left'></i></a></h5>"
    }
    }
    request.send();


// let api ="https://ravesandboxapi.flutterwave.com/v2/kyc/bvn/12345678901?seckey=FLWSECK-af1ff421c70907112ba55815f89710ea-X";
