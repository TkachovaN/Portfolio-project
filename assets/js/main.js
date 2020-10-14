$(document).ready(function () {

   $('.work__slider').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      centerPadding: '0',
      draggable: true
   });

   $('.catalog__block-production_left').slick({
      prevArrow: '<button type="button" class="slick-prev slick-arrows"><img src="assets/images/arrow_prev-yellow.png" alt="Left"></button>',
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
   });

   $('.catalog__block-production_right').slick({
      nextArrow: '<button type="button" class="slick-next slick-arrows"><img src="assets/images/arrow_next-red.png" alt="Right"></button>',
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
   });

   $('.reviews__slider').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      dots: true,
      arrows: true,
      responsive: [
         {
            breakpoint: 992,
            settings: {
               dots: false
            }
         },
         {
            breakpoint: 480,
            settings: {
               arrows: false,
               dots: false
            }
         }
      ]
   });


   $('.advantages__card-title').matchHeight();
   $('.catalog__block-title').matchHeight();
   $('.application__block').matchHeight();


   $('.nav__mobile-menu').hide();
   $('.mobile__menu-btn').click(function () {
      $('.nav__mobile-menu').slideToggle(500);
      $('body').toggleClass('no-scroll');
   });


   $('.callback__btn').click(function () {
      $('.request__callback').show();
   });
   $('.callback__btn').magnificPopup({
      type: 'inline',
      focus: '#name-callback'
   });

   $('.question__btn').click(function () {
      $('.question__callback').show();
   });
   $('.question__btn').magnificPopup({
      type: 'inline',
      focus: '#name-callback'
   });


   let $btnTop = $('.btn__top')
   $(window).on('scroll', function () {
      if ($(window).scrollTop() >= 500) {
         $btnTop.fadeIn();
      } else {
         $btnTop.fadeOut();
      }
   });

   $btnTop.on('click', function () {
      $('html, body').animate({ scrollTop: 0 }, 900)
   });


   $('a[href^="#"]').click(function () {
      let target = $(this).attr('href');
      $('html, body').animate({ scrollTop: $(target).offset().top - 0 }, 700);
   });

});