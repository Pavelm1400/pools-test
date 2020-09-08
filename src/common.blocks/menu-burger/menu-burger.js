$(window).on('load', () => {
  const menuBurger = $('.js__menu-burger');
  const mobileMenu = $('.mobile-menu');
  const pageBody = $('.body');
  const headerCancel = $('.mobile-menu__cancel');

  menuBurger.click(() => {
    mobileMenu.addClass('is-visible');
    pageBody.addClass('body_unscrolled');
  });

  headerCancel.click(() => {
    mobileMenu.removeClass('is-visible');
    pageBody.removeClass('body_unscrolled');
  });
});
