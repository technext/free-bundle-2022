(function ($) {
  "use strict";

  $('#datepicker').datepicker();

  $('.popup-youtube, .popup-vimeo').magnificPopup({
    // disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  $(document).ready(function() {
    $('select').niceSelect();
  });

  var review = $('.client_review_part');
  if (review.length) {
    review.owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: false,
      smartSpeed: 2000,
    });
  }
  // menu fixed js code
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.main_menu').addClass('menu_fixed animated fadeInDown');
    } else {
      $('.main_menu').removeClass('menu_fixed animated fadeInDown');
    }
  });


  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 1000,
    infinite: true,
    asNavFor: '.slider-nav-thumbnails',
    autoplay:true,
    pauseOnHover: true,
    dots: false
  });
 
  $('.slider-nav-thumbnails').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    asNavFor: '.slider',
    infinite: true,
    centerMode: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    prevArrow: '<i class="slick_left ti-angle-double-left"></i>',
    nextArrow: '<i class="slick_right ti-angle-double-right"></i>',
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  });
 
  //remove active class from all thumbnail slides
  $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
 
  //set active class to first thumbnail slides
  $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');
 
  // On before slide change match active thumbnail to current slide
  $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var mySlideNumber = nextSlide;
    $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
    $('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
 });
 
 //UPDATED 
   
 $('.slider').on('afterChange', function(event, slick, currentSlide){   
   $('.content').hide();
   $('.content[data-id=' + (currentSlide + 1) + ']').show();
 }); 

 $('.gallery_img').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});

}(jQuery));