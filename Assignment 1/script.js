// Mobile Navigation Toggle
$(document).ready(function() {
    // Hamburger menu toggle
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        $('.nav-menu').toggleClass('active');
    });

    // Close mobile menu when clicking on a nav link
    $('.nav-link').click(function() {
        $('.hamburger').removeClass('active');
        $('.nav-menu').removeClass('active');
    });

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 1000);
        }
    });

    // Add animation to elements when they come into view
    function animateOnScroll() {
        $('.biodata-card, .resume-section, .about-section').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('animated');
            }
        });
    }

    // Trigger animation on scroll
    $(window).on('scroll', function() {
        animateOnScroll();
    });

    // Initial check for elements in viewport
    animateOnScroll();

    // Form validation for any contact forms (if added later)
    $('form').submit(function(e) {
        e.preventDefault();
        
        // Simple form validation
        var isValid = true;
        $(this).find('input[required], textarea[required]').each(function() {
            if ($(this).val().trim() === '') {
                isValid = false;
                $(this).addClass('error');
            } else {
                $(this).removeClass('error');
            }
        });
        
        if (isValid) {
            // Form is valid - you could submit via AJAX here
            alert('Form submitted successfully!');
            $(this)[0].reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });

    // Add hover effect to buttons
    $('.btn').hover(
        function() {
            $(this).css('transform', 'scale(1.05)');
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );

    // Dynamic year in footer
    const currentYear = new Date().getFullYear();
    $('footer p').text(`© ${currentYear} Personal Portfolio. All rights reserved.`);

    // Add loading animation to cards
    $('.biodata-card, .experience-item, .education-item, .skill-category').hover(
        function() {
            $(this).css('box-shadow', '0 10px 25px rgba(0,0,0,0.15)');
        },
        function() {
            $(this).css('box-shadow', '0 5px 15px rgba(0,0,0,0.05)');
        }
    );

    // Add click effect to cards
    $('.biodata-card, .experience-item, .education-item, .skill-category').mousedown(function() {
        $(this).css('transform', 'scale(0.98)');
    }).mouseup(function() {
        $(this).css('transform', 'scale(1)');
    });

    // Theme toggle functionality (light/dark mode)
    function toggleTheme() {
        const body = $('body');
        const themeToggle = $('#theme-toggle');
        
        if (body.attr('data-theme') === 'dark') {
            body.removeAttr('data-theme');
            themeToggle.find('i').removeClass('fa-sun').addClass('fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            body.attr('data-theme', 'dark');
            themeToggle.find('i').removeClass('fa-moon').addClass('fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    }

    // Theme toggle button event listener
    $('#theme-toggle').click(function(e) {
        e.preventDefault();
        toggleTheme();
    });

    // Check for saved theme preference or respect OS preference
    const savedTheme = localStorage.getItem('theme');
    const osPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && osPrefersDark)) {
        $('body').attr('data-theme', 'dark');
        $('#theme-toggle').find('i').removeClass('fa-moon').addClass('fa-sun');
        $('#theme-toggle').find('span').text('Light Mode');
    }
});