# Assignment 2: Online Registration Form

This is a web application built with HTML, CSS, JavaScript, jQuery, and PHP for an online registration form. The form accepts user information and displays it with formatting/styling upon successful submission.

## Features

- Responsive and modern UI design
- Client-side validation with jQuery
- Server-side processing with PHP
- Formatted display of submitted data
- Error handling and user feedback

## Technologies Used

- HTML5
- CSS3
- JavaScript
- jQuery
- PHP

## File Structure

```
Assignment 2/
├── index.html         # Registration form
├── styles.css         # Styling for the form and results
├── script.js          # Client-side validation and AJAX submission
├── process.php        # Server-side processing and result display
└── README.md          # This file
```

## How to Run Locally

1. Clone or download this repository
2. Place all files in a directory accessible by a web server with PHP support
3. Open `index.html` in your web browser
4. Fill out the registration form and submit

## Hosting on Cloud Platforms

### Option 1: GitHub Pages (Frontend only)
GitHub Pages can host the frontend (HTML, CSS, JS) but not PHP. For a full solution, you'll need a hosting service that supports PHP.

### Option 2: Heroku (Requires Payment)
Heroku now requires payment information for hosting PHP applications. If you prefer to avoid payment, see the free hosting options below.

### Option 3: InfinityFree (Recommended Free Option)
InfinityFree offers completely free PHP hosting with no credit card required:
1. Visit [infinityfree.com](https://www.infinityfree.net/) and sign up for a free account
2. Create a new website with a free subdomain (e.g., yoursite.infinityfreeapp.com)
3. Access the file manager in your control panel
4. Upload all files to the "htdocs" directory
5. Your application will be live at your chosen domain

Features:
- Completely free with no payment required
- No ads on your website
- Supports modern PHP versions
- 5 GB disk space, unlimited bandwidth
- MySQL database support
- 99.9% uptime guarantee

### Option 4: Other Free Hosting Options
Other free PHP hosting providers include:
- **Byet Host**: Free with enterprise-level features
- **AeonFree**: Unlimited bandwidth with PHP 8.2 support
- **000WebHost**: Free hosting with PHP and MySQL support

### Option 5: AWS EC2 (Free Tier Available)
AWS offers a free tier for new users:
1. Sign up for AWS Free Tier
2. Launch an EC2 instance with Amazon Linux
3. Install Apache, PHP, and MySQL
4. Upload files to `/var/www/html/`
5. Configure security groups to allow HTTP traffic

## Form Fields

- First Name (required)
- Last Name (required)
- Email (required)
- Phone Number (required)
- Date of Birth (required)
- Gender (required)
- Address (required)
- Course Selection (required)

## Validation

- All fields are required
- Email format validation
- Phone number format validation (10-15 digits)

## Result Display

Upon successful submission, the application displays:
- Formatted registration details
- Styled presentation of all submitted data
- Option to register another user

## Author

This project was created as part of a web technology assignment.