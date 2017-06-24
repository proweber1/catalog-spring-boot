$(document).ready(function() {

    $('#basic-owl-carousel').owlCarousel({
        loop: true,
        autoplayHoverPause: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });

    $('#rtl-owl-carousel').owlCarousel({
        loop: true,
        rtl: true,
        autoplayHoverPause: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });

    $('#animate-owl-carousel').owlCarousel({
        animateOut: 'flipOutY',
        animateIn: 'flipInY',
        items: 1,
        loop: true,
        autoplayHoverPause: true,
        autoplay: true,
        autoplayTimeout: 3000
    });

    var mousewheel = $('#mousewheel-owl-carousel');

    mousewheel.owlCarousel({
        items: 1,
        loop: true,
        autoplayHoverPause: true,
        autoplay: true,
        autoplayTimeout: 3000
    });
    mousewheel.on('mousewheel', '.owl-stage', function(e) {
        if (e.deltaY > 0) {
            mousewheel.trigger('next.owl');
        } else {
            mousewheel.trigger('prev.owl');
        }
        e.preventDefault();
    });

});