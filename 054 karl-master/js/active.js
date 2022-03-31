(function ($) {
    'use strict';

    // :: 1.0 Fullscreen Active Code
    // :: 2.0 Welcome Slider Active Code
    // :: 3.0 Related Product Active Code
    // :: 4.0 Testimonials Slider Active Code
    // :: 5.0 Gallery Menu Style Active Code
    // :: 6.0 Masonary Gallery Active Code
    // :: 7.0 Header Cart btn Active Code
    // :: 8.0 Side Menu Active Code
    // :: 9.0 Magnific-popup Video Active Code
    // :: 10.0 ScrollUp Active Code
    // :: 11.0 Slider Range Price Active Code
    // :: 12.0 PreventDefault a Click
    // :: 13.0 wow Active Code

    var $window = $(window);

    // :: 1.0 Fullscreen Active Code
    $window.on('resizeEnd', function () {
        $(".full_height").height($window.height());
    });

    $window.on('resize', function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 300);
    }).trigger("resize");

    var welcomeSlide = $('.welcome_slides');

    // :: 2.0 Welcome Slider Active Code
    if ($.fn.owlCarousel) {
        welcomeSlide.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 1000
        });
    }

    // :: 3.0 Related Product Active Code
    if ($.fn.owlCarousel) {
        $('.you_make_like_slider').owlCarousel({
            items: 3,
            margin: 30,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                }
            }
        });
    }

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

    // :: 4.0 Testimonials Slider Active Code
    if ($.fn.owlCarousel) {
        $(".karl-testimonials-slides").owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            dots: true,
            autoplay: true,
            smartSpeed: 1200
        });
    }

    // :: 5.0 Gallery Menu Style Active Code
    $('.portfolio-menu button.btn').on('click', function () {
        $('.portfolio-menu button.btn').removeClass('active');
        $(this).addClass('active');
    })

    // :: 6.0 Masonary Gallery Active Code
    if ($.fn.imagesLoaded) {
        $('.karl-new-arrivals').imagesLoaded(function () {
            // filter items on button click
            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.karl-new-arrivals').isotope({
                itemSelector: '.single_gallery_item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.single_gallery_item'
                }
            });
        });
    }

    // :: 7.0 Header Cart btn Active Code
    $('#header-cart-btn').on('click', function () {
        $('body').toggleClass('cart-data-open');
    })

    // :: 8.0 Side Menu Active Code
    $('#sideMenuBtn').on('click', function () {
        $('#wrapper').toggleClass('karl-side-menu-open');
    })
    $('#sideMenuClose').on('click', function () {
        $('#wrapper').removeClass('karl-side-menu-open');
    })

    // :: 9.0 Magnific-popup Video Active Code
    if ($.fn.magnificPopup) {
        $('.video_btn').magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
        $('.gallery_img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }

    // :: 10.0 ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1000,
            easingType: 'easeInOutQuart',
            scrollText: '<i class="ti-angle-up" aria-hidden="true"></i>'
        });
    }

    // :: 11.0 Slider Range Price Active Code
    $('.slider-range-price').each(function () {
        var min = jQuery(this).data('min');
        var max = jQuery(this).data('max');
        var unit = jQuery(this).data('unit');
        var value_min = jQuery(this).data('value-min');
        var value_max = jQuery(this).data('value-max');
        var label_result = jQuery(this).data('label-result');
        var t = $(this);
        $(this).slider({
            range: true,
            min: min,
            max: max,
            values: [value_min, value_max],
            slide: function (event, ui) {
                var result = label_result + " " + unit + ui.values[0] + ' - ' + unit + ui.values[1];
                console.log(t);
                t.closest('.slider-range').find('.range-price').html(result);
            }
        });
    })

    // :: 12.0 PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // :: 13.0 wow Active Code
    if ($window.width() > 767) {
        new WOW().init();
    }

})(jQuery);