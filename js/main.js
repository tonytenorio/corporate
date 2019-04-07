document.querySelectorAll('.navbar .nav-link').forEach(enlace => {
    enlace.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
  });

$(document).ready(function() {

    $('.hero').ripples({
        dropRadius: 10,
        perturbance: 0.01
    });

    var typed = new Typed('.typed', {
        strings: ["<strong class='primary'>SPARKY.</strong> ^2000", "<strong class='secondary'>Awesome.</strong>^2000"],
        smartBackspace: false,
        loop: true,
        showCursor:true,
        cursorChar:"|",
        typeSpeed: 50,
        backSpeed: 30,
        startDelay:800
      });

      $(window).scroll(function() {
        let position = $(this).scrollTop();
        if(position >= 200) {
          $('nav.navbar').addClass('custom-navbar');
        } else {
          $('nav.navbar').removeClass('custom-navbar');
        }
      });


    $('#date').text(new Date().getFullYear());
});