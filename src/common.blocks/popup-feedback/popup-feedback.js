/* eslint-disable */
$(window).on('load', () => {
  const feedbackModal = $('.popup-feedback');
  const feedButton = $('.js-feedback__button');
  const feedbackCancel = $('.popup-feedback__cancel');
  const pageBody = $('.body');
  const overlay = $('.js-overlay');

  feedbackModal.hide();

  feedButton.click(() => {
    $('.popup').hide();
    feedbackModal.fadeIn();
    pageBody.addClass('body_unscrolled');
    overlay.addClass('is-active');
    $('.popup.popup-feedback').addClass('is-visible');
  });

  feedbackCancel.click(() => {
    pageBody.removeClass('body_unscrolled');
    feedbackModal.fadeOut();
    overlay.removeClass('is-active');
    $('.popup').removeClass('is-visible');
  });
});
