document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});


//timer

$(document).ready(function() {
    // Set the event date
    var eventDate = new Date("July 15, 2024 00:00:00").getTime();

    // Update the countdown every second
    var x = setInterval(function() {
        // Get the current date and time
        var now = new Date().getTime();
        
        // Calculate the time difference between now and the event date
        var distance = eventDate - now;
        
        // Calculate days, hours, minutes, and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the countdown in the container element
        $("#countdown").html("<div>" + days + "d " + hours + "h " + minutes + "m " + seconds + "s</div>");
        
        // If the event date is reached, display a message
        if (distance < 0) {
            clearInterval(x);
            $("#countdown").html("Event has started!");
        }
    }, 1000);
});


//collapse

$(document).ready(function() {
    // Toggle event schedule visibility when button is clicked
    $(".toggle-btn").click(function() {
        // Toggle visibility of schedule content relative to the clicked button
        $(this).siblings('.schedule-content').slideToggle();
        // Change button text based on visibility
        var buttonText = $(this).text() === "Schedule" ? "Hide Schedule" : "Schedule";
        $(this).text(buttonText);
    });
});
