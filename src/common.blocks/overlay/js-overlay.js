$('.js-overlay').click(() => {
  if ($('.popup').hasClass('is-visible')) {
    $('.popup').removeClass('is-visible');
    $('.popup').fadeOut();
    $('.js-overlay').removeClass('is-active');
    $('.body').removeClass('body_unscrolled');
  }
});
