<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Result</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="./css/main.css">
    <style>
    .incomingresult {
        display: none;
    }
    </style>
</head>

<body>
    <main>
    <section class="incomingresult">
    <input type="text" id="fname" value="<?php echo $_POST["firstname"]; ?>">
    <input type="text" id="lname" value="<?php echo $_POST["lastname"]; ?>">
    <input type="text" id="p_num" value="<?php echo $_POST["phone_number"]; ?>">
    <input type="text" id="bvn" value="<?php echo $_POST["bvn"]; ?>">
    </section>
        <section class="container">
            <div class="lead">
                <h3>YOUR VERIFICATION RESULT</h3>
                <a href="index.php">Home</a>
            </div>
            <!-- <div id="form_container">
                <form action="./result.html" id="form1" >
                    <div class="form-head">
                        <h3> Input the follow details...</h3>
                        <p>All <span>*</span> are required</p>
                    </div>
                    <div class="form_container_inner">
                        <div class="form-group">
                            <label for="firstname">Firstname:</label> <span class="error_message"> </span>
                            <li class="input-control">
                                <input type="text" id="fname" name="firstname" value="John"
                                    placeholder="Enter your firstname..." required><i class="fa fa-user"></i>
                            </li>
                        </div>
                        <div class="form-group">
                            <label for="lastname">Lastname:</label> <span class="error_message"> </span>
                            <li class="input-control">
                                <input type="text" id="lname" name="lastname" value="Wilson"
                                    placeholder="Enter your lastname..." required><i class="fa fa-user"></i></li>

                        </div>
                        <div class="form-group">
                            <label for="email">Phone Number:</label> <span class="error_message"> </span>
                            <li class="input-control">
                                <input type="text" id="phone_number" value="08100011111"
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
                            <p>Would like to use Flutterwave Products? <a href="#"> Click here</a></p>
                        </div>
                    </div>
                </form>
            </div> -->
            <div id="control"><i class="fa fa-times-circle" id="close"></i></div>
            <div id="result">
            <div class="loading">
                <div class="card"></div>
                Loading...
            </div>
            </div>
        </section>
    </main>
</body>
<script src="js/main.js"></script>

</html>