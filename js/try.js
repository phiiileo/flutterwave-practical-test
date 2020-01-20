const API_publicKey = "FLWPUBK_TEST-b1f4091be7b303ce1acd4479f8b43694-X";
let rider, rider_id, customer_name, customer_mail, ride_amnt, output;
rider = document.querySelector("#R_name").value;
rider_id = document.querySelector("#R_id").value;
customer_name = document.querySelector("#C_name").value;
customer_mail = document.querySelector("#email").value;
output = document.querySelector(".content_payNow");
let output_head = document.querySelector("#headd");

console.log(rider, rider_id, customer_name, customer_mail)
ride_amnt = Math.floor(Math.random() * 10000 + 1000);
document.querySelector("#amount").value = ride_amnt;

function payWithRave() {
    customer_name = document.querySelector("#C_name").value;
    customer_mail = document.querySelector("#email").value;
        let test1 = Math.floor(Math.random() * 100000 + 1)
    var x = getpaidSetup({
        PBFPubKey: API_publicKey,
        customer_email: customer_mail,
        amount: ride_amnt,
        currency: "NGN",
        txref: "rave-"+test1,
        subaccounts: [
            {
                id: "RS_671829CA29B44D1C15A46590E904516D",
                transaction_split_ratio: "6"
            }
        ],
        meta: [{
            metaname: "flightID",
            metavalue: "AP1234"
        }],
        onclose: function () { },
        callback: function (response) {
            var txref = response.tx.txRef;
            console.log("This is the response returned after a charge", response.tx.amount);
            if (
                response.tx.chargeResponseCode == "00" ||
                response.tx.chargeResponseCode == "0"
            ) {
            output_head.innerHTML = "Payment was successfull"
                let customer_share = (ride_amnt * 80 / 100).toFixed(2);
                let company_share = (ride_amnt * 20 / 100).toFixed(2);
                let table = (
                    "<table id='myTable'><tr><th>S/N</th><th>Key</th><th>Value</th></tr>" +
                    "<tr><td>1</td><td>Driver's ID</td><td>" + rider_id + "</td></tr>" +
                    "<tr><td>2</td><td>Driver's Name</td><td>" + rider + "</td></tr>" +
                    "<tr><td>3</td><td>Customer's Name</td><td>" + customer_name + "</td>" +
                    "<tr><td>4</td><td>Customer's Email</td><td>" + customer_mail + "</td></tr>" +
                    "<tr><td>5</td><td>Ride Price (&#8358;)</td><td>" + ride_amnt + "</td >" +
                    "<tr><td>6</td><td>Driver's Share (&#8358;)80%</td><td>" + customer_share + "</td >" +
                    "<tr><td>7</td><td>Company's Share (&#8358;)20%</td><td>" + company_share + "</td >" +
                    "</table>")
                output.innerHTML = table;
            } else {
                // document.querySelector("#headd").innerHTML = "Payment was not successful"
                // output.innerHTML = "<h3 style='color:red'>Something went wrong</h3>"
            }

            x.close(); // use this to close the modal immediately after payment.
        }
    });
}
