<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Verify BVN</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="./css/main.css">
</head>

<body>
    <main>
        <section class="container">
            <div class="lead">
                <h3>Welcome, Verify your BVN with flutterwave today!</h3>
                <a href="<?php $_SERVER["PHP_SELF"]?>">Home</a>
            </div>
            <div id="form_container">
                <form action="./result.php" id="form1" method="POST" >
                    <div class="form-head">
                        <h3> Input the follow details...</h3>
                        <p>All <span>*</span> are required</p>
                    </div>
                    <div class="form_container_inner">
                        <div class="form-group">
                            <label for="firstname">Firstname:</label> <span class="error_message"> </span>
                            <li class="input-control">
                                <input type="text" id="fname" name="firstname" value=""
                                    placeholder="Enter your firstname..." required><i class="fa fa-user"></i>
                            </li>
                        </div>
                        <div class="form-group">
                            <label for="lastname">Lastname:</label> <span class="error_message"> </span>
                            <li class="input-control">
                                <input type="text" id="lname" name="lastname" value=""
                                    placeholder="Enter your lastname..." required><i class="fa fa-user"></i></li>

                        </div>
                        <div class="form-group">
                            <label for="email">Phone Number:</label> <span class="error_message"> </span>
                            <li class="input-control">
                                <input type="text" id="phone_number" 
                                name="phone_number"
                                value=""
                                    placeholder="Enter your phone number..." required><i class="fa fa-phone"></i></li>

                        </div>
                        <div class="form-group">
                            <label for="bvn">BVN:</label> <span class="error_message"> </span>
                            <li class="input-control">
                                <input type="text" id="bvn" name="bvn" value=""
                                    placeholder="Enter your bvn..." required><i class="fa fa-mask"></i></li>

                        </div>
                        <div class="form-group">
                            <input  type="submit" value="Verify" id="submit" class="submit" />
                            <input type="reset" value="Reset" class="reset" />
                            <p>Would like to use Flutterwave Products? <a href="https://flutterwave.com/ng/online-payments-products/rave/" target="_blank"> Click here</a></p>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </main>
</body>

</html>