$(document).ready(function() {
    $('.scrolldown').on('click', function() {
        var page = $(this).attr('href'); 
        var speed = 750;
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed );
        return false;
    });
});

var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 0,
    autoplay: {
        delay: 500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        200: {
            slidesPerView: 2,
        },
        400: {
            slidesPerView: 3,
        },
        800: {
            slidesPerView: 4,
        },
        1000: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 6,
        },
        1400: {
            slidesPerView: 7,
        },
        1600: {
            slidesPerView: 8,
        },
    },
});