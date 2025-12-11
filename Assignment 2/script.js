$(document).ready(function() {
    // Form submission handler
    $('#registrationForm').on('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        
        // Clear previous results
        $('#result').hide().removeClass('success error');
        
        // Get form data
        const formData = $(this).serialize();
        
        // Simple client-side validation
        const firstName = $('#firstName').val().trim();
        const lastName = $('#lastName').val().trim();
        const email = $('#email').val().trim();
        const phone = $('#phone').val().trim();
        const dob = $('#dob').val();
        const gender = $('#gender').val();
        const address = $('#address').val().trim();
        const course = $('#course').val();
        
        // Validate required fields
        if (!firstName || !lastName || !email || !phone || !dob || !gender || !address || !course) {
            showMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Validate phone number (simple validation)
        const phoneRegex = /^\d{10,15}$/;
        if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
            showMessage('Please enter a valid phone number (10-15 digits).', 'error');
            return;
        }
        
        // Submit form via AJAX
        $.ajax({
            url: $(this).attr('action'),
            type: 'POST',
            data: formData,
            dataType: 'html',
            success: function(response) {
                // Display the response from PHP
                $('#result').html(response).addClass('success').show();
                
                // Reset form
                $('#registrationForm')[0].reset();
            },
            error: function(xhr, status, error) {
                showMessage('Registration failed. Please try again.', 'error');
                console.log('Error: ' + error);
            }
        });
    });
    
    // Function to show messages
    function showMessage(message, type) {
        $('#result').html('<p>' + message + '</p>').removeClass('success error').addClass(type).show();
    }
});