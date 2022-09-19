(function ($) {
    'use strict';

    var $window = $(window);

    // :: Preloader Active Code
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // :: Nav Active Code
    if ($.fn.classyNav) {
        $('#originalNav').classyNav();
        $('#footerNav').classyNav();
    }

    // :: Newsticker Active Code
    if ($.fn.simpleTicker) {
        $.simpleTicker($("#breakingNewsTicker"), {
            speed: 1000,
            delay: 3500,
            easing: 'swing',
            effectType: 'roll'
        });
    }

    // :: Tooltip Active Code
    $('[data-toggle="tooltip"]').tooltip();

    // :: Owl Carousel Active Code
    if ($.fn.owlCarousel) {
        var welcomeSlide = $('.hero-slides');
        welcomeSlide.owlCarousel({
            items: 2,
            margin: 30,
            loop: true,
            center: true,
            autoplay: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            autoplayTimeout: 5000, // Autoplay Timeout 1s = 1000ms
            smartSpeed: 2000
        });

        welcomeSlide.on('translate.owl.carousel', function () {
            var slideLayer = $("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        welcomeSlide.on('translated.owl.carousel', function () {
            var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        $('.instagram-slides').owlCarousel({
            items: 7,
            margin: 0,
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 2000, // Autoplay Timeout 1s = 1000ms
            smartSpeed: 2000,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                576: {
                    items: 4
                },
                992: {
                    items: 5
                },
                1500: {
                    items: 7
                }
            }
        });
    }

    // :: Sticky Active Code
    if ($.fn.sticky) {
        $("#stickyNav").sticky({
            topSpacing: 0
        });
    }

    // :: Countdown Active Code
    if ($.fn.countdown) {
        $('#clock').countdown('2020/10/10', function (event) {
            $(this).html(event.strftime('<div>%D <span>Days</span></div> <div>%H <span>Hours</span></div> <div>%M <span>Minutes</span></div> <div>%S <span>Seconds</span></div>'));
        });
    }

    // :: CounterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1000,
            easingType: 'easeInOutQuart',
            scrollText: 'Top'
        });
    }

    // :: PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // :: WOW Active Code
    if ($window.width() > 767) {
        new WOW().init();
    }

})(jQuery);