$(document).ready(function() {

    $('.hero').ripples({
        dropRadius: 10,
        perturbance: 0.01
    });


    $('#date').text(new Date().getFullYear());
});