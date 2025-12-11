<?php
// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data and sanitize inputs
    $firstName = isset($_POST['firstName']) ? htmlspecialchars(trim($_POST['firstName'])) : '';
    $lastName = isset($_POST['lastName']) ? htmlspecialchars(trim($_POST['lastName'])) : '';
    $email = isset($_POST['email']) ? htmlspecialchars(trim($_POST['email'])) : '';
    $phone = isset($_POST['phone']) ? htmlspecialchars(trim($_POST['phone'])) : '';
    $dob = isset($_POST['dob']) ? htmlspecialchars(trim($_POST['dob'])) : '';
    $gender = isset($_POST['gender']) ? htmlspecialchars(trim($_POST['gender'])) : '';
    $address = isset($_POST['address']) ? htmlspecialchars(trim($_POST['address'])) : '';
    $course = isset($_POST['course']) ? htmlspecialchars(trim($_POST['course'])) : '';
    
    // Validate required fields
    if (empty($firstName) || empty($lastName) || empty($email) || empty($phone) || 
        empty($dob) || empty($gender) || empty($address) || empty($course)) {
        echo "<div class='error-message'>";
        echo "<h2>Registration Error</h2>";
        echo "<p>Please fill in all required fields.</p>";
        echo "</div>";
        exit;
    }
    
    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<div class='error-message'>";
        echo "<h2>Registration Error</h2>";
        echo "<p>Please enter a valid email address.</p>";
        echo "</div>";
        exit;
    }
    
    // Format course name for display
    $courseNames = [
        'computer-science' => 'Computer Science',
        'business-administration' => 'Business Administration',
        'engineering' => 'Engineering',
        'medicine' => 'Medicine',
        'arts' => 'Arts'
    ];
    $displayCourse = isset($courseNames[$course]) ? $courseNames[$course] : $course;
    
    // Format gender for display
    $genderNames = [
        'male' => 'Male',
        'female' => 'Female',
        'other' => 'Other'
    ];
    $displayGender = isset($genderNames[$gender]) ? $genderNames[$gender] : $gender;
    
    // Format date of birth
    $formattedDob = date('F j, Y', strtotime($dob));
    
    // Display registration details with styling
    echo "
    <!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Registration Successful</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 20px;
                margin: 0;
            }
            .container {
                background: white;
                padding: 30px;
                border-radius: 10px;
                box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
                width: 100%;
                max-width: 600px;
            }
            .success-header {
                text-align: center;
                color: #28a745;
                margin-bottom: 25px;
            }
            .registration-details {
                background: #f8f9fa;
                padding: 25px;
                border-radius: 8px;
            }
            .detail-row {
                display: flex;
                margin-bottom: 15px;
                padding: 10px;
                background: white;
                border-radius: 5px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            }
            .detail-label {
                font-weight: bold;
                color: #555;
                width: 150px;
                flex-shrink: 0;
            }
            .detail-value {
                color: #333;
                flex-grow: 1;
            }
            .back-link {
                text-align: center;
                margin-top: 25px;
            }
            .back-link a {
                color: #667eea;
                text-decoration: none;
                font-weight: bold;
                padding: 10px 20px;
                border: 2px solid #667eea;
                border-radius: 5px;
                transition: all 0.3s;
            }
            .back-link a:hover {
                background: #667eea;
                color: white;
            }
        </style>
    </head>
    <body>
        <div class='container'>
            <h1 class='success-header'>Registration Successful!</h1>
            <div class='registration-details'>
                <div class='detail-row'>
                    <div class='detail-label'>Full Name:</div>
                    <div class='detail-value'>$firstName $lastName</div>
                </div>
                <div class='detail-row'>
                    <div class='detail-label'>Email:</div>
                    <div class='detail-value'>$email</div>
                </div>
                <div class='detail-row'>
                    <div class='detail-label'>Phone:</div>
                    <div class='detail-value'>$phone</div>
                </div>
                <div class='detail-row'>
                    <div class='detail-label'>Date of Birth:</div>
                    <div class='detail-value'>$formattedDob</div>
                </div>
                <div class='detail-row'>
                    <div class='detail-label'>Gender:</div>
                    <div class='detail-value'>$displayGender</div>
                </div>
                <div class='detail-row'>
                    <div class='detail-label'>Address:</div>
                    <div class='detail-value'>$address</div>
                </div>
                <div class='detail-row'>
                    <div class='detail-label'>Course:</div>
                    <div class='detail-value'>$displayCourse</div>
                </div>
            </div>
            <div class='back-link'>
                <a href='index.html'>Register Another User</a>
            </div>
        </div>
    </body>
    </html>";
} else {
    // If accessed directly, redirect to form
    header('Location: index.html');
    exit;
}
?>