<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forget Password</title>
    <link rel="stylesheet" href="css/forgot.css">

</head>
<body>
    <div class="password-reset-container">
        <h2>Forget Password</h2>
        <p>Please enter your email address to reset your password.</p>
        <form id="password-reset-form" method="POST" action="reset_password.php">
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" required>
            </div>
            <div class="form-group">
                <button type="submit" name="reset-password">Reset Password</button>
            </div>
            <div class="error-message" id="error-message">
                <?php
                    if(isset($_GET['error'])) {
                        if($_GET['error'] == 'email_not_found') {
                            echo "Email address not found. Please try again.";
                        }
                        // Add more error messages if needed
                    }
                ?>
            </div>
        </form>
    </div>
</body>
</html>
