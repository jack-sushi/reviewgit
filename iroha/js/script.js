jQuery('.header--trigger').on('click', function() {
    jQuery('body').append('<div id="modal-overlay"></div>');
    jQuery('#modal-overlay').fadeIn('1500');
    jQuery('.modal__menu').fadeIn('1500');
  });
  
  jQuery(document).on('click', '#modal-overlay', function() {
    jQuery('#modal-overlay').fadeOut('1500');
    jQuery('.modal__menu').fadeOut('1500');
    $('.header--trigger').removeClass('active');
  });

  $('.header--trigger').on('click', function() {
    $('.header--trigger').addClass('active');
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: '.swiper-pagination',
    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
  });


