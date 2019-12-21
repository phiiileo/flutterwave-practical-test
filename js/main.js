let fname = document.querySelector("#fname").value;
let lname = document.querySelector("#lname").value;
let p_num = document.querySelector("#p_num").value;
let bvn = document.querySelector("#bvn").value;

console.log(fname, lname, p_num, bvn);

let tokenKey = 'FLWSECK-ac920ae15dd1d0241a19b49fbeea4113-X'
let request = new XMLHttpRequest();
let api = "https://ravesandboxapi.flutterwave.com/v2/kyc/bvn/" + bvn + "?seckey=" + tokenKey;
request.open("GET", api, true);
request.onload = function () {
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        let matchAll = fname == data.data.first_name && lname == data.data.last_name && p_num == data.data.phone_number;
        console.log(data.data.first_name, data.data.last_name, data.data.phone_number)

        if (matchAll != true) {
            let n;
           (fname != data.data.first_name) ? n = "_fname" : "not_name";
           (lname != data.data.last_name) ? n = "_lname" : "not_name";
           (p_num != data.data.phone_number) ? n = "_num" : "not num";
           (bvn != data.data.bvn) ? n = "bvn" : "not bvn";
            let errorMessage;

            switch (n) {
                case "_fname": {
                    errorMessage = "The first name does not match the bvn provided" + "<p>"+fname+"<span id='red'>does not match</span></p>";
                    break;
                }
                case "_lname": {
                    errorMessage = "The last name does not match the bvn provided" + "<p>"+lname+"<span id='red'>does not match</span></p>";
                    break;
                }
                case "_num": {
                    errorMessage = "The number does not match the bvn provided" + "<p>"+ p_num +"<span id='red'>does not match</span></p>";
                    break;
                }
                case "bvn": {
                    errorMessage = "BVN not found" + "<p>"+bvn+"<span id='red'>does not EXIST</span></p>";
                    break;
                }

            }
            result.innerHTML = "<h3 class='head'>RESULT </h3>"
            result.innerHTML += "<p>" + errorMessage + "</p>"
        }
        else {
            result.innerHTML = "<h3 class='head'>RESULT </h3>"
            result.innerHTML += "<p>Details Found</p>"
            result.innerHTML += "<p>Your name : &nbsp;" + fname + " "+data.data.middle_name +" "+  lname + "</p>";
            result.innerHTML += "<p>Your Number: &nbsp;" + p_num + "</p>";
            result.innerHTML += "<p>Your D.O.B: &nbsp;" +data.data.date_of_birth + "</p>";
            result.innerHTML += "<p>Your Gender: &nbsp;" + data.data.gender + "</p>";
            result.innerHTML += "<p>Your Nationality: &nbsp;" + data.data.nationality + "</p>";
            result.innerHTML += "<p>Your Bank Branch: &nbsp; Access, " + data.data.enrollment_branch + ". </p>";
            result.innerHTML += "<p>Your BVN is <span id='status'>Valid</span>";
        }

    }
    else {
        result.innerHTML = " <h4><span id='e500'>ERROR 500</span> <br>Please make sure you enter a valid BVN</h4>";
        result.innerHTML +="<h4>OR<br> This might be a server error. Try again later!</h4>"
        result.innerHTML += "<h5>Return<a href='index.php'><i class='fa fa-arrow-left'></i></a></h5>"
    }
}
request.send();


// let api ="https://ravesandboxapi.flutterwave.com/v2/kyc/bvn/12345678901?seckey=FLWSECK-af1ff421c70907112ba55815f89710ea-X";
// Wendy Rhoades 08012345678
