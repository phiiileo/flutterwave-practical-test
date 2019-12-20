<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Pay For Ride</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="css/payNow.css">
</head>

<body>
    <main>
        <header>
            <nav class="menu">
                <ul class="menu_items">
                    <li class="menu_items_link"><a href="#">Home</a></li>
                    <li class="menu_items_link"><a href="#">About</a></li>
                    <li class="menu_items_link"><a href="#">Contact</a></li>
                    <li class="menu_items_link"><a href="#"><i class="fa fa-user-circle"></i></a></li>
                </ul>
            </nav>
            <aside class="brand"><a href="">
                <i class="fa fa-motorcycle"></i>RideSave</a></aside>
        </header>

        <section class="content">
            <div class="content_lead">
                <h3 id="headd">Ride was Successful</h3> <br>
                <i class="fa fa-motorcycle"></i>RideSave</a></aside>

            </div>
            <div class="content_payNow">
                <form id="form1">
                    <div class="form-group">
                        <label for="R_name">Rider's Name & Id:</label>
                        <input type="text" value="John Wilson" id="R_name" placeholder="Enter your email here..."
                            disabled>
                        <input type="text" value="AJW561" name="R_id" id="R_id" disabled>
                    </div>
                    <div class="form-group">
                        <label for="C_name">Customer's Name:</label>
                        <input type="text" id="C_name" value="" placeholder="Enter name here..." required>
                    </div>
                    <div class="form-group">
                        <label for="email">Customer's Email:</label>
                        <input type="email" id="email" value="" placeholder="Enter your email here..." required>
                    </div>
                    <div class="form-group">
                        <label for="amount">Ride Price (&#8358;):</label>
                        <input type="number" value="" id="amount" placeholder="Enter Amount here..." disabled>
                    </div>

                    <script src="https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js"></script>
                    <button type="button" onClick="payWithRave()">Pay Now</button>
                </form>
               

            </div>
        </section>
        </section>
    </main>
    <script src="https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js"></script>

    <script src="js/try.js"></script>
</body>


</html>