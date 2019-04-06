$(document).ready(function() {

    $('.hero').ripples({
        dropRadius: 10,
        perturbance: 0.01
    });

    var typed = new Typed('.typed', {
        strings: ["<strong class='primary'>SPARKY.</strong> ^2000", "<strong class='secondary'>Awesome Developers.</strong>^2000"],
        smartBackspace: false,
        loop: true,
        showCursor:true,
        cursorChar:"|",
        typeSpeed: 50,
        backSpeed: 30,
        startDelay:800
      });


    $('#date').text(new Date().getFullYear());
});